import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import type { Locale } from "@/data/content";
import {
  engineeringNotes,
  architectureDecisions,
  buildStories,
  changelog,
  type PublicationKind,
  type PublicationRecord,
} from "@/data/publications";

const publicationSets: Record<PublicationKind, PublicationRecord[]> = {
  note: engineeringNotes,
  decision: architectureDecisions,
  story: buildStories,
};

function localize(_locale: Locale, href: string) {
  return href;
}

function pathForKind(kind: PublicationKind) {
  if (kind === "note") return "/engineering/";
  if (kind === "decision") return "/architecture-decisions/";
  return "/build-stories/";
}

function faDigits(value: string) {
  return value.replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}

function labels(kind: PublicationKind, fa: boolean) {
  if (kind === "note") {
    return {
      eyebrow: fa ? "یادداشت‌های مهندسی" : "ENGINEERING NOTES",
      title: fa ? "تصمیم‌های فنی، با زمینه و ملاحظه." : "Technical decisions with context and trade-offs.",
      body: fa
        ? "یادداشت‌ها از تصمیم‌ها و پیاده‌سازی‌های واقعی Silver Fox استخراج می‌شوند. مقاله تاریخی یا فعالیت قدیمی ساختگی در این بخش منتشر نمی‌شود."
        : "Notes are derived from real Silver Fox decisions and implementation evidence. This publication does not backfill invented historical activity.",
    };
  }
  if (kind === "decision") {
    return {
      eyebrow: fa ? "تصمیم‌های معماری" : "ARCHITECTURE DECISIONS",
      title: fa ? "تصمیم، محدودیت و پیامد؛ بدون پنهان‌کردن trade-off." : "Decision, constraint and consequence—without hiding the trade-off.",
      body: fa
        ? "این بخش فقط ADRهایی را عمومی می‌کند که برای توضیح معماری مفیدند و اطلاعات محرمانه، credential یا جزئیات قابل سوءاستفاده ندارند."
        : "Only ADRs appropriate for public explanation appear here. Credentials, sensitive topology and exploitable defensive detail stay private.",
    };
  }
  return {
    eyebrow: fa ? "روایت‌های ساخت" : "ENGINEERING BUILD STORIES",
    title: fa ? "چه ساختیم، چرا ساختیم و چه چیزی واقعاً تحویل شد." : "What we built, why we built it and what actually shipped.",
    body: fa
      ? "Build Story جای case study ساختگی نیست. هر روایت از report، تست و milestone واقعی می‌آید و محدودیت‌های همان مرحله را هم حفظ می‌کند."
      : "A Build Story is not a fabricated customer case study. Every story is grounded in real reports, tests and milestones, including the limits of that phase.",
  };
}

export function PublicationIndexPage({ locale, kind }: { locale: Locale; kind: PublicationKind }) {
  const fa = locale === "fa";
  const records = publicationSets[kind];
  const copy = labels(kind, fa);
  const base = pathForKind(kind);

  return (
    <main lang={fa ? "fa" : "en"} dir={fa ? "rtl" : "ltr"} className={fa ? "rtl detailPage" : "ltr detailPage"}>
      <SiteHeader locale={locale} />

      <section className="publicationHero">
        <div className="shell publicationHeroInner">
          <span className="kicker">{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p>{copy.body}</p>
        </div>
      </section>

      <section className="publicationIndex">
        <div className="shell">
          <div className="publicationRows">
            {records.map((record, index) => (
              <Link
                className="publicationRow"
                href={localize(locale, base + record.slug + "/")}
                key={record.slug}
              >
                <span className="publicationIndexNumber">
                  {fa ? faDigits(String(index + 1).padStart(2, "0")) : String(index + 1).padStart(2, "0")}
                </span>
                <div className="publicationRowCopy">
                  <div className="publicationMetaLine">
                    <span>{record.category}</span>
                    <span>{record.platform}</span>
                    <time dateTime={record.published}>{fa ? faDigits(record.published.replaceAll("-", "/")) : record.published}</time>
                  </div>
                  <h2>{record.title[locale]}</h2>
                  <p>{record.summary[locale]}</p>
                  <div className="publicationTags">
                    {record.tags.map((tag) => <small key={tag}>{tag}</small>)}
                  </div>
                </div>
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

export function PublicationDetailPage({
  locale,
  record,
}: {
  locale: Locale;
  record: PublicationRecord;
}) {
  const fa = locale === "fa";
  const base = pathForKind(record.kind);
  const related = publicationSets[record.kind].filter((item) => item.slug !== record.slug).slice(0, 3);

  return (
    <main lang={fa ? "fa" : "en"} dir={fa ? "rtl" : "ltr"} className={fa ? "rtl detailPage" : "ltr detailPage"}>
      <SiteHeader locale={locale} />

      <article className="publicationArticle">
        <header className="publicationArticleHero">
          <div className="shell publicationArticleHeroInner">
            <Link className="publicationBack" href={localize(locale, base)}>
              {record.kind === "note"
                ? (fa ? "یادداشت‌های مهندسی" : "Engineering Notes")
                : record.kind === "decision"
                  ? (fa ? "تصمیم‌های معماری" : "Architecture Decisions")
                  : (fa ? "روایت‌های ساخت" : "Build Stories")}
              <span aria-hidden="true"> ↗</span>
            </Link>
            <div className="publicationMetaLine">
              <span>{record.category}</span>
              <span>{record.platform}</span>
              {record.status && <span>{record.status}</span>}
              <time dateTime={record.published}>{fa ? faDigits(record.published.replaceAll("-", "/")) : record.published}</time>
            </div>
            <h1>{record.title[locale]}</h1>
            <p>{record.summary[locale]}</p>
            <div className="publicationTags">
              {record.tags.map((tag) => <small key={tag}>{tag}</small>)}
            </div>
          </div>
        </header>

        <div className="publicationArticleBody shell">
          {record.sourceDate && (
            <aside className="publicationSourceNote">
              <span>{fa ? "تاریخ منبع فنی" : "SOURCE DECISION / PHASE DATE"}</span>
              <strong>{fa ? faDigits(record.sourceDate.replaceAll("-", "/")) : record.sourceDate}</strong>
              <p>
                {fa
                  ? "تاریخ بالا مربوط به ADR یا گزارش فنی منبع است؛ تاریخ انتشار این مطلب در پرتال جداگانه ثبت شده است."
                  : "This is the date of the source ADR or phase report. The portal publication date is recorded separately."}
              </p>
            </aside>
          )}

          <div className="publicationSections">
            {record.sections.map((section, index) => (
              <section key={section.heading.en}>
                <span className="publicationSectionNumber">
                  {fa ? faDigits(String(index + 1).padStart(2, "0")) : String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{section.heading[locale]}</h2>
                  <p>{section.body[locale]}</p>
                  {section.bullets && (
                    <ul>
                      {section.bullets[locale].map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="publicationRelated">
          <div className="shell">
            <h2>{fa ? "مطالب مرتبط" : "Related publication"}</h2>
            <div className="relatedGrid">
              {related.map((item) => (
                <Link className="relatedCard" href={localize(locale, base + item.slug + "/")} key={item.slug}>
                  <span>{item.platform}</span>
                  <strong>{item.title[locale]}</strong>
                  <i aria-hidden="true">↗</i>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter locale={locale} />
    </main>
  );
}

export function ChangelogPage({ locale }: { locale: Locale }) {
  const fa = locale === "fa";

  return (
    <main lang={fa ? "fa" : "en"} dir={fa ? "rtl" : "ltr"} className={fa ? "rtl detailPage" : "ltr detailPage"}>
      <SiteHeader locale={locale} />

      <section className="publicationHero changelogHero">
        <div className="shell publicationHeroInner">
          <span className="kicker">{fa ? "تغییرات مهندسی" : "ENGINEERING CHANGELOG"}</span>
          <h1>{fa ? "فقط آنچه واقعاً تغییر کرده است." : "Only what actually changed."}</h1>
          <p>
            {fa
              ? "این timeline از انتشار پکیج، reportهای تکمیل فاز و تغییرات واقعی همین پرتال ساخته می‌شود. ورودی تاریخی برای پرکردن صفحه ساخته نمی‌شود."
              : "This timeline is grounded in package publication, completed phase reports and real portal changes. Historical entries are not manufactured to make the feed look older."}
          </p>
        </div>
      </section>

      <section className="changelogSection">
        <div className="shell changelogTimeline">
          {changelog.map((entry, index) => (
            <article className="changelogEntry" key={entry.date + entry.type + entry.title.en}>
              <div className="changelogDate">
                <span>{fa ? faDigits(String(index + 1).padStart(2, "0")) : String(index + 1).padStart(2, "0")}</span>
                <time dateTime={entry.date}>{fa ? faDigits(entry.date.replaceAll("-", "/")) : entry.date}</time>
              </div>
              <div>
                <span className="changelogType">{entry.type}</span>
                <h2>{entry.title[locale]}</h2>
                <p>{entry.body[locale]}</p>
                <Link href={localize(locale, entry.href)}>
                  {fa ? "مشاهده زمینه فنی" : "Open engineering context"} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
