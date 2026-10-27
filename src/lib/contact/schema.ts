import {z} from 'zod';
import {productIds,enquiryTypes} from '@/content/products';
export function colomboToday(now=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Colombo',year:'numeric',month:'2-digit',day:'2-digit'}).format(now)}
const single=(max:number)=>z.string().trim().max(max).refine(s=>!/[\u0000-\u001f\u007f]/.test(s),'Use a single line without control characters.');
export const contactSchema=z.object({
 submissionId:z.string().uuid(),submissionStartedAt:z.number().int().positive(),name:single(100).min(2,'Enter your name.'),email:single(254).email('Enter a valid email address so we can reply.').transform(s=>s.toLowerCase()),phone:single(30),company:single(120),type:z.enum(enquiryTypes),product:z.enum(productIds),quantity:single(20),unit:z.enum(['','leaves','kg']),dimensions:single(100),town:single(120),country:single(120),preferredDate:single(10),message:z.string().trim().min(10,'Tell us a little more—please enter at least 10 characters.').max(2000,'Keep your message within 2,000 characters.').refine(s=>!/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(s),'Remove control characters.'),privacy:z.literal(true,{error:'Please read and acknowledge the Privacy Notice.'}),website:single(200),botToken:z.string().max(2048),
}).strict().superRefine((p,ctx)=>{
 const issue=(path:string,message:string)=>ctx.addIssue({code:'custom',path:[path],message});
 if(p.quantity){if(!p.unit)issue('unit','Choose leaves or kilograms for the quantity.');const n=Number(p.quantity);if(!/^\d+(\.\d{1,2})?$/.test(p.quantity)||!Number.isFinite(n)||n<=0||(p.unit==='leaves'&&(!Number.isInteger(n)||n>1_000_000))||(p.unit==='kg'&&(n<.1||n>100_000)))issue('quantity','Enter a positive quantity, or leave it blank if you’re unsure.');}
 if(p.type==='overseas'){if(!p.country)issue('country','Enter your destination country.')}else if(!p.town)issue('town','Enter your town or destination country.');
 if(p.preferredDate){const d=new Date(p.preferredDate+'T00:00:00Z');if(!/^\d{4}-\d{2}-\d{2}$/.test(p.preferredDate)||!Number.isFinite(d.getTime())||d.toISOString().slice(0,10)!==p.preferredDate||p.preferredDate<colomboToday())issue('preferredDate','Choose today or a later date, or leave this blank.');}
}).transform(p=>({...p,quantity:p.quantity?String(Number(p.quantity)):'',unit:p.quantity?p.unit:'',country:p.type==='overseas'?p.country:'Sri Lanka',destination:{town:p.town,country:p.type==='overseas'?p.country:'Sri Lanka'}}));
export type ContactData=z.output<typeof contactSchema>;
export function quantityLabel(p:Pick<ContactData,'quantity'|'unit'>){return p.quantity?`${p.quantity} ${p.unit}`:'Not specified'}
export function fieldErrors(error:z.ZodError){const fields:Record<string,string[]>={};for(const issue of error.issues){const key=String(issue.path[0]||'form');(fields[key]??=[]).push(issue.message)}return fields}
