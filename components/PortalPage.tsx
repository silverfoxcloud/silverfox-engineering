"use client";

import Link from "next/link";
import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { copy, type Locale } from "@/data/content";
import ArchitectureMap from "@/components/ArchitectureMap";
import { engineeringPages, platformPages } from "@/data/engineering-pages";
import { useLocalizedMetadata } from "@/components/LocaleProvider";

const featuredPlatforms = ["sfas", "license-platform", "fox-pay"] as const;

export default function PortalPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const fa = locale === "fa";
  const localize = (href: string) => fa ? (href === "/" ? "/fa/" : "/fa" + href) : href;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("motionReady");
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      root.classList.remove("motionReady");
    };
  }, []);

  useLocalizedMetadata(
    fa ? "مهندسی پردازش ابری روباه نقره‌ای" : "Silver Fox Engineering",
    fa
      ? "پرتال عمومی مهندسی شرکت پردازش ابری روباه نقره‌ای؛ معماری، پلتفرم ابری، امنیت، داده، قابلیت اتکا و تصمیم‌های فناوری."
      : "Public engineering portal for Silver Fox architecture, cloud platform, security, data, reliability and technology decisions.",
  );

  const capabilities = [
    {
      href: "/platform/",
      visual: "/visual-platform.svg",
      eyebrow: fa ? "پلتفرم ابری" : "CLOUD PLATFORM",
      title: fa ? "قابلیت مشترک، بدون از بین بردن استقلال محصول" : "Shared capabilities without erasing product ownership",
      body: engineeringPages.platform[locale].summary,
    },
    {
      href: "/security/",
      visual: "/visual-security.svg",
      eyebrow: fa ? "امنیت و حاکمیت" : "SECURITY & GOVERNANCE",
      title: engineeringPages.security[locale].title,
      body: engineeringPages.security[locale].summary,
    },
    {
      href: "/devops-sre/",
      visual: "/visual-devops.svg",
      eyebrow: fa ? "مشاهده‌پذیری و قابلیت اتکا" : "OBSERVABILITY & RELIABILITY",
      title: engineeringPages["devops-sre"][locale].title,
      body: engineeringPages["devops-sre"][locale].summary,
    },
    {
      href: "/data/",
      visual: "/visual-data.svg",
      eyebrow: fa ? "داده و یکپارچگی" : "DATA & INTEGRATION",
      title: engineeringPages.data[locale].title,
      body: engineeringPages.data[locale].summary,
    },
    {
      href: "/ai/",
      visual: "/visual-ai.svg",
      eyebrow: fa ? "هوش مصنوعی" : "AI ENGINEERING",
      title: engineeringPages.ai[locale].title,
      body: engineeringPages.ai[locale].summary,
    },
    {
      href: "/platforms/sfas/",
      visual: "/visual-experience.svg",
      eyebrow: fa ? "تجربه چندزبانه" : "MULTILINGUAL EXPERIENCE",
      title: fa ? "RTL و LTR از ابتدا جزئی از محصول‌اند" : "RTL and LTR are product modes, not translation afterthoughts",
      body: fa
        ? "سیستم طراحی، بومی‌سازی، دسترس‌پذیری و رفتار رابط در هر دو جهت به‌صورت هم‌ارز مهندسی و آزمون می‌شوند."
        : "Design primitives, localization, accessibility and interface behavior are engineered and tested as equal experiences in both directions.",
    },
  ];

  return (
    <main lang={fa ? "fa" : "en"} dir={fa ? "rtl" : "ltr"} className={fa ? "rtl" : "ltr"}>
      <SiteHeader locale={locale} />

      <section className="hero">
        <div className="heroGridFx" aria-hidden="true" />
        <div className="heroOrb heroOrbOne" aria-hidden="true" />
        <div className="heroOrb heroOrbTwo" aria-hidden="true" />
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">{c.eyebrow}</div>
            <h1>{c.heroTitle}</h1>
            <p>{c.heroBody}</p>
            <p className="heroSupporting">
              {fa
                ? "هدف ما فقط ساخت نرم‌افزار نیست؛ سامانه‌ها باید امن، قابل اتکا، چندزبانه و آماده تکامل باشند."
                : "The goal is not simply to ship software. Systems should remain secure, reliable, multilingual and ready to evolve."}
            </p>
            <div className="heroActions">
              <Link className="button primary" href={localize("/architecture/")}>
                {fa ? "مشاهده معماری" : "Explore architecture"}
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button secondary" href={localize("/technology-radar/")}>
                {fa ? "رادار فناوری" : "Technology Radar"}
              </Link>
            </div>
          </div>

          <ArchitectureMap locale={locale} />
        </div>
      </section>

      <section className="homeIntro">
        <div className="shell homeIntroGrid">
          <div>
            <span className="kicker">{fa ? "مدل مهندسی" : "ENGINEERING MODEL"}</span>
            <h2>
              {fa
                ? "یک اکوسیستم؛ محصولات مستقل؛ قواعد مشترک مهندسی."
                : "One ecosystem. Independent products. Shared engineering rules."}
            </h2>
          </div>
          <p>
            {fa
              ? "قابلیت‌هایی مثل هویت، لایسنس، پرداخت، مدیریت و مشاهده‌پذیری فقط جایی مشترک می‌شوند که تکرار را کم کنند. منطق دامنه، داده و مسیر انتشار هر محصول در مالکیت همان محصول باقی می‌ماند."
              : "Identity, licensing, payments, administration and observability are shared where reuse removes duplicated work. Domain logic, authoritative data and release decisions remain owned by each product."}
          </p>
        </div>
      </section>

      <section className="homeCapabilitySection">
        <div className="shell">
          <div className="homeSectionHeading split">
            <div>
              <span className="kicker">{fa ? "قابلیت‌های اصلی" : "CORE CAPABILITIES"}</span>
              <h2>
                {fa
                  ? "از معماری تا عملیات؛ یک نگاه یکپارچه به فناوری"
                  : "From architecture to operations, one coherent engineering model"}
              </h2>
            </div>
            <p>
              {fa
                ? "هر حوزه برای حل یک مسئله مشخص وجود دارد؛ از زیرساخت ابری و امنیت تا داده، قابلیت اتکا، هوش مصنوعی و تجربه چندزبانه."
                : "Each capability exists to solve a concrete engineering problem, from cloud foundations and security to data, reliability, AI and multilingual product experience."}
            </p>
          </div>

          <div className="capabilityRows">
            {capabilities.map((item, index) => (
              <Link
                href={localize(item.href)}
                className={"capabilityRow " + (index % 2 ? "capabilityRowReverse" : "")}
                data-reveal
                key={item.href + item.eyebrow}
              >
                <div className="capabilityCopy">
                  <span className="featureIndex">
                    {fa
                      ? String(index + 1).replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]).padStart(2, "۰")
                      : String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="kicker">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <strong>
                    {fa ? "مشاهده جزئیات مهندسی" : "Explore engineering context"} <span aria-hidden="true">↗</span>
                  </strong>
                </div>
                <div className="capabilityVisual" aria-hidden="true">
                  <img src={item.visual} alt="" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="homePlatformSection">
        <div className="shell">
          <div className="homeSectionHeading split">
            <div>
              <span className="kicker">{fa ? "پایه‌های مشترک محصول" : "SHARED PRODUCT FOUNDATIONS"}</span>
              <h2>
                {fa
                  ? "زیرساخت مشترک باید پیچیدگی را از مسیر ساخت محصول کنار بزند."
                  : "Shared infrastructure should remove complexity from product delivery."}
              </h2>
            </div>
            <p>
              {fa
                ? "SFAS، License Platform و Fox Pay سه مسئله متفاوت را در سطح پلتفرم حل می‌کنند: تجربه مدیریت، کنترل دسترسی تجاری و ارکستریشن پرداخت."
                : "SFAS, License Platform and Fox Pay solve three different platform concerns: administration experience, commercial access control and payment orchestration."}
            </p>
          </div>

          <div className="productStories">
            {featuredPlatforms.map((slug, index) => {
              const page = platformPages[slug][locale];
              return (
                <article className="productStory" key={slug} data-reveal>
                  <div className="productStoryCopy">
                    <span className="kicker">{page.eyebrow}</span>
                    <h3>{page.name}</h3>
                    <p>{page.lead}</p>
                    <small className="productStatusInline">{page.status}</small>
                    <Link href={localize("/platforms/" + slug + "/")}>
                      {fa ? "مشاهده مدل فنی" : "Explore technical model"}
                      <span aria-hidden="true"> ↗</span>
                    </Link>
                  </div>
                  <div className={"productSignal productSignal-" + slug} aria-hidden="true">
                    <div className="productSignalLine" />
                    <div className="productSignalNodes">
                      {page.capabilities.slice(0, 3).map((capability, capabilityIndex) => (
                        <span key={capability}>
                          <b>
                            {fa
                              ? String(capabilityIndex + 1).replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]).padStart(2, "۰")
                              : String(capabilityIndex + 1).padStart(2, "0")}
                          </b>
                          {capability}
                        </span>
                      ))}
                    </div>
                    <small>{fa ? "۰" + String(index + 1).replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]) : String(index + 1).padStart(2, "0")} / {fa ? "۰۳" : "03"}</small>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="productDomainLinks">
            <Link href={localize("/platforms/exotravel/")}>
              <span>{fa ? "محصول سفر" : "TRAVEL PRODUCT"}</span>
              <strong>ExoTravel</strong>
              <i aria-hidden="true">↗</i>
            </Link>
            <Link href={localize("/platforms/exohub/")}>
              <span>{fa ? "یکپارچگی اکوسیستم" : "ECOSYSTEM INTEGRATION"}</span>
              <strong>ExoHub</strong>
              <i aria-hidden="true">↗</i>
            </Link>
          </div>
        </div>
      </section>

      <section className="homeRadarTeaser">
        <div className="shell radarTeaserGrid" data-reveal>
          <div>
            <span className="kicker">{fa ? "رادار فناوری" : "TECHNOLOGY RADAR"}</span>
            <h2>
              {fa
                ? "فناوری باید جایگاهش را با نیاز واقعی سیستم به دست بیاورد."
                : "Technology earns its place by solving a real system constraint."}
            </h2>
            <p>
              {fa
                ? "رادار فناوری نشان می‌دهد چه ابزارهایی تثبیت شده‌اند، کجا استفاده هدفمند داریم و چه گزینه‌هایی هنوز در مرحله آزمایش یا ارزیابی‌اند."
                : "The Technology Radar separates established choices from context-dependent use, trials and technologies that are still being assessed."}
            </p>
            <Link href={localize("/technology-radar/")}>
              {fa ? "باز کردن رادار فناوری" : "Open Technology Radar"} <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="radarTeaserVisual" aria-hidden="true">
            <img src="/visual-radar.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="homeClosing">
        <div className="shell homeClosingCard">
          <img src="/silver-fox-logo.svg" alt="" />
          <div>
            <span className="kicker">{fa ? "پردازش ابری روباه نقره‌ای" : "SILVER FOX"}</span>
            <h2>
              {fa
                ? "پیچیدگی باید پشت مرز و قرارداد روشن مهار شود."
                : "Complexity belongs behind explicit boundaries and contracts."}
            </h2>
            <p>
              {fa
                ? "پلتفرم زمانی ارزش دارد که تغییر، تحویل و عملیات محصول را قابل پیش‌بینی‌تر کند؛ نه اینکه فقط اجزای بیشتری به معماری اضافه کند."
                : "Platform work is valuable when it makes product change, delivery and operations more predictable—not when it simply adds more components."}
            </p>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
