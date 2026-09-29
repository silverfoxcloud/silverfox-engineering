import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { copy, type Locale } from "@/data/content";
import ArchitectureMap from "@/components/ArchitectureMap";
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

          <ArchitectureMap locale={locale} />
        </div>


      </section>

      <section className="homeIntro">
        <div className="shell homeIntroGrid">
          <div>
            <span className="kicker">{fa ? "رویکرد مهندسی" : "ENGINEERING APPROACH"}</span>
            <h2>{fa ? "یک اکوسیستم؛ چند محصول؛ یک زبان مشترک مهندسی." : "One ecosystem. Multiple products. One engineering language."}</h2>
          </div>
          <p>{fa ? "هویت، پرداخت و لایسنس در کنار زیرساخت ابری و تجربه چندزبانه، بر پایه قراردادهای روشن به محصولات متصل می‌شوند. هر محصول داده و مسیر توسعه خود را مدیریت می‌کند." : "Identity, payments and licensing connect to products through clear contracts. Each product retains ownership of its data and delivery path."}</p>
        </div>
      </section>

      <section className="homeFeatureSection">
        <div className="shell">
          <div className="homeSectionHeading">
            <span className="kicker">{fa ? "بخش‌های مهندسی" : "ENGINEERING AREAS"}</span>
            <h2>{fa ? "از معماری تا عملیات؛ یک نگاه یکپارچه به فناوری" : "Engineering decisions across the stack"}</h2>
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
            <p>{fa ? "SFAS، پلتفرم لایسنس و Fox Pay قابلیت‌های مشترک می‌سازند؛ ExoTravel و ExoHub مسیر محصولی مستقل دارند." : "SFAS, License Platform and Fox Pay build shared capabilities; ExoTravel and ExoHub own distinct product paths."}</p>
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
