import {Redis} from '@upstash/redis';
import {isIP} from 'node:net';
import {serverConfig} from '@/config/env.server';
import {siteConfig} from '@/config/site';
import {ContactService} from '@/lib/contact/service';
import {MemoryStore} from '@/lib/contact/memory-store';
import {RedisStore} from '@/lib/contact/redis-store';
import {MockProvider,ResendProvider} from '@/lib/email/provider';
import {createMessages} from '@/lib/email/messages';
import {verifyTurnstile} from '@/lib/contact/turnstile';
export const runtime='nodejs';
const mockStore=new MemoryStore();
const reply=(status:number,code:string,message:string)=>Response.json({ok:false,code,message},{status,headers:{'Cache-Control':'no-store'}});
export async function POST(request:Request){
 try{const config=serverConfig();if(!config.origins.includes(request.headers.get('origin')||''))return reply(403,'BOT_CHECK','This request could not be verified. Please use the contact form.');if(request.headers.get('content-type')?.split(';')[0]!=='application/json')return reply(415,'VALIDATION','Please submit the contact form as JSON.');if(Number(request.headers.get('content-length'))>16384)return reply(413,'VALIDATION','Your enquiry is too large. Please shorten your message.');
 const reader=request.body?.getReader();if(!reader)return reply(400,'VALIDATION','Please complete the enquiry form.');let bytes=0;const chunks:Uint8Array[]=[];while(true){const chunk=await reader.read();if(chunk.done)break;bytes+=chunk.value.length;if(bytes>16384){await reader.cancel();return reply(413,'VALIDATION','Your enquiry is too large. Please shorten your message.')}chunks.push(chunk.value)}let raw:unknown;try{raw=JSON.parse(Buffer.concat(chunks).toString('utf8'))}catch{return reply(400,'VALIDATION','Please complete the enquiry form.')}
 // Production deployment must configure an ingress that overwrites this header.
 const ip=config.mode==='mock'?'local-preview':request.headers.get(config.trustedIpHeader)||'';if(config.mode==='live'&&!isIP(ip))return reply(503,'CONFIGURATION','The contact form is temporarily unavailable. Please try again later.');
 const service=new ContactService({mode:config.mode,hashSecret:config.hashSecret,store:config.mode==='mock'?mockStore:new RedisStore(new Redis({url:config.redisUrl,token:config.redisToken,retry:false})),provider:config.mode==='mock'?new MockProvider():new ResendProvider(config.resendKey),verifyBot:token=>config.mode==='mock'?Promise.resolve(true):verifyTurnstile(token,config.botSecret,new URL(config.siteUrl).hostname),prepare:(data,reference,submittedAt)=>createMessages({data,reference,submittedAt,settings:{brandName:siteConfig.brandName,siteUrl:config.siteUrl,bannerUrl:`${config.siteUrl}/images/email/leaf-banner.png`}},{from:config.from,ownerTo:config.ownerTo,replyTo:config.replyTo})});const result=await service.submit(raw,ip);return Response.json(result.body,{status:result.status,headers:{'Cache-Control':'no-store',...(result.retryAfter?{'Retry-After':String(result.retryAfter)}:{})}})}catch{console.info('contact',{status:'unavailable'});return reply(503,'CONFIGURATION','The contact form is temporarily unavailable. Please try again later.')}
}

