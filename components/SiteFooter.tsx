import Link from "next/link";
import type { Locale } from "@/data/content";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const fa = locale === "fa";

  return (
    <footer className="engineeringFooter">
      <div className="shell footerGrid">
        <div className="footerIdentity">
          <div className="brand footerBrand">
            <span className="brandLogoWrap">
              <img src="/silver-fox-logo.svg" alt="" className="brandLogo" />
            </span>
            <span className="brandText">
              <strong>Silver Fox</strong>
              <small>Engineering</small>
            </span>
          </div>
          <p>
            {fa
              ? "پرتال عمومی مهندسی شرکت پردازش ابری روباه نقره‌ای؛ برای توضیح معماری، تصمیم‌های فناوری و مرزهای پلتفرمی قابل انتشار."
              : "The public engineering portal for Silver Fox architecture, technology decisions and platform boundaries."}
          </p>
        </div>

        <div className="footerGroup">
          <strong>{fa ? "مهندسی" : "Engineering"}</strong>
          <Link href="/architecture/">{fa ? "معماری" : "Architecture"}</Link>
          <Link href="/security/">{fa ? "امنیت" : "Security"}</Link>
          <Link href="/devops-sre/">DevOps & SRE</Link>
          <Link href="/data/">{fa ? "مهندسی داده" : "Data Engineering"}</Link>
        </div>

        <div className="footerGroup">
          <strong>{fa ? "پلتفرم‌ها" : "Platforms"}</strong>
          <Link href="/platforms/sfas/">SFAS</Link>
          <Link href="/platforms/license-platform/">{fa ? "پلتفرم لایسنس" : "License Platform"}</Link>
          <Link href="/platforms/fox-pay/">Fox Pay</Link>
          <Link href="/platforms/exotravel/">ExoTravel</Link>
        </div>

        <div className="footerGroup">
          <strong>{fa ? "منابع" : "Resources"}</strong>
          <Link href="/engineering-principles/">{fa ? "اصول مهندسی" : "Engineering Principles"}</Link>
          <Link href="/technology-radar/">{fa ? "رادار فناوری" : "Technology Radar"}</Link>
          <a href="https://git.silverfoxcloud.com" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/company/silverfoxcloud" rel="noreferrer">LinkedIn ↗</a>
          <a href={fa ? "https://silverfox.ir" : "https://silverfoxcloud.com"} rel="noreferrer">
            {fa ? "شرکت ↗" : "Company ↗"}
          </a>
        </div>
      </div>

      <div className="shell footerMeta">
        <span>{fa ? "© ۲۰۲۶ Silver Fox" : "© 2026 Silver Fox"}</span>
        <span>{fa ? "پرتال عمومی مهندسی شرکت پردازش ابری روباه نقره‌ای" : "Public engineering portal"}</span>
      </div>
    </footer>
  );
}
