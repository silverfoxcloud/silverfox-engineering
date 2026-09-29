import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { packages, type PackageRecord } from "@/data/packages";
import type { Locale } from "@/data/content";

function faDigits(value: string) {
  return value.replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}

function localize(_locale: Locale, href: string) {
  return href;
}

export function PackageDirectoryPage({ locale }: { locale: Locale }) {
  const fa = locale === "fa";

  return (
    <main lang={fa ? "fa" : "en"} dir={fa ? "rtl" : "ltr"} className={fa ? "rtl detailPage" : "ltr detailPage"}>
      <SiteHeader locale={locale} />

      <section className="packageHero">
        <div className="shell packageHeroGrid">
          <div>
            <span className="kicker">{fa ? "پکیج‌های مهندسی" : "ENGINEERING PACKAGES"}</span>
            <h1>{fa ? "پکیج‌های واقعی، با وضعیت انتشار روشن." : "Verified packages with an explicit release state."}</h1>
            <p>
              {fa
                ? "دایرکتوری فعلی از هفت پکیج واقعی SFAS ساخته شده است. همه روی نسخه 0.2.0-alpha.12، کانال next و GitHub Packages خصوصی قرار دارند؛ بدون نسبت‌دادن وضعیت Stable به چیزی که هنوز prerelease است."
                : "The current directory is generated from seven real SFAS packages. They are published as 0.2.0-alpha.12 on the next channel in a private GitHub Packages registry—without presenting prerelease software as stable."}
            </p>
          </div>

          <aside className="packageReleasePanel">
            <span>{fa ? "وضعیت انتشار" : "RELEASE EVIDENCE"}</span>
            <strong>0.2.0-alpha.12</strong>
            <dl>
              <div><dt>{fa ? "کانال" : "Channel"}</dt><dd>next</dd></div>
              <div><dt>{fa ? "رجیستری" : "Registry"}</dt><dd>GitHub Packages</dd></div>
              <div><dt>{fa ? "دسترسی" : "Visibility"}</dt><dd>{fa ? "خصوصی" : "Private"}</dd></div>
              <div><dt>{fa ? "انتشار" : "Published"}</dt><dd>{fa ? "۲۰۲۶/۰۹/۲۹" : "2026-09-29"}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="packageDirectorySection">
        <div className="shell">
          <div className="packageSectionHeading">
            <span className="kicker">{fa ? "دایرکتوری" : "PACKAGE DIRECTORY"}</span>
            <h2>{fa ? "خانواده فعلی SFAS" : "Current SFAS package family"}</h2>
            <p>
              {fa
                ? "نام، نسخه، وابستگی و نقش هر پکیج از manifest و مستندات همان ریپو گرفته شده است."
                : "Package identity, version, dependencies and responsibilities are grounded in the package manifests and repository documentation."}
            </p>
          </div>

          <div className="packageTable" role="table" aria-label={fa ? "دایرکتوری پکیج‌ها" : "Package directory"}>
            <div className="packageTableHead" role="row">
              <span role="columnheader">{fa ? "پکیج" : "Package"}</span>
              <span role="columnheader">{fa ? "نقش" : "Responsibility"}</span>
              <span role="columnheader">{fa ? "نسخه" : "Version"}</span>
              <span role="columnheader">{fa ? "وضعیت" : "Lifecycle"}</span>
            </div>
            {packages.map((pkg, index) => (
              <Link
                role="row"
                className="packageRow"
                href={localize(locale, "/packages/" + pkg.slug + "/")}
                key={pkg.slug}
              >
                <span className="packageIdentity" role="cell">
                  <small>{fa ? faDigits(String(index + 1).padStart(2, "0")) : String(index + 1).padStart(2, "0")}</small>
                  <strong>{pkg.displayName}</strong>
                  <code>{pkg.name}</code>
                </span>
                <span className="packageDescription" role="cell">{pkg.description[locale]}</span>
                <span className="packageVersion" role="cell">{pkg.version}</span>
                <span className="packageLifecycle" role="cell">
                  <b>{fa ? "پیش‌انتشار" : pkg.lifecycle}</b>
                  <small>{fa ? "کانال next" : "next channel"}</small>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="packageInstallSection" id="installation">
        <div className="shell packageInstallGrid">
          <div>
            <span className="kicker">{fa ? "نصب و رجیستری" : "INSTALLATION & REGISTRY"}</span>
            <h2>{fa ? "رجیستری خصوصی، قرارداد نصب مشخص." : "Private registry. Explicit installation contract."}</h2>
            <p>
              {fa
                ? "رجیستری canonical، GitHub Packages است. نصب برای مصرف‌کننده مجاز به authentication معتبر GitHub نیاز دارد؛ توکن یا credential در این پرتال نمایش داده نمی‌شود."
                : "GitHub Packages is the canonical registry. Installation requires authorized GitHub authentication; this portal never exposes a token or credential."}
            </p>
          </div>
          <div className="codeStack">
            <div className="codeSurface">
              <span>.npmrc</span>
              <code>@silverfoxcloud:registry=https://npm.pkg.github.com</code>
            </div>
            <div className="codeSurface">
              <span>{fa ? "نمونه نصب" : "Install example"}</span>
              <code>npm install @silverfoxcloud/sfas-core@0.2.0-alpha.12</code>
            </div>
          </div>
        </div>
      </section>

      <section className="packageEvidenceSection" id="releases">
        <div className="shell packageEvidenceGrid">
          <article>
            <span>{fa ? "۰۱" : "01"}</span>
            <h3>{fa ? "انتشار کنترل‌شده" : "Controlled publication"}</h3>
            <p>{fa ? "اولین انتشار کنترل‌شده در GitHub Packages با موفقیت انجام شده است." : "The first controlled publication to GitHub Packages completed successfully."}</p>
          </article>
          <article>
            <span>{fa ? "۰۲" : "02"}</span>
            <h3>{fa ? "نصب از رجیستری واقعی" : "Real-registry install"}</h3>
            <p>{fa ? "clean install و import واقعی از رجیستری با موفقیت اعتبارسنجی شده است." : "A clean install and import from the real registry has been validated successfully."}</p>
          </article>
          <article>
            <span>{fa ? "۰۳" : "03"}</span>
            <h3>{fa ? "هنوز Stable نیست" : "Still prerelease"}</h3>
            <p>{fa ? "نسخه alpha و dist-tag برابر next است؛ این دایرکتوری آن را Stable معرفی نمی‌کند." : "The version is alpha and the dist-tag is next; this directory does not label it stable."}</p>
          </article>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}

export function PackageDetailPage({ locale, pkg }: { locale: Locale; pkg: PackageRecord }) {
  const fa = locale === "fa";
  const related = packages.filter((item) => item.slug !== pkg.slug).slice(0, 3);

  return (
    <main lang={fa ? "fa" : "en"} dir={fa ? "rtl" : "ltr"} className={fa ? "rtl detailPage" : "ltr detailPage"}>
      <SiteHeader locale={locale} />

      <section className="packageDetailHero">
        <div className="shell packageDetailHeroGrid">
          <div>
            <Link className="packageBack" href={localize(locale, "/packages/")}>
              {fa ? "دایرکتوری پکیج‌ها" : "Package Directory"} <span aria-hidden="true">↗</span>
            </Link>
            <span className="kicker">{fa ? "پکیج SFAS" : "SFAS PACKAGE"}</span>
            <h1>{pkg.displayName}</h1>
            <code className="packageFullName">{pkg.name}</code>
            <p>{pkg.overview[locale]}</p>
          </div>

          <aside className="packageMetaPanel">
            <div><span>{fa ? "نسخه" : "Version"}</span><strong>{pkg.version}</strong></div>
            <div><span>{fa ? "کانال" : "Channel"}</span><strong>{pkg.channel}</strong></div>
            <div><span>{fa ? "چرخه" : "Lifecycle"}</span><strong>{fa ? "پیش‌انتشار" : pkg.lifecycle}</strong></div>
            <div><span>{fa ? "رجیستری" : "Registry"}</span><strong>{pkg.registry}</strong></div>
            <div><span>{fa ? "دسترسی" : "Visibility"}</span><strong>{fa ? "خصوصی" : pkg.registryVisibility}</strong></div>
            <div><span>{fa ? "انتشار" : "Published"}</span><strong>{fa ? "۲۰۲۶/۰۹/۲۹" : pkg.publishedAt}</strong></div>
          </aside>
        </div>
      </section>

      <section className="packageDetailBody">
        <div className="shell packageDetailColumns">
          <section>
            <span className="kicker">{fa ? "قابلیت‌ها" : "CAPABILITIES"}</span>
            <div className="packageBulletList">
              {pkg.capabilities[locale].map((item, index) => (
                <div key={item}>
                  <span>{fa ? faDigits(String(index + 1).padStart(2, "0")) : String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </section>

          <section>
            <span className="kicker">{fa ? "سازگاری" : "COMPATIBILITY"}</span>
            <div className="packageBulletList">
              {pkg.compatibility[locale].map((item, index) => (
                <div key={item}>
                  <span>{fa ? faDigits(String(index + 1).padStart(2, "0")) : String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="packageInstallDetail">
        <div className="shell packageInstallDetailGrid">
          <div>
            <span className="kicker">{fa ? "نصب" : "INSTALL"}</span>
            <h2>{fa ? "مصرف از GitHub Packages خصوصی" : "Consume from private GitHub Packages"}</h2>
            <p>
              {fa
                ? "ابتدا scope رجیستری را تنظیم کنید و سپس با credential مجاز GitHub احراز هویت کنید. این پرتال هیچ credential یا توکن نمونه‌ای منتشر نمی‌کند."
                : "Configure the scoped registry first, then authenticate with an authorized GitHub credential. This portal intentionally publishes no credential or example token."}
            </p>
          </div>
          <div className="codeStack">
            <div className="codeSurface"><span>.npmrc</span><code>@silverfoxcloud:registry=https://npm.pkg.github.com</code></div>
            <div className="codeSurface"><span>npm</span><code>{pkg.install}</code></div>
          </div>
        </div>
      </section>

      <section className="packageDependencySection">
        <div className="shell packageDependencyGrid">
          <div>
            <span className="kicker">{fa ? "وابستگی‌ها" : "DEPENDENCIES"}</span>
            <h2>{fa ? "مرز وابستگی قابل مشاهده" : "Visible dependency boundary"}</h2>
          </div>
          <div className="dependencyList">
            {pkg.dependencies.length ? pkg.dependencies.map((item) => <code key={item}>{item} — {pkg.version}</code>) : (
              <p>{fa ? "در manifest این پکیج وابستگی runtime به پکیج دیگری از SFAS ثبت نشده است." : "The package manifest records no runtime dependency on another SFAS package."}</p>
            )}
          </div>
        </div>
      </section>

      <section className="relatedPages packageRelated">
        <div className="shell">
          <div className="relatedHeading"><h2>{fa ? "پکیج‌های مرتبط" : "Related packages"}</h2></div>
          <div className="relatedGrid">
            {related.map((item) => (
              <Link className="relatedCard" href={localize(locale, "/packages/" + item.slug + "/")} key={item.slug}>
                <span>{fa ? "SFAS / پیش‌انتشار" : "SFAS / PRERELEASE"}</span>
                <strong>{item.displayName}</strong>
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
