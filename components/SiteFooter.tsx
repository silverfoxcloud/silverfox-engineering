import type { Locale } from "@/data/content";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  return (
    <footer>
      <div className="shell footerInner">
        <div className="brand footerBrand">
          <span className="brandLogoWrap"><img src="/silver-fox-logo.svg" alt="" className="brandLogo" /></span>
          <span className="brandText"><strong>Silver Fox</strong><small>Engineering</small></span>
        </div>
        <div className="footerText">
          <span>© 2026 Silver Fox</span>
          <small>{fa ? "پرتال عمومی مهندسی شرکت پردازش ابری روباه نقره‌ای" : "Public engineering portal of Silver Fox"}</small>
        </div>
        <div className="footerLinks">
          {fa
            ? <a href="https://silverfox.ir" rel="noreferrer">پردازش ابری روباه نقره‌ای ↗</a>
            : <a href="https://silverfoxcloud.com" rel="noreferrer">Silver Fox Cloud ↗</a>}
          <a href="https://git.silverfoxcloud.com" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/company/silverfoxcloud" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  );
}
