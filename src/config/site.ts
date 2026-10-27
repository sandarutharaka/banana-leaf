export const siteConfig = {
  brandName: 'YOUR_BRAND', tagline: 'Naturally made. Thoughtfully supplied.',
  country: 'Sri Lanka', town: '', publicEmail: '', whatsappNumber: '', siteUrl: '', logoPath: '',
  showOverseasEnquiries: true, catalogueProductIds: ['whole-leaves', 'cut-leaves', 'bulk-supply'],
  businessContentApproved: false, privacyUpdatedDate: '27 October 2026',
  privacyContactEmail: '', hostingProviderName: '', businessRetentionPolicy: '',
};
export const whatsappUrl = siteConfig.whatsappNumber ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hello, I’d like to enquire about banana leaves.')}` : '';
