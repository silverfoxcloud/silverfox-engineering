import { SfSiteFooter } from "@silverfoxcloud/web-ui/footer";
import type { SfFooterColumn } from "@silverfoxcloud/web-ui";
import type { Locale } from "@/data/content";
import { toPersianDigits } from "@silverfoxcloud/web-locale";
import WebUiLinkAdapter from "@/components/WebUiLinkAdapter";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const fa = locale === "fa";

  const columns: SfFooterColumn[] = [
    {
      id: "engineering",
      heading: fa ? "مهندسی" : "Engineering",
      items: [
        { id: "architecture", href: "/architecture/", label: fa ? "معماری" : "Architecture" },
        { id: "security", href: "/security/", label: fa ? "امنیت" : "Security" },
        { id: "devops", href: "/devops-sre/", label: "DevOps & SRE" },
        { id: "data", href: "/data/", label: fa ? "مهندسی داده" : "Data Engineering" },
      ],
    },
    {
      id: "platforms",
      heading: fa ? "پلتفرم‌ها" : "Platforms",
      items: [
        { id: "sfas", href: "/platforms/sfas/", label: "SFAS" },
        { id: "license", href: "/platforms/license-platform/", label: fa ? "پلتفرم لایسنس" : "License Platform" },
        { id: "foxpay", href: "/platforms/fox-pay/", label: "Fox Pay" },
        { id: "exotravel", href: "/platforms/exotravel/", label: "ExoTravel" },
      ],
    },
    {
      id: "packages",
      heading: fa ? "پکیج‌ها" : "Packages",
      items: [
        { id: "directory", href: "/packages/", label: fa ? "دایرکتوری" : "Directory" },
        { id: "core", href: "/packages/sfas-core/", label: "SFAS Core" },
        { id: "react", href: "/packages/sfas-react-adapter/", label: "React Adapter" },
        { id: "date-picker", href: "/packages/sfas-date-picker/", label: "Date Picker" },
      ],
    },
    {
      id: "resources",
      heading: fa ? "منابع" : "Resources",
      items: [
        { id: "principles", href: "/engineering-principles/", label: fa ? "اصول مهندسی" : "Engineering Principles" },
        { id: "radar", href: "/technology-radar/", label: fa ? "رادار فناوری" : "Technology Radar" },
        { id: "github", href: "https://git.silverfoxcloud.com", label: "GitHub ↗", target: "_blank", rel: "noreferrer" },
        { id: "linkedin", href: "https://www.linkedin.com/company/silverfoxcloud", label: "LinkedIn ↗", target: "_blank", rel: "noreferrer" },
        { id: "company", href: fa ? "https://silverfox.ir" : "https://silverfoxcloud.com", label: fa ? "شرکت ↗" : "Company ↗", target: "_blank", rel: "noreferrer" },
      ],
    },
  ];

  const brand = (
    <span className="brand footerBrand">
      <span className="brandLogoWrap">
        <img src="/silver-fox-logo.svg" alt="" className="brandLogo" />
      </span>
      <span className="brandText">
        <strong>Silver Fox</strong>
        <small>Engineering</small>
      </span>
    </span>
  );

  return (
    <SfSiteFooter
      profile="engineering"
      brand={brand}
      brandHref="/"
      identityPlacement="column"
      statement={
        fa
          ? "پرتال عمومی مهندسی شرکت پردازش ابری روباه نقره‌ای؛ برای توضیح معماری، تصمیم‌های فناوری و مرزهای پلتفرمی قابل انتشار."
          : "The public engineering portal for Silver Fox architecture, technology decisions and platform boundaries."
      }
      columns={columns}
      baselineStart={
        <span>{fa ? "© " + toPersianDigits("2026") + " Silver Fox" : "© 2026 Silver Fox"}</span>
      }
      baselineEnd={
        <span>{fa ? "پرتال عمومی مهندسی شرکت پردازش ابری روباه نقره‌ای" : "Public engineering portal"}</span>
      }
      LinkComponent={WebUiLinkAdapter}
    />
  );
}
