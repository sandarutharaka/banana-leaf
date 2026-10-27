import {mkdir,writeFile} from 'node:fs/promises';
import {contactSchema} from '../src/lib/contact/schema';
import {createMessages} from '../src/lib/email/messages';
import {validEnquiry} from '../tests/fixture';
async function main(){
await mkdir('.local/email-previews',{recursive:true});
for(const variant of ['standard','long-unicode','no-optional'] as const){const data=contactSchema.parse({...validEnquiry,...(variant==='long-unicode'?{name:'à·ƒà¶³à¶»à·” A very long family name for a narrow email client',company:'A long organisation name used only as synthetic fixture data',message:'First line.\nSecond line with <escaped> text.',quantity:'1000000',unit:'leaves'}:{}),...(variant==='no-optional'?{phone:'',company:'',quantity:'',unit:''}:{})});const messages=await createMessages({data,reference:'LEAF-11111111-1111-4111-8111-111111111111',submittedAt:new Date().toISOString(),settings:{brandName:'YOUR_BRAND',siteUrl:'http://localhost:3000',bannerUrl:variant==='no-optional'?undefined:'http://localhost:3000/images/email/leaf-banner.png'}},{from:'preview@localhost.invalid',ownerTo:'owner@localhost.invalid',replyTo:'reply@localhost.invalid'});for(const role of ['owner','customer'] as const){await writeFile(`.local/email-previews/${role}-${variant}.html`,messages[role].html);await writeFile(`.local/email-previews/${role}-${variant}.txt`,messages[role].text)}}console.log('Synthetic previews written to .local/email-previews. No emails sent.');

}
main().catch(error=>{console.error(error);process.exitCode=1});

