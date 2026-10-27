import 'server-only';
import {z} from 'zod';
import {siteConfig} from './site';
const email=z.string().email();
export function serverConfig(){const mode=process.env.EMAIL_MODE||'mock';if(mode!=='mock'&&mode!=='live')throw new Error('CONFIGURATION');const siteUrl=process.env.SITE_URL||'http://localhost:3000';const url=new URL(siteUrl);const origins=(process.env.ALLOWED_ORIGINS||'http://localhost:3000').split(',').map(v=>new URL(v.trim()).origin);
 if(mode==='mock')return {mode,siteUrl:url.origin,origins,from:'Preview <preview@localhost.invalid>',ownerTo:'owner@localhost.invalid',replyTo:'reply@localhost.invalid',hashSecret:'local-mock-only',resendKey:'',botSecret:'',redisUrl:'',redisToken:'',trustedIpHeader:''} as const;
 const required=['RESEND_API_KEY','CONTACT_TO_EMAIL','EMAIL_FROM','CONTACT_REPLY_TO_EMAIL','TURNSTILE_SECRET_KEY','UPSTASH_REDIS_REST_URL','UPSTASH_REDIS_REST_TOKEN','RATE_LIMIT_HASH_SECRET','TRUSTED_IP_HEADER','ALLOWED_ORIGINS','NEXT_PUBLIC_TURNSTILE_SITE_KEY'];for(const key of required)if(!process.env[key])throw new Error('CONFIGURATION');
 if(url.protocol!=='https:'||url.hostname==='localhost'||!siteConfig.businessContentApproved||siteConfig.brandName==='YOUR_BRAND'||siteConfig.siteUrl!==url.origin)throw new Error('CONFIGURATION');
 const ownerTo=email.parse(process.env.CONTACT_TO_EMAIL);const replyTo=email.parse(process.env.CONTACT_REPLY_TO_EMAIL);const from=process.env.EMAIL_FROM!;email.parse(from.match(/<([^>]+)>$/)?.[1]||from);if(/resend\.dev/i.test(from)||/[\r\n]/.test(from)||process.env.RATE_LIMIT_HASH_SECRET!.length<32||new URL(process.env.UPSTASH_REDIS_REST_URL!).protocol!=='https:'||!origins.includes(url.origin))throw new Error('CONFIGURATION');
 return {mode,siteUrl:url.origin,origins,from,ownerTo,replyTo,hashSecret:process.env.RATE_LIMIT_HASH_SECRET!,resendKey:process.env.RESEND_API_KEY!,botSecret:process.env.TURNSTILE_SECRET_KEY!,redisUrl:process.env.UPSTASH_REDIS_REST_URL!,redisToken:process.env.UPSTASH_REDIS_REST_TOKEN!,trustedIpHeader:process.env.TRUSTED_IP_HEADER!.toLowerCase()} as const;
}
