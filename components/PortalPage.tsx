"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { copy, type Locale } from "@/data/content";
import ArchitectureMap from "@/components/ArchitectureMap";
import { engineeringPages, platformPages } from "@/data/engineering-pages";
import { packages } from "@/data/packages";
import { buildStories, engineeringNotes, changelog } from "@/data/publications";

const featuredPlatforms = ["sfas", "license-platform", "fox-pay"] as const;

export default function PortalPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const fa = locale === "fa";
  const localize = (href: string) => fa ? (href === "/" ? "/fa/" : "/fa" + href) : href;

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
                <article className="productStory" key={slug}>
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

      <section className="homePackageEditorial">
        <div className="shell">
          <div className="homeLightHeading">
            <div>
              <span className="kicker">{fa ? "پکیج‌های مهندسی" : "ENGINEERING PACKAGES"}</span>
              <h2>
                {fa
                  ? "زیرساخت مشترک وقتی ارزشمند است که واقعاً قابل مصرف و نسخه‌بندی باشد."
                  : "Shared infrastructure matters when it is actually versioned and consumable."}
              </h2>
            </div>
            <div>
              <p>
                {fa
                  ? "هفت پکیج SFAS اکنون با نسخه 0.2.0-alpha.12 روی کانال next در GitHub Packages خصوصی منتشر شده‌اند. این بخش وضعیت prerelease را صریح نگه می‌دارد."
                  : "Seven SFAS packages are published as 0.2.0-alpha.12 on the next channel in private GitHub Packages. The portal keeps their prerelease state explicit."}
              </p>
              <Link href={localize("/packages/")}>
                {fa ? "مرور همه پکیج‌ها" : "Browse all packages"} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="homePackageRows">
            {packages.slice(0, 4).map((pkg, index) => (
              <Link href={localize("/packages/" + pkg.slug + "/")} key={pkg.slug}>
                <span>{fa ? String(index + 1).replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]).padStart(2, "۰") : String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{pkg.displayName}</strong>
                  <code>{pkg.name}</code>
                </div>
                <small>{pkg.version}</small>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="homeEvidenceSection">
        <div className="shell">
          <div className="homeSectionHeading split">
            <div>
              <span className="kicker">{fa ? "روایت‌های ساخت" : "BUILD STORIES"}</span>
              <h2>{fa ? "بلوغ مهندسی با شواهد ساخته می‌شود، نه با ادعا." : "Engineering maturity is built with evidence, not claims."}</h2>
            </div>
            <p>
              {fa
                ? "این روایت‌ها از report، تست و milestone واقعی می‌آیند و محدودیت‌های همان مرحله را هم پنهان نمی‌کنند."
                : "These stories come from real reports, tests and milestones, and keep the limitations of each phase visible."}
            </p>
          </div>

          <div className="homeStoryRows">
            {buildStories.map((story, index) => (
              <Link href={localize("/build-stories/" + story.slug + "/")} key={story.slug}>
                <span>{fa ? String(index + 1).replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]).padStart(2, "۰") : String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>{story.platform}</small>
                  <h3>{story.title[locale]}</h3>
                  <p>{story.summary[locale]}</p>
                </div>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>

          <div className="homeShippedHeading">
            <div>
              <span className="kicker">{fa ? "آخرین تغییرات" : "RECENTLY SHIPPED"}</span>
              <h2>{fa ? "تغییرات واقعی، با تاریخ و زمینه مشخص." : "Real changes with a date and an engineering context."}</h2>
            </div>
            <Link href={localize("/changelog/")}>{fa ? "مشاهده Changelog" : "View changelog"} <span aria-hidden="true">↗</span></Link>
          </div>

          <div className="homeChangelogRows">
            {changelog.slice(0, 3).map((entry) => (
              <Link href={localize(entry.href)} key={entry.date + entry.title.en}>
                <time dateTime={entry.date}>{fa ? entry.date.replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]).replaceAll("-", "/") : entry.date}</time>
                <span>{entry.type}</span>
                <strong>{entry.title[locale]}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="homeKnowledgeSection">
        <div className="shell">
          <div className="homeLightHeading">
            <div>
              <span className="kicker">{fa ? "یادداشت‌های مهندسی" : "ENGINEERING NOTES"}</span>
              <h2>{fa ? "دانش فنی باید قابل خواندن، نقدکردن و دنبال‌کردن باشد." : "Engineering knowledge should be readable, reviewable and traceable."}</h2>
            </div>
            <div>
              <p>
                {fa
                  ? "یادداشت‌های عمومی از ADRها و implementation واقعی استخراج می‌شوند؛ نه از متن بازاریابی عمومی و نه از تاریخ‌سازی."
                  : "Public notes are grounded in real ADRs and implementation evidence—not generic marketing language or manufactured history."}
              </p>
              <Link href={localize("/engineering/")}>{fa ? "مطالعه همه یادداشت‌ها" : "Read all Engineering Notes"} <span aria-hidden="true">↗</span></Link>
            </div>
          </div>

          <div className="homeKnowledgeRows">
            {engineeringNotes.map((note, index) => (
              <Link href={localize("/engineering/" + note.slug + "/")} key={note.slug}>
                <span>{fa ? String(index + 1).replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]).padStart(2, "۰") : String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>{note.category} · {note.platform}</small>
                  <h3>{note.title[locale]}</h3>
                  <p>{note.summary[locale]}</p>
                </div>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="homeRadarTeaser">
        <div className="shell radarTeaserGrid">
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
