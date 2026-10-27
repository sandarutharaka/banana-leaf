import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
const display=localFont({src:'../../node_modules/@fontsource/dm-serif-display/files/dm-serif-display-latin-400-normal.woff2',variable:'--font-display',display:'swap',fallback:['Georgia']});
const body=localFont({src:'../../node_modules/@fontsource/manrope/files/manrope-latin-400-normal.woff2',variable:'--font-body',display:'swap',fallback:['Arial']});
export const metadata: Metadata = { title: 'Banana leaves · Sri Lanka', description: 'Explore banana leaf options for serving, wrapping and bulk enquiries in Sri Lanka.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${display.variable} ${body.variable}`}><body><div id="site-content"><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/>{process.env.NODE_ENV==='development'&&<div className="dev-note">Local preview · Business details and catalogue need owner approval.</div>}</div></body></html>; }
