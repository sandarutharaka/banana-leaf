import {createHash,createHmac} from 'node:crypto';
import {contactSchema,fieldErrors,type ContactData} from './schema';
import type {MailProvider,RequestStore,RequestRecord,ServiceResult} from './types';
export const failure=(code:string,message:string,status:number,retryAfter?:number):ServiceResult=>({status,body:{ok:false,code,message},retryAfter});
export type ServiceDependencies={store:RequestStore;provider:MailProvider;mode:'mock'|'live';hashSecret:string;verifyBot:(token:string)=>Promise<boolean>;prepare:(data:ContactData,reference:string,date:string)=>Promise<RequestRecord['messages']>;now?:()=>number;ipLimit?:number;addressLimit?:number};
export class ContactService{
 constructor(private d:ServiceDependencies){}
 async submit(raw:unknown,ip:string):Promise<ServiceResult>{const d=this.d;const now=(d.now||Date.now)();const hash=(s:string)=>createHmac('sha256',d.hashSecret).update(s).digest('hex');
 if(!await d.store.attempt(`ip:${hash(ip)}`,d.ipLimit??5,3600))return failure('RATE_LIMITED','You’ve made several attempts. Please wait a little before trying again.',429,3600);
 const parsed=contactSchema.safeParse(raw);if(!parsed.success)return {status:400,body:{ok:false,code:'VALIDATION',message:'Please check the highlighted fields.',fieldErrors:fieldErrors(parsed.error)}};const data=parsed.data;
 if(now-data.submissionStartedAt>=23*3600_000||data.submissionStartedAt>now+60_000)return failure('EXPIRED','This enquiry’s safe retry window has ended. Please contact the business with your existing reference before sending another enquiry.',409);
 if(data.website||!await d.verifyBot(data.botToken))return failure('BOT_CHECK','Please complete the security check again, then retry.',403);
 const {botToken,website,submissionId,...normalized}=data;void botToken;void website;
 const payloadHash=createHash('sha256').update(JSON.stringify(normalized)).digest('hex');const reference=`LEAF-${submissionId.toUpperCase()}`;
 const candidate:RequestRecord={hash:payloadHash,createdAt:now,reference,owner:'pending',customer:'not-attempted',messages:await d.prepare(data,reference,new Date(now).toISOString())};
 const claim=await d.store.claim(submissionId,candidate);if(claim.kind==='conflict')return failure('CONFLICT','This reference belongs to different enquiry details. Restore the original details to retry, or intentionally start a new enquiry.',409);if(claim.kind==='in_progress')return failure('IN_PROGRESS','Your enquiry is still being processed. Please wait before trying again.',409,5);if(claim.kind==='expired')return failure('EXPIRED','This enquiry’s safe retry window has ended. Please contact the business with your existing reference before sending another enquiry.',409);
 const {record,token}=claim;
 try{if(!await d.store.reserve(`address:${hash(data.email)}`,submissionId,d.addressLimit??3,86400))return failure('RATE_LIMITED','You’ve made several attempts. Please wait a little before trying again.',429,86400);
 for(const operation of ['owner','customer'] as const){if(record[operation]==='accepted')continue;record[operation]='unknown';await d.store.save(submissionId,token,record);let result;try{result=await d.provider.send(record.messages[operation],`enquiry/${submissionId}/${operation}`)}catch{result={status:'unknown' as const}}record[operation]=result.status;if(result.status==='accepted')record[operation==='owner'?'ownerId':'customerId']=result.id;await d.store.save(submissionId,token,record);if(operation==='owner'&&result.status!=='accepted')return failure('DELIVERY_UNAVAILABLE',result.status==='unknown'?'We couldn’t confirm submission. Your details are still here; check your connection and try again.':'We couldn’t submit your enquiry right now. Your details are still here. Please try again shortly.',503);}
 return {status:200,body:d.mode==='mock'?{ok:true,mode:'mock',reference}:{ok:true,mode:'live',reference,confirmation:record.customer==='accepted'?'accepted':'failed'}};
 }finally{await d.store.release(submissionId,token)}
 }
}
