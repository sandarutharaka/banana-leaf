'use client';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {usePathname} from 'next/navigation';
import {navigation} from '@/content/site';
import {siteConfig} from '@/config/site';
import {LeafMark} from './ui';
export function Header(){const [open,setOpen]=useState(false);const dialog=useRef<HTMLDialogElement>(null);const trigger=useRef<HTMLButtonElement>(null);const path=usePathname();
 useEffect(()=>{setOpen(false)},[path]);
 useEffect(()=>{const d=dialog.current;if(!d)return;if(open){d.showModal();const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{d.close();document.body.style.overflow=previous;trigger.current?.focus()}}else d.close()},[open]);
 return <header className="site-header"><Link href="/" className="wordmark" aria-label={`${siteConfig.brandName} home`}><LeafMark/>{siteConfig.brandName}<span className="brand-country" aria-hidden="true">SRI LANKA</span></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.slice(0,3).map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><Link className="header-cta" href="/contact">Request a Quote <span aria-hidden>↗</span></Link><button ref={trigger} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(true)}>Menu <span aria-hidden>☰</span></button><dialog ref={dialog} id="mobile-menu" onCancel={()=>setOpen(false)} onClick={e=>{if(e.target===dialog.current)setOpen(false)}}><div className="drawer"><button className="menu-close" onClick={()=>setOpen(false)}>Close <span aria-hidden>×</span></button><p className="eyebrow">EXPLORE THE LEAF</p><nav aria-label="Mobile navigation">{navigation.map(([label,href])=><Link key={href} onClick={()=>setOpen(false)} href={href}>{label}<span aria-hidden>↗</span></Link>)}</nav><p>Rooted in Sri Lanka.<br/>Made for your table.</p></div></dialog></header>}
