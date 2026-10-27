import 'server-only';
import {Resend} from 'resend';
import type {MailProvider,SendResult} from '@/lib/contact/types';
import type {MailMessage} from './messages';
export class ResendProvider implements MailProvider{
 private client:Resend;constructor(key:string){this.client=new Resend(key)}
 async send(message:MailMessage,key:string):Promise<SendResult>{const start=Date.now();try{const result=await this.client.emails.send(message,{idempotencyKey:key,signal:AbortSignal.timeout(8000)});if(result.error){console.info('mail',{key,status:'provider-error',duration:Date.now()-start});return {status:result.error.name==='application_error'||result.error.name==='internal_server_error'?'unknown':'failed'}}if(!result.data?.id)return {status:'unknown'};console.info('mail',{key,status:'accepted',id:result.data.id,duration:Date.now()-start});return {status:'accepted',id:result.data.id}}catch{console.info('mail',{key,status:'unknown',duration:Date.now()-start});return {status:'unknown'}}}
}
export class MockProvider implements MailProvider{async send(_message:MailMessage,key:string):Promise<SendResult>{return {status:'accepted',id:`mock:${key}`}}}
