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
    page.name + (fa ? " | مهندسی Silver Fox" : " | Silver Fox Engineering"),
    page.lead,
  );

  const boundaryTitle =
    slug === "sfas"
      ? fa
        ? "تجربه مشترک، منطق دامنه مستقل"
        : "Shared experience, independent domain logic"
      : slug === "license-platform"
        ? fa
          ? "اشتراک، entitlement و لایسنس نقش‌های متفاوتی دارند"
          : "Subscriptions, entitlements and licenses serve different roles"
        : slug === "fox-pay"
          ? fa
            ? "محصول با یک قرارداد پرداخت کار می‌کند؛ درگاه قابل تعویض است"
            : "Products use one payment contract; providers can change"
          : fa
            ? "محصول مالک دامنه خود می‌ماند"
            : "The product keeps ownership of its domain";

  const boundaryBody =
    slug === "sfas"
      ? fa
        ? "SFAS پایه رابط مدیریت، سیستم طراحی، دسترس‌پذیری و پشتیبانی هم‌ارز RTL/LTR را فراهم می‌کند. نسخه‌بندی اجزای مشترک باید امکان پذیرش تدریجی را بدهد و فرایندهای اختصاصی هر محصول در همان محصول باقی بمانند."
        : "SFAS provides administration foundations, design primitives, accessibility and equal RTL/LTR support. Versioned components can be adopted incrementally while product-specific workflows remain inside the product."
      : slug === "license-platform"
        ? fa
          ? "اشتراک رابطه تجاری را تعریف می‌کند؛ entitlement مشخص می‌کند چه قابلیتی مجاز است؛ لایسنس مدرک فنی استفاده است. اندازه‌گیری مصرف و صورت‌حساب در نقشه‌راه پلتفرم قرار دارند و این صفحه معماری هدف را توضیح می‌دهد، نه فهرست قابلیت‌های آماده عرضه."
          : "A subscription records the commercial relationship, an entitlement grants a capability and a license proves technical access. Metering and billing belong to the platform roadmap; this page describes the intended architecture, not a claim that every capability is already in production."
        : slug === "fox-pay"
          ? fa
            ? "در مدل هدف، هر کسب‌وکار حساب پذیرندگی خودش را به کار می‌گیرد. Fox Pay مسیریابی، تأیید، idempotency، تطبیق تراکنش و تحویل Webhook را پشت یک قرارداد مشترک سامان می‌دهد. وضعیت عرضه هر قابلیت باید جداگانه و مستند اعلام شود."
            : "The target model uses each customer's own merchant accounts. Fox Pay organizes routing, verification, idempotency, reconciliation and webhook delivery behind a common contract. Release status for each capability is tracked separately."
          : fa
            ? "استفاده از زیرساخت مشترک به معنی اشتراک داده یا منطق کسب‌وکار نیست. قراردادهای روشن اتصال به قابلیت‌های مرکزی را ممکن می‌کنند، بدون اینکه محصول به جزئیات پیاده‌سازی آن‌ها وابسته شود."
            : "Shared infrastructure does not mean shared business data. Explicit contracts connect products to common capabilities without binding product code to their internal implementation.";

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
                  <span>{fa ? "۰۱۲۳۴۵۶۷۸۹"[index + 1] : index + 1}</span>
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

      <section className="platformNarrative">
        <div className="shell">
          <span className="kicker">{fa ? "مرز مسئولیت" : "DESIGN BOUNDARY"}</span>
          <h2>{boundaryTitle}</h2>
          <p>{boundaryBody}</p>
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
