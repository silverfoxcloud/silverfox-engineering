import Link from "next/link";
import type { Locale } from "@/data/content";

const groups = [
  { id: "engineering", en: "Engineering", fa: "مهندسی", items: [["architecture","Architecture","معماری"],["platform","Cloud Platform","پلتفرم ابری"],["cloud","Cloud Infrastructure","زیرساخت ابری"],["security","Security","امنیت"],["data","Data Engineering","مهندسی داده"],["ai","AI Engineering","مهندسی هوش مصنوعی"],["devops-sre","DevOps & SRE","عملیات و قابلیت اتکا"],["technology-radar","Technology Radar","رادار فناوری"]] },
  { id: "platforms", en: "Platforms", fa: "محصولات", items: [["platforms/sfas","SFAS","SFAS"],["platforms/license-platform","License Platform","پلتفرم لایسنس"],["platforms/fox-pay","Fox Pay","Fox Pay"],["platforms/exotravel","ExoTravel","ExoTravel"],["platforms/exohub","ExoHub","ExoHub"]] },
  { id: "resources", en: "Resources", fa: "منابع", items: [["architecture","Engineering principles","اصول مهندسی"],["technology-radar","Technology Radar","رادار فناوری"],["https://git.silverfoxcloud.com","GitHub","GitHub"],["https://www.linkedin.com/company/silverfoxcloud","LinkedIn","LinkedIn"]] }
];

export default function SiteHeader({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const prefix = fa ? "/fa" : "";
  const href = (slug: string) => slug.startsWith("https://") ? slug : `${prefix}/${slug}/`;
  return <header className="siteHeader"><div className="shell navWrap">
    <Link href={fa ? "/fa/" : "/"} className="brand" aria-label="Silver Fox Engineering"><span className="brandLogoWrap"><img src="/silver-fox-logo.svg" alt="" className="brandLogo" /></span><span className="brandText"><strong>Silver Fox</strong><small>Engineering</small></span></Link>
    <nav className="megaNav" aria-label={fa ? "ناوبری اصلی" : "Primary navigation"}>{groups.map(group => <details className="megaGroup" key={group.id}><summary>{fa ? group.fa : group.en}<span aria-hidden="true">⌄</span></summary><div className="megaPanel"><div className="megaItems">{group.items.map(([slug,en,label]) => <Link key={slug} href={href(slug)}>{fa ? label : en}<span aria-hidden="true">↗</span></Link>)}</div><div className="megaFeature"><span>{fa ? "نگاه مهندسی" : "ENGINEERING VIEW"}</span><strong>{fa ? "زیرساخت مشترک، مسیر مستقل محصول" : "Shared foundations. Independent products."}</strong><p>{fa ? "مرزهای روشن و قراردادهای پایدار، محصولات را به هم متصل می‌کنند و استقلال توسعه آن‌ها را حفظ می‌کنند." : "Clear boundaries and stable contracts connect products without coupling their delivery cycles."}</p><Link href={`${prefix}/architecture/`}>{fa ? "معماری را ببینید" : "Explore architecture"}</Link></div></div></details>)}</nav>
    <Link href={fa ? "/" : "/fa/"} className="langSwitch" lang={fa ? "en" : "fa"}>{fa ? "English" : "فارسی"}</Link>
    <details className="mobileMenu"><summary aria-label={fa ? "باز کردن فهرست" : "Open menu"}>☰</summary><nav aria-label={fa ? "فهرست موبایل" : "Mobile menu"}>{groups.map(group => <section key={group.id}><strong>{fa ? group.fa : group.en}</strong>{group.items.map(([slug,en,label]) => <Link key={slug} href={href(slug)}>{fa ? label : en}</Link>)}</section>)}</nav></details>
  </div></header>;
}
