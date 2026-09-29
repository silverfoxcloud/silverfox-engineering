"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { copy } from "@/data/content";
import ArchitectureMap from "@/components/ArchitectureMap";
import TechnologyRadar from "@/components/TechnologyRadar";
import { engineeringPages, platformPages } from "@/data/engineering-pages";
import { useLocale, useLocalizedMetadata } from "@/components/LocaleProvider";

const featuredEngineering = ["architecture", "platform", "security", "devops-sre"] as const;
const featuredPlatforms = ["sfas", "license-platform", "fox-pay", "exotravel", "exohub"] as const;

export default function PortalPage() {
  const { locale } = useLocale();
  const c = copy[locale];
  const fa = locale === "fa";

  useLocalizedMetadata(
    fa ? "مهندسی Silver Fox" : "Silver Fox Engineering",
    fa
      ? "پرتال عمومی مهندسی Silver Fox؛ معماری، پلتفرم‌ها، امنیت، داده، عملیات و تصمیم‌های فناوری."
      : "Public engineering portal for Silver Fox architecture, platforms, security, data, operations and technology decisions.",
  );

  return (
    <main dir={fa ? "rtl" : "ltr"} className={fa ? "rtl" : "ltr"}>
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
            <div className="heroActions">
              <Link className="button primary" href="/architecture/">
                {fa ? "معماری Silver Fox" : "Explore architecture"}
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button secondary" href="/technology-radar/">
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
            <span className="kicker">{fa ? "تز مهندسی" : "ENGINEERING THESIS"}</span>
            <h2>
              {fa
                ? "زیرساخت مشترک؛ مالکیت روشن در هر محصول."
                : "Shared foundations. Product-owned boundaries."}
            </h2>
          </div>
          <p>
            {fa
              ? "هویت، چندمستاجری، لایسنس، پرداخت، مدیریت و مشاهده‌پذیری در جایی مشترک می‌شوند که تکرار را کم کنند. منطق دامنه، داده و مسیر انتشار هر محصول مستقل می‌ماند تا استفاده مجدد به وابستگی سازمانی و فنی تبدیل نشود."
              : "Identity, tenancy, licensing, payments, administration and observability are shared where reuse removes duplicated work. Domain logic, product data and release paths stay independently owned so reuse does not become delivery coupling."}
          </p>
        </div>
      </section>

      <section className="homeFeatureSection">
        <div className="shell">
          <div className="homeSectionHeading">
            <span className="kicker">{fa ? "حوزه‌های مهندسی" : "ENGINEERING DOMAINS"}</span>
            <h2>
              {fa
                ? "هر حوزه، مسئولیت مهندسی مشخصی دارد."
                : "Each domain has an explicit engineering responsibility."}
            </h2>
          </div>

          <div className="homeFeatureGrid">
            {featuredEngineering.map((slug, index) => {
              const page = engineeringPages[slug][locale];
              return (
                <Link className="homeFeatureCard" href={"/" + slug + "/"} key={slug}>
                  <span className="featureIndex">
                    {fa ? "۰۱۲۳۴۵۶۷۸۹"[index + 1] : index + 1}
                  </span>
                  <span className="kicker">{page.eyebrow}</span>
                  <h3>{page.title}</h3>
                  <p>{page.summary}</p>
                  <i aria-hidden="true">↗</i>
                </Link>
              );
            })}
          </div>

          <div className="homeMoreLinks">
            <Link href="/cloud/">{fa ? "زیرساخت ابری" : "Cloud & Infrastructure"} ↗</Link>
            <Link href="/ai/">{fa ? "مهندسی هوش مصنوعی" : "AI Engineering"} ↗</Link>
            <Link href="/data/">{fa ? "مهندسی داده" : "Data Engineering"} ↗</Link>
            <Link href="/technology-radar/">{fa ? "رادار فناوری" : "Technology Radar"} ↗</Link>
          </div>
        </div>
      </section>

      <section className="homePlatformSection">
        <div className="shell">
          <div className="homeSectionHeading split">
            <div>
              <span className="kicker">{fa ? "پلتفرم‌ها و محصولات" : "PLATFORMS & PRODUCTS"}</span>
              <h2>
                {fa
                  ? "قرارداد مشترک؛ چرخه توسعه مستقل."
                  : "Shared platform contracts. Independent product lifecycles."}
              </h2>
            </div>
            <p>
              {fa
                ? "SFAS، License Platform و Fox Pay قابلیت‌های پلتفرمی می‌سازند. ExoTravel و ExoHub این قابلیت‌ها را بدون واگذاری مالکیت دامنه و داده خود مصرف می‌کنند."
                : "SFAS, License Platform and Fox Pay provide platform capabilities. ExoTravel and ExoHub consume them without surrendering ownership of their domain logic, data or release decisions."}
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
                    <Link href={"/platforms/" + slug + "/"}>
                      {fa ? "مشاهده مدل فنی" : "Explore technical model"}
                      <span aria-hidden="true"> ↗</span>
                    </Link>
                  </div>
                  <div className={"productSignal productSignal-" + slug} aria-hidden="true">
                    <div className="productSignalLine" />
                    <div className="productSignalNodes">
                      {page.capabilities.slice(0, 3).map((capability, capabilityIndex) => (
                        <span key={capability}>
                          <b>{String(capabilityIndex + 1).padStart(2, "0")}</b>
                          {capability}
                        </span>
                      ))}
                    </div>
                    <small>{String(index + 1).padStart(2, "0")} / 05</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="homeRadar">
        <div className="shell homeSectionHeading split">
          <div>
            <span className="kicker">{fa ? "تصمیم‌های فناوری" : "TECHNOLOGY DECISIONS"}</span>
            <h2>{fa ? "فناوری بر اساس نقش و محدودیت سیستم انتخاب می‌شود." : "Technology choices follow system constraints."}</h2>
          </div>
          <p>
            {fa
              ? "Radar وضعیت استفاده، آزمایش و ارزیابی فناوری‌ها را شفاف می‌کند؛ بدون تبدیل فهرست ابزارها به ادعای بازاریابی."
              : "The Radar makes adoption, trials and assessments visible without turning a tool list into marketing claims."}
          </p>
        </div>
        <TechnologyRadar locale={locale} />
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
                ? "هدف پلتفرم، معماری یا خودکارسازی این نیست که اجزای بیشتری بسازیم؛ هدف این است که تغییر، تحویل و عملیات محصول قابل پیش‌بینی‌تر و قابل توضیح‌تر شود."
                : "The point of platform work, architecture and automation is not to create more components. It is to make product change, delivery and operations more predictable and explainable."}
            </p>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
