'use client';
import {useEffect,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import gsap from 'gsap';
import {siteConfig} from '@/config/site';
export const INTRO_KEY='leaf-intro-v1';
export function LeafIntro(){const [active,setActive]=useState(false);const overlay=useRef<HTMLDivElement>(null);const finish=useRef<()=>void>(()=>{});const replay=useRef(false);
 useEffect(()=>{let cancelled=false,interacted=false;const mq=matchMedia('(prefers-reduced-motion: reduce)');const mark=()=>{interacted=true};const events=['pointerdown','keydown','wheel','touchstart','focusin'];events.forEach(e=>window.addEventListener(e,mark,{once:true}));
 const start=async(explicit=false)=>{if(mq.matches)return;if(!explicit){let seen=false;try{seen=!!sessionStorage.getItem(INTRO_KEY)}catch{return}if(seen||location.hash||scrollY>8||performance.now()>2500||document.activeElement!==document.body)return;}
 const ready=await Promise.race([Promise.all(['left','right'].map(side=>new Promise<boolean>(resolve=>{const img=new window.Image();img.onload=()=>resolve(true);img.onerror=()=>resolve(false);img.src=`/illustrations/leaf-intro-${side}.svg`;if(img.complete)resolve(img.naturalWidth>0)}))),new Promise<boolean[]>(resolve=>setTimeout(()=>resolve([false]),180))]);
 if(cancelled||ready.some(v=>!v)||mq.matches||(!explicit&&(interacted||scrollY>8)))return;replay.current=explicit;try{sessionStorage.setItem(INTRO_KEY,'started')}catch{return}setActive(true);
 };void start();const onReplay=()=>{if(!active)void start(true)};const onMotion=()=>{if(mq.matches)finish.current()};window.addEventListener('replay-leaf-intro',onReplay);mq.addEventListener('change',onMotion);return()=>{cancelled=true;events.forEach(e=>window.removeEventListener(e,mark));window.removeEventListener('replay-leaf-intro',onReplay);mq.removeEventListener('change',onMotion)};
 },[]);
 useEffect(()=>{if(!active||!overlay.current)return;const root=overlay.current;const content=document.getElementById('site-content');const previousOverflow=document.body.style.overflow;const previousFocus=document.activeElement as HTMLElement|null;let done=false;const mobile=matchMedia('(max-width: 767px)').matches;let timeline:gsap.core.Timeline|undefined;
 const cleanup=(state='completed')=>{if(done)return;done=true;timeline?.kill();gsap.set('.hero-copy h1',{clearProps:'opacity,transform'});gsap.set('.hero-cutout',{clearProps:'opacity,transform'});clearTimeout(timer);content?.removeAttribute('inert');document.body.style.overflow=previousOverflow;const hadFocus=root.contains(document.activeElement);root.style.display='none';try{sessionStorage.setItem(INTRO_KEY,state)}catch{}setActive(false);if(hadFocus){if(replay.current&&previousFocus?.isConnected)previousFocus.focus({preventScroll:true});else document.getElementById('main')?.focus({preventScroll:true})}};
 const timer=setTimeout(()=>cleanup('failed'),1950);finish.current=()=>cleanup('skipped');content?.setAttribute('inert','');document.body.style.overflow='hidden';root.querySelector<HTMLButtonElement>('button')?.focus({preventScroll:true});const esc=(e:KeyboardEvent)=>{if(e.key==='Escape')cleanup('skipped');if(e.key==='Tab'){e.preventDefault();root.querySelector<HTMLButtonElement>('button')?.focus()}};window.addEventListener('keydown',esc);
 try{timeline=gsap.timeline({onComplete:()=>cleanup()});const duration=mobile?.78:1.05;const start=mobile?.08:.2;
 if(!mobile)timeline.to(root.querySelectorAll('.intro-leaf img'),{filter:'brightness(1.12)',duration:.25},.1);
 timeline.to(root.querySelector('.intro-left'),{xPercent:-110,rotation:mobile?-7:-12,duration,ease:'power3.inOut'},start).to(root.querySelector('.intro-right'),{xPercent:110,rotation:mobile?7:12,duration,ease:'power3.inOut'},start+.07).to(root.querySelector('.intro-backdrop'),{opacity:0,duration:mobile?.45:.8},mobile?.35:.55).to(root.querySelector('.intro-wordmark'),{opacity:0,duration:.25},.2);
 if(!mobile&&!replay.current){timeline.fromTo('.hero-copy h1',{y:20,opacity:0},{y:0,opacity:1,duration:.55,clearProps:'all'},.8);timeline.fromTo('.hero-cutout',{y:24,scale:.97},{y:0,scale:1,duration:.8,clearProps:'y,scale'},.55)}timeline.to({},{duration:mobile?.06:.1},mobile?.94:1.45);
 }catch{cleanup('failed')}
 return()=>{cleanup('failed');window.removeEventListener('keydown',esc)};
 },[active]);
 return active?createPortal(<div ref={overlay} className="leaf-intro" role="dialog" aria-modal="true" aria-label="Opening banana leaves"><div className="intro-backdrop"/><div className="intro-leaf intro-left"><img src="/illustrations/leaf-intro-left.svg" alt=""/></div><div className="intro-leaf intro-right"><img src="/illustrations/leaf-intro-right.svg" alt=""/></div><p className="intro-wordmark">{siteConfig.brandName}</p><button className="intro-skip" onClick={()=>finish.current()}>Skip intro ↗</button></div>,document.body):null;
}
