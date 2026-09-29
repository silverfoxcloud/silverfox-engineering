import Link from "next/link";
import type { Locale } from "@/data/content";

export default function SiteHeader({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const prefix = fa ? "/fa" : "";
  return (
    <header className="siteHeader">
      <div className="shell navWrap">
        <Link href={fa ? "/fa/" : "/"} className="brand" aria-label="Silver Fox Engineering">
          <span className="brandLogoWrap"><img src="/silver-fox-logo.svg" alt="" className="brandLogo" /></span>
          <span className="brandText"><strong>Silver Fox</strong><small>Engineering</small></span>
        </Link>
        <nav className="navLinks" aria-label={fa ? "ناوبری اصلی" : "Primary navigation"}>
          <Link href={`${prefix}/architecture/`}>{fa ? "معماری" : "Architecture"}</Link>
          <Link href={`${prefix}/platform/`}>{fa ? "پلتفرم" : "Platform"}</Link>
          <Link href={`${prefix}/cloud/`}>{fa ? "زیرساخت ابری" : "Cloud"}</Link>
          <Link href={`${prefix}/security/`}>{fa ? "امنیت" : "Security"}</Link>
          <Link href={`${prefix}/technology-radar/`}>{fa ? "رادار فناوری" : "Technology Radar"}</Link>
        </nav>
        <Link href={fa ? "/" : "/fa/"} className="langSwitch">{fa ? "English" : "فارسی"}</Link>
      </div>
    </header>
  );
}
