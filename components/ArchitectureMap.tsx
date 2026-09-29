"use client";
import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/data/content";
const nodes = [
  {en:"Identity & Access",fa:"هویت و دسترسی",path:"security",infoEn:"A shared approach to identity and authorization.",infoFa:"هویت و مجوزدهی با مرزهای روشن."},
  {en:"Multi-tenancy",fa:"چندمستاجری",path:"architecture",infoEn:"Tenant boundaries shape data and access.",infoFa:"مرز مستأجر در داده و دسترسی دیده می‌شود."},
  {en:"License Platform",fa:"پلتفرم لایسنس",path:"platforms/license-platform",infoEn:"Licensing, entitlement and usage governance.",infoFa:"مدیریت لایسنس، حق دسترسی و مصرف."},
  {en:"Fox Pay",fa:"Fox Pay",path:"platforms/fox-pay",infoEn:"Payment orchestration across providers.",infoFa:"هماهنگ‌سازی پرداخت میان درگاه‌ها."},
  {en:"SFAS",fa:"SFAS",path:"platforms/sfas",infoEn:"Shared multilingual admin foundation.",infoFa:"پایه مشترک مدیریت چندزبانه."},
  {en:"Product Domains",fa:"دامنه‌های محصول",path:"platforms/exotravel",infoEn:"Independent ownership of business workflows.",infoFa:"مالکیت مستقل فرایندهای کسب‌وکار."},
  {en:"Security",fa:"امنیت",path:"security",infoEn:"Controls at every boundary.",infoFa:"کنترل در هر مرز معماری."},
  {en:"Observability",fa:"مشاهده‌پذیری",path:"devops-sre",infoEn:"Signals for reliable operation.",infoFa:"نشانه‌هایی برای عملیات قابل اتکا."}
];
export default function ArchitectureMap({locale}:{locale:Locale}) {
 const [active,setActive]=useState<number|null>(null); const fa=locale==="fa";
 return <div className="architectureMap" aria-label={fa?"دیاگرام تعاملی معماری":"Interactive architecture diagram"}>
  <div className="mapCore"><img src="/silver-fox-logo.svg" alt=""/><strong>Silver Fox</strong><span>Cloud Platform</span></div>
  <div className="mapNodes">{nodes.map((n,i)=><Link key={n.en} className={`mapNode ${active===i?"active":""}`} href={`${fa?"/fa":""}/${n.path}/`} onMouseEnter={()=>setActive(i)} onMouseLeave={()=>setActive(null)} onFocus={()=>setActive(i)} onBlur={()=>setActive(null)}><span className="mapNodeIndex">{fa?"۰۱۲۳۴۵۶۷۸۹"[i+1]:i+1}</span><strong>{fa?n.fa:n.en}</strong><small>{fa?n.infoFa:n.infoEn}</small></Link>)}</div>
  <p className="mapCaption">{fa?"هر گره، مسئولیتی مشخص دارد؛ برای جزئیات وارد صفحه آن شوید.":"Each node has a defined responsibility. Select one to explore it."}</p>
 </div>
}
