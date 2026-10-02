"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { SfSiteHeader } from "@silverfoxcloud/web-ui/header";
import type { SfNavigationGroup } from "@silverfoxcloud/web-ui";
import type { Locale } from "@/data/content";
import { useLocale } from "@/components/LocaleProvider";
import WebUiLinkAdapter from "@/components/WebUiLinkAdapter";

const groups = [
  {
    id: "engineering",
    en: "Engineering",
    fa: "مهندسی",
    items: [
      ["architecture", "Architecture", "معماری", "Boundaries, contracts and system evolution", "مرزها، قراردادها و تکامل سیستم"],
      ["platform", "Cloud Platform", "پلتفرم ابری", "Reusable capabilities with product-owned boundaries", "قابلیت مشترک با مالکیت مستقل محصول"],
      ["cloud", "Cloud Infrastructure", "زیرساخت ابری", "Repeatable environments, delivery and operations", "محیط، تحویل و عملیات تکرارپذیر"],
      ["security", "Security", "امنیت", "Least privilege, isolation and auditability", "کمترین دسترسی، جداسازی و ممیزی‌پذیری"],
      ["data", "Data Engineering", "مهندسی داده", "Ownership, contracts and trustworthy state", "مالکیت، قرارداد و داده قابل اتکا"],
      ["ai", "AI Engineering", "مهندسی هوش مصنوعی", "Evaluation, traceability and human ownership", "ارزیابی، ردیابی و مسئولیت انسانی"],
      ["devops-sre", "DevOps & SRE", "DevOps و SRE", "Delivery feedback, telemetry and recovery", "بازخورد تحویل، telemetry و بازیابی"],
      ["technology-radar", "Technology Radar", "رادار فناوری", "Current choices, trials and assessments", "انتخاب‌های فعلی، آزمایش‌ها و ارزیابی‌ها"],
    ],
    feature: {
      en: {
        eyebrow: "ENGINEERING MODEL",
        title: "Boundaries that keep change controlled.",
        body: "Architecture, security, data and operations share engineering rules without collapsing into one tightly coupled system.",
        cta: "Explore architecture",
        href: "/architecture/",
      },
      fa: {
        eyebrow: "مدل مهندسی",
        title: "مرزهایی که تغییر را کنترل‌پذیر می‌کنند.",
        body: "معماری، امنیت، داده و عملیات از قواعد مشترک پیروی می‌کنند؛ بدون اینکه محصولات به یک چرخه توسعه وابسته شوند.",
        cta: "مشاهده معماری",
        href: "/architecture/",
      },
    },
  },
  {
    id: "platforms",
    en: "Platforms",
    fa: "پلتفرم‌ها",
    items: [
      ["platforms/sfas", "SFAS", "SFAS", "Administration foundations, design primitives and RTL/LTR", "زیرساخت مدیریت، design primitives و RTL/LTR"],
      ["platforms/license-platform", "License Platform", "پلتفرم لایسنس", "Licensing, entitlements and tenant-aware enforcement", "لایسنس، حق دسترسی و اعمال محدودیت با مرز مستأجر"],
      ["platforms/fox-pay", "Fox Pay", "Fox Pay", "Payment orchestration, routing and reconciliation", "ارکستریشن پرداخت، مسیریابی و تطبیق تراکنش"],
      ["platforms/exotravel", "ExoTravel", "ExoTravel", "Travel-commerce workflows with product ownership", "گردش‌کارهای travel-commerce با مالکیت مستقل محصول"],
      ["platforms/exohub", "ExoHub", "ExoHub", "Integration responsibilities across the ecosystem", "مسئولیت‌های یکپارچه‌سازی در سطح اکوسیستم"],
    ],
    feature: {
      en: {
        eyebrow: "PLATFORM CONTRACTS",
        title: "Shared capabilities without shared release cycles.",
        body: "Products consume identity, licensing, payments and administration through explicit contracts while keeping their own domain logic and delivery path.",
        cta: "View platform model",
        href: "/platform/",
      },
      fa: {
        eyebrow: "قراردادهای پلتفرمی",
        title: "قابلیت مشترک، بدون قفل‌کردن مسیر توسعه محصول.",
        body: "محصولات هویت، لایسنس، پرداخت و مدیریت را از طریق قراردادهای روشن مصرف می‌کنند و منطق دامنه و چرخه انتشار خود را مستقل نگه می‌دارند.",
        cta: "مشاهده مدل پلتفرم",
        href: "/platform/",
      },
    },
  },
  {
    id: "packages",
    en: "Packages",
    fa: "پکیج‌ها",
    items: [
      ["packages", "Package Directory", "دایرکتوری پکیج‌ها", "Verified packages, versions and lifecycle", "پکیج‌های تأییدشده، نسخه و وضعیت انتشار"],
      ["packages/sfas-core", "SFAS Core", "SFAS Core", "Framework-independent shared runtime contracts", "هسته مستقل از فریم‌ورک و قراردادهای مشترک"],
      ["packages/sfas-react-adapter", "React Adapter", "React Adapter", "React lifecycle bridge for SFAS", "پل lifecycle برای استفاده از SFAS در React"],
      ["packages/sfas-date-picker", "Date Picker", "Date Picker", "Gregorian bridge and native Jalali calendar", "bridge گرگوری و تقویم جلالی بومی"],
    ],
    feature: {
      en: {
        eyebrow: "CURRENT RELEASE",
        title: "Seven verified SFAS packages. One explicit prerelease state.",
        body: "Version 0.2.0-alpha.12 is published to private GitHub Packages on the next channel, with controlled publication and clean-install validation completed.",
        cta: "Browse packages",
        href: "/packages/",
      },
      fa: {
        eyebrow: "انتشار فعلی",
        title: "هفت پکیج واقعی SFAS با وضعیت پیش‌انتشار روشن.",
        body: "نسخه 0.2.0-alpha.12 در GitHub Packages خصوصی و کانال next منتشر شده و انتشار کنترل‌شده و clean install آن اعتبارسنجی شده است.",
        cta: "مرور پکیج‌ها",
        href: "/packages/",
      },
    },
  },
  {
    id: "resources",
    en: "Resources",
    fa: "منابع",
    items: [
      ["engineering", "Engineering Notes", "یادداشت‌های مهندسی", "Source-grounded technical writing", "نوشته‌های فنی مبتنی بر شواهد واقعی"],
      ["architecture-decisions", "Architecture Decisions", "تصمیم‌های معماری", "Public ADRs, constraints and trade-offs", "ADRهای عمومی، محدودیت‌ها و trade-offها"],
      ["build-stories", "Build Stories", "روایت‌های ساخت", "How real Silver Fox systems were built", "روایت ساخت واقعی سامانه‌های Silver Fox"],
      ["changelog", "Changelog", "تغییرات مهندسی", "Verified releases and completed engineering work", "انتشارها و کار مهندسی تأییدشده"],
      ["engineering-principles", "Engineering Principles", "اصول مهندسی", "Ownership, contracts, security and operational rules", "مالکیت، قرارداد، امنیت و قواعد عملیاتی"],
      ["technology-radar", "Technology Radar", "رادار فناوری", "A public view of technology decisions", "نمای عمومی از تصمیم‌های فناوری"],
      ["https://git.silverfoxcloud.com", "GitHub", "GitHub", "Public repositories and engineering work", "مخزن‌های عمومی و کار مهندسی"],
    ],
    feature: {
      en: {
        eyebrow: "ENGINEERING KNOWLEDGE",
        title: "Engineering decisions should be explainable.",
        body: "The portal documents public architecture choices, trade-offs and operating principles without exposing sensitive implementation detail.",
        cta: "Read Engineering Notes",
        href: "/engineering/",
      },
      fa: {
        eyebrow: "دانش مهندسی",
        title: "تصمیم مهندسی باید قابل توضیح باشد.",
        body: "این پرتال انتخاب‌های معماری، ملاحظات و اصول عملیاتی قابل انتشار را مستند می‌کند؛ بدون افشای جزئیات حساس پیاده‌سازی.",
        cta: "مطالعه یادداشت‌های مهندسی",
        href: "/engineering/",
      },
    },
  },
] as const;

function splitColumns(
  id: string,
  items: readonly (readonly [string, string, string, string, string])[],
  fa: boolean,
) {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)]
    .filter((column) => column.length > 0)
    .map((column, columnIndex) => ({
      id: id + "-column-" + columnIndex,
      items: column.map(([slug, en, faLabel, descEn, descFa]) => ({
        id: slug,
        href: slug.startsWith("https://") ? slug : "/" + slug.replace(/^\/+|\/+$/g, "") + "/",
        label: fa ? faLabel : en,
        description: fa ? descFa : descEn,
        ...(slug.startsWith("https://") ? { target: "_blank" as const, rel: "noreferrer" } : {}),
      })),
    }));
}

export default function SiteHeader({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const pathname = usePathname();
  const { setLocale } = useLocale();

  const navigation = useMemo<SfNavigationGroup[]>(
    () =>
      groups.map((group) => ({
        id: group.id,
        label: fa ? group.fa : group.en,
        columns: splitColumns(group.id, group.items, fa),
        feature: {
          eyebrow: fa ? group.feature.fa.eyebrow : group.feature.en.eyebrow,
          title: fa ? group.feature.fa.title : group.feature.en.title,
          body: fa ? group.feature.fa.body : group.feature.en.body,
          ctaLabel: fa ? group.feature.fa.cta : group.feature.en.cta,
          href: fa ? group.feature.fa.href : group.feature.en.href,
        },
      })),
    [fa],
  );

  const brand = (
    <span className="brandText brandWordmark">
      <strong>Silver Fox</strong>
      <small>Engineering</small>
    </span>
  );

  const localeControl = (
    <button
      className="langSwitch"
      type="button"
      lang={fa ? "en" : "fa"}
      onClick={() => setLocale(fa ? "en" : "fa")}
      aria-label={fa ? "Switch to English" : "تغییر زبان به فارسی"}
    >
      {fa ? "English" : "فارسی"}
    </button>
  );

  return (
    <SfSiteHeader
      profile="engineering"
      brand={brand}
      brandHref="/"
      groups={navigation}
      labels={{
        primaryNavigation: fa ? "ناوبری اصلی" : "Primary navigation",
        mobileNavigation: fa ? "فهرست موبایل" : "Mobile navigation",
        openMenu: fa ? "باز کردن فهرست" : "Open menu",
        closeMenu: fa ? "بستن فهرست" : "Close menu",
        closeNavigation: fa ? "بستن فهرست" : "Close navigation",
      }}
      navigationKey={pathname + ":" + locale}
      LinkComponent={WebUiLinkAdapter}
      localeControl={localeControl}
      hoverIntent={false}
      showBackdrop
      defaultMobileGroupId="engineering"
    />
  );
}
