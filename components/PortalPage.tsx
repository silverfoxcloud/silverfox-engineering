import Link from "next/link";
import { copy, projects, stack, type Locale } from "@/data/content";
import EngineeringStories from "@/components/EngineeringStories";

const icons = {
  ecosystem: "◆",
  projects: "▦",
  architecture: "⌘",
  standards: "◎",
};

function faDigits(value: string) {
  return value.replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

function indexLabel(index: number, locale: Locale) {
  const value = String(index + 1).padStart(2, "0");
  return locale === "fa" ? faDigits(value) : value;
}

export default function PortalPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const rtl = locale === "fa";

  return (
    <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : "ltr"}>
      <header className="siteHeader">
        <div className="shell navWrap">
          <Link href={locale === "fa" ? "/fa/" : "/"} className="brand" aria-label="Silver Fox Engineering">
            <span className="brandLogoWrap">
              <img src="/silver-fox-logo.svg" alt="" className="brandLogo" />
            </span>
            <span className="brandText"><strong>Silver Fox</strong><small>Engineering</small></span>
          </Link>
          <nav className="navLinks" aria-label="Primary navigation">
            <a href="#ecosystem">{c.nav[0]}</a>
            <a href="#projects">{c.nav[1]}</a>
            <a href="#architecture">{c.nav[2]}</a>
            <a href="#technology">{c.nav[3]}</a>
            <a href="#security">{c.nav[4]}</a>
          </nav>
          <Link href={c.langHref} className="langSwitch">{c.langName}</Link>
        </div>
      </header>

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
              <a className="button primary" href="#technology">{c.primaryCta}<span>↗</span></a>
              <a className="button secondary" href="#architecture">{c.secondaryCta}</a>
            </div>
          </div>

          <div className="systemCard" aria-label="Silver Fox ecosystem diagram">
            <div className="systemTop">
              <span>Silver Fox</span>
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
              <div className="node">SFAS<small>Experience</small></div>
              <div className="node">License<small>Entitlements</small></div>
              <div className="node">Fox Pay<small>Payments</small></div>
            </div>
            <div className="connector vertical small" />
            <div className="nodeRow productRow">
              <div className="node product">ExoTravel</div>
              <div className="node product">ExoHub</div>
              <div className="node product">Platforms</div>
            </div>
          </div>
        </div>

        <div className="shell metricGrid">
          {c.metrics.map(([n, label]) => (
            <div className="metric" key={label}><strong>{n}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>

      <section className="techMarquee" aria-label="Technology stack">
        <div className="marqueeTrack">
          {[...stack, ...stack].map((item, i) => <span key={`${item}-${i}`}><i />{item}</span>)}
        </div>
      </section>

      <section className="section" id="ecosystem">
        <div className="shell">
          <div className="sectionIntro">
            <span className="sectionIcon">{icons.ecosystem}</span>
            <div><h2>{c.ecosystemTitle}</h2><p>{c.ecosystemBody}</p></div>
          </div>
          <div className="pillarGrid">
            {c.pillars.map(([title, body], i) => (
              <article className="pillar" key={title}>
                <span className="index">{indexLabel(i, locale)}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EngineeringStories locale={locale} />

      <section className="section sectionAlt" id="projects">
        <div className="shell">
          <div className="sectionHeading">
            <div><span className="kicker">{icons.projects} {locale === "fa" ? "پلتفرم‌ها" : "PORTFOLIO"}</span><h2>{c.projectsTitle}</h2></div>
            <p>{c.projectsBody}</p>
          </div>
          <div className="projectGrid">
            {projects.map((p) => (
              <article className="projectCard" key={p.name}>
                <div className="projectHeader"><span className="projectShort">{p.short}</span><span className="status">{p.status[locale]}</span></div>
                <div className="category">{p.category[locale]}</div>
                <h3>{p.name}</h3>
                <p>{p.description[locale]}</p>
                <div className="tags">
                  {p.capabilities[locale].map((cap) => <span key={cap}>{cap}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section architectureSection" id="architecture">
        <div className="shell">
          <div className="sectionHeading">
            <div><span className="kicker">{icons.architecture} {locale === "fa" ? "معماری سیستم" : "SYSTEM"}</span><h2>{c.architectureTitle}</h2></div>
            <p>{c.architectureBody}</p>
          </div>
          <div className="architectureGrid">
            {c.architecture.map(([title, body], i) => (
              <article className="architectureItem" key={title}>
                <span>{indexLabel(i, locale)}</span><div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section techSection" id="technology">
        <div className="shell">
          <div className="sectionHeading">
            <div><span className="kicker">◈ {locale === "fa" ? "فناوری" : "TECHNOLOGY"}</span><h2>{c.techTitle}</h2></div>
            <p>{c.techBody}</p>
          </div>
          <div className="techGrid">
            {c.technology.map(([title, body], i) => (
              <article className="techCard" key={title}>
                <span className="techIndex">{indexLabel(i, locale)}</span>
                <div className="techPulse" aria-hidden="true" />
                <h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt" id="standards">
        <div className="shell standardsGrid">
          <div>
            <span className="kicker">{icons.standards} {locale === "fa" ? "اصول" : "PRINCIPLES"}</span>
            <h2>{c.standardsTitle}</h2>
          </div>
          <ol className="standardList">
            {c.standards.map((item, i) => <li key={item}><span>{indexLabel(i, locale)}</span><p>{item}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section securitySection" id="security">
        <div className="shell securityCard">
          <div className="shield"><img src="/silver-fox-logo.svg" alt="" /></div>
          <div>
            <span className="kicker">{locale === "fa" ? "مهندسی امنیت" : "SECURITY ENGINEERING"}</span>
            <h2>{c.securityTitle}</h2>
            <p>{c.securityBody}</p>
            <div className="securityTags">{c.securityPoints.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footerInner">
          <div className="brand footerBrand">
            <span className="brandLogoWrap"><img src="/silver-fox-logo.svg" alt="" className="brandLogo" /></span>
            <span className="brandText"><strong>Silver Fox</strong><small>Engineering</small></span>
          </div>
          <div className="footerText">
            <span>© 2026 Silver Fox</span>
            <small>{c.legal}</small>
          </div>
          <div className="footerLinks">
            <a href="https://git.silverfoxcloud.com" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/company/silverfoxcloud" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
