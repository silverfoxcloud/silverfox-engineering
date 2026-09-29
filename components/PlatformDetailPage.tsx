import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { platformPages, platformSlugs, type PlatformSlug } from "@/data/engineering-pages";
import type { Locale } from "@/data/content";

export default function PlatformDetailPage({ slug, locale }: { slug: PlatformSlug; locale: Locale }) {
  const page = platformPages[slug][locale];
  const fa = locale === "fa";
  const prefix = fa ? "/fa" : "";

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
            <div className="platformGlyph"><img src="/silver-fox-logo.svg" alt="" /></div>
          </div>
        </div>
      </section>

      <section className="platformBody">
        <div className="shell platformColumns">
          <div>
            <span className="kicker">{fa ? "قابلیت‌ها" : "CAPABILITIES"}</span>
            <div className="capabilityList">
              {page.capabilities.map((item,index) => <div key={item}><span>{fa ? "۰۱۲۳۴۵۶۷۸۹"[index+1] : index+1}</span><strong>{item}</strong></div>)}
            </div>
          </div>
          <div>
            <span className="kicker">{fa ? "رویکرد مهندسی" : "ENGINEERING APPROACH"}</span>
            <div className="engineeringList">{page.engineering.map(item => <p key={item}>{item}</p>)}</div>
          </div>
        </div>
      </section>

      <section className="platformNarrative"><div className="shell"><span className="kicker">{fa ? "مرز مسئولیت" : "DESIGN BOUNDARY"}</span><h2>{slug === "sfas" ? (fa ? "تجربه مشترک، منطق مستقل" : "Shared experience, independent domain logic") : slug === "license-platform" ? (fa ? "اشتراک، حق دسترسی و لایسنس یک مفهوم نیستند" : "Subscriptions, entitlements and licenses serve different roles") : slug === "fox-pay" ? (fa ? "محصول با قرارداد پرداخت کار می‌کند؛ درگاه قابل تغییر است" : "Products use one payment contract; providers can change") : (fa ? "محصول مالک دامنه خود می‌ماند" : "The product owns its domain")}</h2><p>{slug === "sfas" ? (fa ? "SFAS پایه رابط مدیریت، سیستم طراحی، دسترس‌پذیری و چیدمان راست‌به‌چپ و چپ‌به‌راست را فراهم می‌کند. نسخه‌بندی اجزای مشترک باید امکان پذیرش تدریجی در هر محصول را بدهد؛ فرایندهای اختصاصی محصول در همان محصول باقی می‌مانند." : "SFAS provides admin foundations, design primitives, accessibility and equal RTL/LTR support. Versioned components can be adopted incrementally; each product keeps its own workflows.") : slug === "license-platform" ? (fa ? "اشتراک رابطه تجاری را تعریف می‌کند؛ حق دسترسی تعیین می‌کند چه قابلیتی مجاز است؛ لایسنس مدرک فنی استفاده است. اندازه‌گیری مصرف و صورت‌حساب در نقشه‌راه پلتفرم قرار دارند. این صفحه معماری هدف را نشان می‌دهد، نه فهرست قابلیت‌های آماده عرضه." : "A subscription records the commercial relationship, an entitlement grants a capability and a license proves technical access. Metering and billing belong to the platform roadmap; this describes the intended architecture, not a claim of production availability.") : slug === "fox-pay" ? (fa ? "در مدل هدف، هر کسب‌وکار حساب پذیرندگی خودش را به کار می‌گیرد. Fox Pay منطق انتخاب درگاه، تأیید پرداخت، جلوگیری از ثبت تکراری، تطبیق تراکنش و تحویل Webhook را پشت قرارداد مشترک سامان می‌دهد. این قابلیت‌ها در مسیر توسعه‌اند و وضعیت عرضه آن‌ها باید جداگانه اعلام شود." : "The target model uses each customer's own merchant accounts. Fox Pay organizes routing, verification, idempotency, reconciliation and webhook delivery behind a common contract. These are design goals whose release status is tracked separately.") : (fa ? "اشتراک زیرساخت به معنی اشتراک داده و منطق کسب‌وکار نیست. قراردادهای روشن، اتصال به قابلیت‌های مرکزی را بدون وابستگی مستقیم به پیاده‌سازی آن‌ها ممکن می‌کنند." : "Shared infrastructure does not mean shared business data. Explicit contracts connect products to common capabilities without binding their internal implementations.")}</p></div></section>
      <section className="relatedPages">
        <div className="shell">
          <div className="relatedHeading"><h2>{fa ? "پلتفرم‌های دیگر" : "Other platforms"}</h2></div>
          <div className="relatedGrid">
            {platformSlugs.filter(x => x !== slug).slice(0,4).map(item => (
              <Link className="relatedCard" href={`${prefix}/platforms/${item}/`} key={item}>
                <span>{platformPages[item][locale].eyebrow}</span>
                <strong>{platformPages[item][locale].name}</strong>
                <i>↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
