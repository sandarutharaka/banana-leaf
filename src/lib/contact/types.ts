import type {MailMessage} from '@/lib/email/messages';
export type DeliveryStatus='pending'|'not-attempted'|'accepted'|'failed'|'unknown';
export type RequestRecord={hash:string;createdAt:number;reference:string;owner:DeliveryStatus;customer:DeliveryStatus;ownerId?:string;customerId?:string;messages:{owner:MailMessage;customer:MailMessage}};
export type Claim={kind:'acquired';record:RequestRecord;token:string}|{kind:'conflict'}|{kind:'in_progress'}|{kind:'expired'};
export interface RequestStore{claim(id:string,record:RequestRecord):Promise<Claim>;save(id:string,token:string,record:RequestRecord):Promise<void>;release(id:string,token:string):Promise<void>;attempt(key:string,limit:number,seconds:number):Promise<boolean>;reserve(key:string,id:string,limit:number,seconds:number):Promise<boolean>}
export type SendResult={status:'accepted';id:string}|{status:'failed'|'unknown'};
export interface MailProvider{send(message:MailMessage,key:string):Promise<SendResult>}
export type ContactResult={ok:true;mode:'mock'|'live';reference:string;confirmation?:'accepted'|'failed'}|{ok:false;code:string;message:string;fieldErrors?:Record<string,string[]>};
export type ServiceResult={status:number;body:ContactResult;retryAfter?:number};
