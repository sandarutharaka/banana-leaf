'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {siteConfig,whatsappUrl} from '@/config/site';
import {copy} from '@/content/site';
import {LeafMark} from './ui';
export function Footer(){const home=usePathname()==='/';return <footer className="site-footer"><div className="container footer-top"><div><Link href="/" className="wordmark"><LeafMark/>{siteConfig.brandName}</Link><p>{copy.footer}</p></div><div><p className="eyebrow">EXPLORE</p><Link href="/#products">Our Leaves</Link><Link href="/#our-story">Our Story</Link><Link href="/#how-it-works">How It Works</Link><Link href="/#wholesale">Wholesale</Link></div><div><p className="eyebrow">GET IN TOUCH</p><Link href="/contact">Contact Us ↗</Link>{siteConfig.publicEmail&&<a href={`mailto:${siteConfig.publicEmail}`}>{siteConfig.publicEmail}</a>}{whatsappUrl&&<a href={whatsappUrl}>WhatsApp ↗</a>}<Link href="/privacy">Privacy Notice</Link></div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} {siteConfig.brandName}. Sri Lanka.</p>{home&&<button onClick={()=>window.dispatchEvent(new Event('replay-leaf-intro'))}>Replay leaf opening ↺</button>}<span>A natural part of your table.</span></div></footer>}
