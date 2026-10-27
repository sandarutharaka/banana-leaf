import * as React from 'react';
import {renderToStaticMarkup as render} from 'react-dom/server.edge';
import {CustomerThankYouEmail,OwnerEnquiryEmail,customerPlain,ownerPlain,type EmailProps} from '@/emails/templates';
import {typeLabels} from '@/content/products';
export type MailMessage={from:string;to:string;replyTo:string;subject:string;html:string;text:string};
export type MailConfig={from:string;ownerTo:string;replyTo:string};
export async function createMessages(p:EmailProps,c:MailConfig):Promise<{owner:MailMessage;customer:MailMessage}>{return {owner:{from:c.from,to:c.ownerTo,replyTo:p.data.email,subject:`New ${typeLabels[p.data.type]} enquiry · ${p.reference}`,html:await render(<OwnerEnquiryEmail {...p}/>),text:ownerPlain(p)},customer:{from:c.from,to:p.data.email,replyTo:c.replyTo,subject:`Thank you for contacting ${p.settings.brandName} · ${p.reference}`,html:await render(<CustomerThankYouEmail {...p}/>),text:customerPlain(p)}}}
