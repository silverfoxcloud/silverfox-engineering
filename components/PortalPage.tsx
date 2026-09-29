import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { copy, stack, type Locale } from "@/data/content";
import { engineeringPages, platformPages } from "@/data/engineering-pages";

const featuredEngineering = ["architecture", "platform", "security", "devops-sre"] as const;
const featuredPlatforms = ["sfas", "license-platform", "fox-pay", "exotravel", "exohub"] as const;

export default function PortalPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const fa = locale === "fa";
  const prefix = fa ? "/fa" : "";

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
              <Link className="button primary" href={`${prefix}/architecture/`}>{fa ? "معماری Silver Fox" : "Explore architecture"}<span>↗</span></Link>
              <Link className="button secondary" href={`${prefix}/technology-radar/`}>{fa ? "رادار فناوری" : "Technology radar"}</Link>
            </div>
          </div>

          <div className="systemCard" aria-label="Silver Fox ecosystem diagram">
            <div className="systemTop">
              <span>{fa ? "پردازش ابری روباه نقره‌ای" : "Silver Fox"}</span>
              <span className="liveDot">ENGINEERING</span>
            </div>
            <div className="signalStage" aria-hidden="true">
              <span className="signalRing ringOne" />
              <span className="signalRing ringTwo" />
              <span className="signalRing ringThree" />
              <span className="signalDot dotOne" />
              <span className="signalDot dotTwo" />
              <span className="signalDot dotThree" />
              <div className="coreNode">
                <img src="/silver-fox-logo.svg" alt="" />
                <strong>SILVER FOX</strong>
                <span>ECOSYSTEM</span>
              </div>
            </div>
            <div className="nodeRow">
              <div className="node">SFAS<small>{fa ? "تجربه" : "Experience"}</small></div>
              <div className="node">License<small>{fa ? "دسترسی" : "Entitlements"}</small></div>
              <div className="node">Fox Pay<small>{fa ? "پرداخت" : "Payments"}</small></div>
            </div>
            <div className="connector vertical small" />
            <div className="nodeRow productRow">
              <div className="node product">ExoTravel</div>
              <div className="node product">ExoHub</div>
              <div className="node product">{fa ? "محصولات" : "Products"}</div>
            </div>
          </div>
        </div>

        <div className="shell metricGrid">
          {c.metrics.map(([n, label]) => <div className="metric" key={label}><strong>{n}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="techMarquee" aria-label="Technology stack">
        <div className="marqueeTrack">
          {[...stack, ...stack].map((item, i) => <span key={`${item}-${i}`}><i />{item}</span>)}
        </div>
      </section>

      <section className="homeIntro">
        <div className="shell homeIntroGrid">
          <div>
            <span className="kicker">{fa ? "رویکرد مهندسی" : "ENGINEERING APPROACH"}</span>
            <h2>{fa ? "یک اکوسیستم؛ چند محصول؛ یک زبان مشترک مهندسی." : "One ecosystem. Multiple products. One engineering language."}</h2>
          </div>
          <p>{fa ? "هدف این وب‌سایت معرفی محصول به شکل بازاریابی نیست. اینجا درباره تصمیم‌هایی می‌نویسیم که پشت محصولات قرار دارند؛ از مرزبندی دامنه و چندمستاجری تا امنیت، داده، عملیات، پردازش ابری و هوش مصنوعی." : "This is not a product marketing site. It documents the engineering choices behind the ecosystem—from domain boundaries and multi-tenancy to security, data, cloud operations and artificial intelligence."}</p>
        </div>
      </section>

      <section className="homeFeatureSection">
        <div className="shell">
          <div className="homeSectionHeading">
            <span className="kicker">{fa ? "بخش‌های مهندسی" : "ENGINEERING AREAS"}</span>
            <h2>{fa ? "از معماری تا عملیات؛ هر موضوع صفحه خودش را دارد." : "From architecture to operations, each concern gets its own space."}</h2>
          </div>
          <div className="homeFeatureGrid">
            {featuredEngineering.map((slug, index) => {
              const page = engineeringPages[slug][locale];
              return (
                <Link className="homeFeatureCard" href={`${prefix}/${slug}/`} key={slug}>
                  <span className="featureIndex">{fa ? "۰۱۲۳۴۵۶۷۸۹"[index+1] : index+1}</span>
                  <span className="kicker">{page.eyebrow}</span>
                  <h3>{page.title}</h3>
                  <p>{page.summary}</p>
                  <i>↗</i>
                </Link>
              );
            })}
          </div>
          <div className="homeMoreLinks">
            <Link href={`${prefix}/cloud/`}>{fa ? "زیرساخت ابری" : "Cloud & Infrastructure"} ↗</Link>
            <Link href={`${prefix}/ai/`}>{fa ? "مهندسی هوش مصنوعی" : "AI Engineering"} ↗</Link>
            <Link href={`${prefix}/data/`}>{fa ? "مهندسی داده" : "Data Engineering"} ↗</Link>
            <Link href={`${prefix}/technology-radar/`}>{fa ? "رادار فناوری" : "Technology Radar"} ↗</Link>
          </div>
        </div>
      </section>

      <section className="homePlatformSection">
        <div className="shell">
          <div className="homeSectionHeading split">
            <div>
              <span className="kicker">{fa ? "پلتفرم‌ها و محصولات" : "PLATFORMS & PRODUCTS"}</span>
              <h2>{fa ? "هر محصول مستقل است؛ زیرساخت مشترک آن‌ها را به هم متصل می‌کند." : "Independent products, connected by shared infrastructure."}</h2>
            </div>
            <p>{fa ? "معرفی عمومی هر پلتفرم روی نقش فنی آن تمرکز می‌کند؛ نه جزئیات محرمانه پیاده‌سازی." : "Each public platform page focuses on engineering responsibility without exposing confidential implementation detail."}</p>
          </div>
          <div className="platformPreviewGrid">
            {featuredPlatforms.map(slug => {
              const page = platformPages[slug][locale];
              return (
                <Link className="platformPreviewCard" href={`${prefix}/platforms/${slug}/`} key={slug}>
                  <span>{page.eyebrow}</span>
                  <strong>{page.name}</strong>
                  <p>{page.lead}</p>
                  <i>↗</i>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="homeClosing">
        <div className="shell homeClosingCard">
          <img src="/silver-fox-logo.svg" alt="" />
          <div>
            <span className="kicker">{fa ? "پردازش ابری روباه نقره‌ای" : "SILVER FOX CLOUD PROCESSING"}</span>
            <h2>{fa ? "فناوری زمانی ارزشمند است که پیچیدگی را کمتر کند." : "Technology is useful when it reduces complexity."}</h2>
            <p>{fa ? "معماری، ابزار و خودکارسازی برای ما هدف نیستند؛ وسیله‌اند تا محصولی ساخته شود که امن‌تر، قابل اتکاتر و آماده‌تر برای تغییر باشد." : "Architecture, tooling and automation are means to build products that are safer, more reliable and easier to evolve."}</p>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
