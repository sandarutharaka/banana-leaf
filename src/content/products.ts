import { siteConfig } from '@/config/site';
export const productIds = ['whole-leaves','cut-leaves','bulk-supply','not-sure'] as const;
export const productLabels: Record<typeof productIds[number],string> = {'whole-leaves':'Whole Banana Leaves','cut-leaves':'Cut-to-Size Leaves','bulk-supply':'Bulk Supply Enquiries','not-sure':'Not sure yet'};
export const enquiryTypes = ['general','household','catering','wholesale','overseas'] as const;
export const typeLabels: Record<typeof enquiryTypes[number],string> = {general:'General enquiry',household:'Household',catering:'Catering / Restaurant',wholesale:'Wholesale',overseas:'Overseas buyer'};
export const products = [
 {id:'whole-leaves',name:productLabels['whole-leaves'],description:'A flexible choice for serving, wrapping and preparing leaves to suit your kitchen.',chips:['Whole leaf','Size on request'],cta:'Enquire About Whole Leaves',image:'whole-leaves',alt:'Three whole banana leaves arranged in a loose fan',use:'Serving, wrapping and kitchen preparation'},
 {id:'cut-leaves',name:productLabels['cut-leaves'],description:'Planning individual servings or food parcels? Tell us the dimensions and quantity you need.',chips:['Custom dimensions','Availability to confirm'],cta:'Request Your Size',image:'cut-leaves',alt:'A layered stack of rectangular banana-leaf portions',use:'Individual servings and food parcels'},
 {id:'bulk-supply',name:productLabels['bulk-supply'],description:'Discuss a one-off bulk requirement or regular supply for your restaurant, catering service or retail business.',chips:['Wholesale','One-off or recurring'],cta:'Discuss Bulk Supply',image:'bulk-leaves',alt:'Broad folded banana leaves arranged in a stack',use:'Restaurant, catering and retail requirements'},
].map(p=>({...p,enabled:true,supplyConfirmed:false}));
export const visibleProducts = products.filter(p=>p.enabled && siteConfig.catalogueProductIds.includes(p.id) && (!siteConfig.businessContentApproved || p.supplyConfirmed));
export function selectedProduct(value:string|undefined) { return visibleProducts.some(p=>p.id===value) ? value! : 'not-sure'; }
