"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  platformPages,
  platformSlugs,
  type PlatformSlug,
} from "@/data/engineering-pages";
import { useLocale, useLocalizedMetadata } from "@/components/LocaleProvider";

function PlatformHeroVisual({ slug }: { slug: PlatformSlug }) {
  if (slug === "sfas") {
    return (
      <div className="platformSystemVisual sfasVisual" aria-hidden="true">
        <div className="visualTopbar"><span /><span /><span /></div>
        <div className="sfasCanvas">
          <div className="sfasRail"><i /><i /><i /><i /></div>
          <div className="sfasWork">
            <strong>SFAS</strong>
            <span className="sfasMetric" />
            <span className="sfasMetric short" />
            <div className="sfasTiles"><i /><i /><i /></div>
          </div>
        </div>
        <div className="visualFooterTag">RTL ↔ LTR · accessible primitives</div>
      </div>
    );
  }

  if (slug === "license-platform") {
    return (
      <div className="platformSystemVisual licenseVisual" aria-hidden="true">
        <div className="licenseGraph">
          <span className="systemNode nodeOrg">Organization</span>
          <span className="systemNode nodeProduct">Product</span>
          <span className="systemNode nodeEntitlement">Entitlement</span>
          <span className="systemNode nodeLicense">License</span>
          <span className="systemNode nodeUsage">Usage</span>
          <i className="systemLink linkOne" />
          <i className="systemLink linkTwo" />
          <i className="systemLink linkThree" />
          <i className="systemLink linkFour" />
        </div>
        <div className="visualFooterTag">policy · enforcement · audit</div>
      </div>
    );
  }

  if (slug === "fox-pay") {
    return (
      <div className="platformSystemVisual payVisual" aria-hidden="true">
        <div className="payFlow">
          <span className="systemNode payProduct">Product</span>
          <span className="payRouter">ROUTER</span>
          <div className="payProviders">
            <span>Gateway A</span><span>Gateway B</span><span>Gateway C</span>
          </div>
          <i className="payPulse pulseOne" />
          <i className="payPulse pulseTwo" />
        </div>
        <div className="payChecks"><span>verify</span><span>reconcile</span><span>webhook</span></div>
      </div>
    );
  }

  if (slug === "exotravel") {
    return (
      <div className="platformSystemVisual travelVisual" aria-hidden="true">
        <div className="travelRoute">
          <span className="travelStop active">Discover</span>
          <i />
          <span className="travelStop">Book</span>
          <i />
          <span className="travelStop">Pay</span>
          <i />
          <span className="travelStop">Travel</span>
        </div>
        <div className="travelLedger"><span /><span /><span /></div>
        <div className="visualFooterTag">product-owned travel commerce</div>
      </div>
    );
  }

  return (
    <div className="platformSystemVisual hubVisual" aria-hidden="true">
      <div className="hubCore">ExoHub</div>
      <span className="hubNode hubNorth">Identity</span>
      <span className="hubNode hubEast">Commerce</span>
      <span className="hubNode hubSouth">Integration</span>
      <span className="hubNode hubWest">Tenancy</span>
      <i className="hubLink hubLinkNorth" />
      <i className="hubLink hubLinkEast" />
      <i className="hubLink hubLinkSouth" />
      <i className="hubLink hubLinkWest" />
    </div>
  );
}

export default function PlatformDetailPage({ slug }: { slug: PlatformSlug }) {
  const { locale } = useLocale();
  const page = platformPages[slug][locale];
  const fa = locale === "fa";

  useLocalizedMetadata(
    page.name + (fa ? " | مهندسی پردازش ابری روباه نقره‌ای" : " | Silver Fox Engineering"),
    page.lead,
  );

  return (
    <main dir={fa ? "rtl" : "ltr"} className={fa ? "rtl detailPage" : "ltr detailPage"}>
      <SiteHeader locale={locale} />

      <section className="platformHero">
        <div className="shell">
          <span className="kicker">{page.eyebrow}</span>
          <div className="platformHeroGrid">
            <div>
              <div className="platformName">{page.name}</div>
              <h1>{page.title}</h1>
              <p>{page.lead}</p>
              <div className="platformStatus">
                <span>{fa ? "وضعیت فعلی" : "CURRENT STATE"}</span>
                <p>{page.status}</p>
              </div>
            </div>
            <PlatformHeroVisual slug={slug} />
          </div>
        </div>
      </section>

      <section className="platformBody">
        <div className="shell platformColumns">
          <div>
            <span className="kicker">{fa ? "قابلیت‌ها" : "CAPABILITIES"}</span>
            <div className="capabilityList">
              {page.capabilities.map((item, index) => (
                <div key={item}>
                  <span>
                    {fa
                      ? String(index + 1).replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]).padStart(2, "۰")
                      : String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="kicker">{fa ? "رویکرد مهندسی" : "ENGINEERING APPROACH"}</span>
            <div className="engineeringList">
              {page.engineering.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="platformDeepDive">
        <div className="shell">
          <div className="platformDeepHeading">
            <span className="kicker">{fa ? "مدل فنی" : "TECHNICAL MODEL"}</span>
            <h2>
              {fa
                ? "آنچه این محصول باید روشن و قابل دفاع نگه دارد"
                : "The boundaries this product has to keep explicit"}
            </h2>
          </div>

          <div className="platformDeepSections">
            {page.sections.map((section, index) => (
              <article className="platformDeepSection" key={section.title}>
                <span className="platformDeepIndex">
                  {fa
                    ? String(index + 1).replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]).padStart(2, "۰")
                    : String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{section.title}</h3>
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
        </div>
      </section>

      <section className="relatedPages">
        <div className="shell">
          <div className="relatedHeading">
            <h2>{fa ? "پلتفرم‌ها و محصولات دیگر" : "Other platforms and products"}</h2>
          </div>
          <div className="relatedGrid">
            {platformSlugs
              .filter((item) => item !== slug)
              .slice(0, 4)
              .map((item) => (
                <Link className="relatedCard" href={"/platforms/" + item + "/"} key={item}>
                  <span>{platformPages[item][locale].eyebrow}</span>
                  <strong>{platformPages[item][locale].name}</strong>
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
