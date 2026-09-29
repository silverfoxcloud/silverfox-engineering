import Link from "next/link";
import type { Locale } from "@/data/content";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const localize = (href: string) => fa ? "/fa" + href : href;

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
          <Link href={localize("/architecture/")}>{fa ? "معماری" : "Architecture"}</Link>
          <Link href={localize("/security/")}>{fa ? "امنیت" : "Security"}</Link>
          <Link href={localize("/devops-sre/")}>DevOps & SRE</Link>
          <Link href={localize("/data/")}>{fa ? "مهندسی داده" : "Data Engineering"}</Link>
        </div>

        <div className="footerGroup">
          <strong>{fa ? "پلتفرم‌ها" : "Platforms"}</strong>
          <Link href={localize("/platforms/sfas/")}>SFAS</Link>
          <Link href={localize("/platforms/license-platform/")}>{fa ? "پلتفرم لایسنس" : "License Platform"}</Link>
          <Link href={localize("/platforms/fox-pay/")}>Fox Pay</Link>
          <Link href={localize("/platforms/exotravel/")}>ExoTravel</Link>
        </div>

        <div className="footerGroup">
          <strong>{fa ? "پکیج‌ها" : "Packages"}</strong>
          <Link href={localize("/packages/")}>{fa ? "دایرکتوری" : "Directory"}</Link>
          <Link href={localize("/packages/sfas-core/")}>SFAS Core</Link>
          <Link href={localize("/packages/sfas-react-adapter/")}>React Adapter</Link>
          <Link href={localize("/packages/sfas-date-picker/")}>Date Picker</Link>
        </div>

        <div className="footerGroup">
          <strong>{fa ? "منابع" : "Resources"}</strong>
          <Link href={localize("/engineering-principles/")}>{fa ? "اصول مهندسی" : "Engineering Principles"}</Link>
          <Link href={localize("/technology-radar/")}>{fa ? "رادار فناوری" : "Technology Radar"}</Link>
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
