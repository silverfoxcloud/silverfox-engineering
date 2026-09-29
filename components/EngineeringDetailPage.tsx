"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  engineeringPages,
  engineeringSlugs,
  type EngineeringSlug,
} from "@/data/engineering-pages";
import ArchitectureMap from "@/components/ArchitectureMap";
import TechnologyRadar from "@/components/TechnologyRadar";
import type { Locale } from "@/data/content";

export default function EngineeringDetailPage({ slug, locale }: { slug: EngineeringSlug; locale: Locale }) {
  const page = engineeringPages[slug][locale];
  const fa = locale === "fa";
  const localize = (href: string) => fa ? "/fa" + href : href;

  return (
    <main lang={fa ? "fa" : "en"} dir={fa ? "rtl" : "ltr"} className={fa ? "rtl detailPage" : "ltr detailPage"}>
      <SiteHeader locale={locale} />

      <section className="detailHero">
        <div className="detailGridFx" aria-hidden="true" />
        <div className="shell detailHeroGrid">
          <div className="detailHeroCopy">
            <span className="kicker">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p className="detailLead">{page.lead}</p>
            <p className="detailSummary">{page.summary}</p>
          </div>
          <div className="detailVisual">
            <img src={page.visual} alt="" />
          </div>
        </div>
      </section>

      {slug === "architecture" && (
        <section className="mapSection shell">
          <span className="kicker">{fa ? "نمای سیستم" : "SYSTEM VIEW"}</span>
          <h2>{fa ? "مرزهای اکوسیستم" : "Ecosystem boundaries"}</h2>
          <ArchitectureMap locale={locale} />
        </section>
      )}

      {slug === "technology-radar" && <TechnologyRadar locale={locale} />}

      <section className="detailSections">
        <div className="shell">
          {page.sections.map((section, index) => (
            <article className="detailSection" key={section.title}>
              <div className="detailNumber">
                {fa
                  ? String(index + 1)
                      .replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)])
                      .padStart(2, "۰")
                  : String(index + 1).padStart(2, "0")}
              </div>
              <div className="detailSectionCopy">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.bullets && (
                  <div className="detailBullets">
                    {section.bullets.map((item) => <span key={item}>{item}</span>)}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="detailClosing">
        <div className="shell detailClosingCard">
          <span className="kicker">{fa ? "اصل مهندسی" : "ENGINEERING PRINCIPLE"}</span>
          <h2>{page.closingTitle}</h2>
          <p>{page.closingBody}</p>
        </div>
      </section>

      <section className="relatedPages">
        <div className="shell">
          <div className="relatedHeading">
            <h2>{fa ? "موضوعات مرتبط" : "Related engineering areas"}</h2>
          </div>
          <div className="relatedGrid">
            {engineeringSlugs
              .filter((item) => item !== slug)
              .slice(0, 4)
              .map((item) => (
                <Link className="relatedCard" href={localize("/" + item + "/")} key={item}>
                  <span>{engineeringPages[item][locale].eyebrow}</span>
                  <strong>{engineeringPages[item][locale].title}</strong>
                  <i aria-hidden="true">↗</i>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
