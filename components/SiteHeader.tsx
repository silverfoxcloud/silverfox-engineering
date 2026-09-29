"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/data/content";

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

export default function SiteHeader({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeGroup = useMemo(
    () => groups.find((group) => group.id === openGroup) ?? null,
    [openGroup],
  );

  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const hrefFor = (slug: string) => {
    if (slug.startsWith("https://")) return slug;
    const clean = "/" + slug.replace(/^\/+|\/+$/g, "") + "/";
    return fa ? "/fa" + clean : clean;
  };

  const languageHref = fa
    ? (pathname.replace(/^\/fa(?=\/|$)/, "") || "/")
    : (pathname === "/" ? "/fa/" : "/fa" + pathname);

  const closeAll = () => {
    setOpenGroup(null);
    setMobileOpen(false);
  };

  return (
    <header className="siteHeader">
      <div className="shell navWrap">
        <Link href="/" className="brand" aria-label="Silver Fox Engineering" onClick={closeAll}>
          <span className="brandLogoWrap">
            <img src="/silver-fox-logo.svg" alt="" className="brandLogo" />
          </span>
          <span className="brandText">
            <strong>Silver Fox</strong>
            <small>Engineering</small>
          </span>
        </Link>

        <nav className="megaNav" aria-label={fa ? "ناوبری اصلی" : "Primary navigation"}>
          {groups.map((group) => {
            const expanded = openGroup === group.id;
            return (
              <button
                className="megaNavButton"
                type="button"
                key={group.id}
                aria-expanded={expanded}
                aria-controls={"mega-" + group.id}
                onClick={() => setOpenGroup(expanded ? null : group.id)}
              >
                {fa ? group.fa : group.en}
                <span aria-hidden="true">{expanded ? "−" : "+"}</span>
              </button>
            );
          })}
        </nav>

        <Link
          className="langSwitch"
          lang={fa ? "en" : "fa"}
          href={languageHref}
          onClick={closeAll}
          aria-label={fa ? "Switch to English" : "تغییر زبان به فارسی"}
        >
          {fa ? "English" : "فارسی"}
        </Link>

        <button
          type="button"
          className="mobileMenuTrigger"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobileOpen((value) => !value);
            setOpenGroup(null);
          }}
        >
          <span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
          <span className="srOnly">{fa ? "فهرست" : "Menu"}</span>
        </button>
      </div>

      {activeGroup && (
        <>
          <button
            type="button"
            className="menuBackdrop"
            aria-label={fa ? "بستن فهرست" : "Close navigation"}
            onClick={() => setOpenGroup(null)}
          />
          <div className="megaSurface" id={"mega-" + activeGroup.id}>
            <div className="shell megaPanelInner">
              <div className="megaItems">
                {activeGroup.items.map(([slug, en, label, descEn, descFa]) => (
                  <Link
                    key={slug}
                    href={hrefFor(slug)}
                    className="megaLink"
                    onClick={closeAll}
                  >
                    <span className="megaLinkCopy">
                      <strong>{fa ? label : en}</strong>
                      <small>{fa ? descFa : descEn}</small>
                    </span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>

              <aside className="megaFeature">
                <span>{fa ? activeGroup.feature.fa.eyebrow : activeGroup.feature.en.eyebrow}</span>
                <strong>{fa ? activeGroup.feature.fa.title : activeGroup.feature.en.title}</strong>
                <p>{fa ? activeGroup.feature.fa.body : activeGroup.feature.en.body}</p>
                <Link
                  href={hrefFor(fa ? activeGroup.feature.fa.href : activeGroup.feature.en.href)}
                  onClick={closeAll}
                >
                  {fa ? activeGroup.feature.fa.cta : activeGroup.feature.en.cta}
                  <span aria-hidden="true"> ↗</span>
                </Link>
              </aside>
            </div>
          </div>
        </>
      )}

      {mobileOpen && (
        <>
          <button
            type="button"
            className="menuBackdrop mobileBackdrop"
            aria-label={fa ? "بستن فهرست" : "Close navigation"}
            onClick={() => setMobileOpen(false)}
          />
          <nav
            id="mobile-navigation"
            className="mobileNavSurface"
            aria-label={fa ? "فهرست موبایل" : "Mobile navigation"}
          >
            <div className="shell mobileNavInner">
              {groups.map((group) => (
                <section key={group.id}>
                  <strong>{fa ? group.fa : group.en}</strong>
                  <div>
                    {group.items.map(([slug, en, label]) => (
                      <Link key={slug} href={hrefFor(slug)} onClick={closeAll}>
                        {fa ? label : en}
                        <span aria-hidden="true">↗</span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
