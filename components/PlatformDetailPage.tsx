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
