"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import type { Locale } from "@/data/content";

type RadarStatus = "adopt" | "use" | "trial" | "assess";

type RadarEntry = {
  name: string;
  category: "Backend" | "Data" | "Web" | "Platform" | "Operations" | "Cloud" | "AI" | "Security";
  status: RadarStatus;
  en: string;
  fa: string;
  route: string;
};

const entries: RadarEntry[] = [
  { name: "Go", category: "Backend", status: "adopt", en: "Primary service language where clear domain ownership, explicit APIs and predictable operations matter.", fa: "زبان اصلی سرویس‌ها در جایی که مالکیت دامنه، قرارداد API و رفتار عملیاتی قابل پیش‌بینی اهمیت دارد.", route: "/architecture/" },
  { name: "PostgreSQL", category: "Data", status: "adopt", en: "Durable relational state for transactional domains, constraints and auditable business data.", fa: "منبع پایدار داده رابطه‌ای برای دامنه‌های تراکنشی، قیود داده و اطلاعات کسب‌وکار قابل ممیزی.", route: "/data/" },
  { name: "Redis", category: "Data", status: "adopt", en: "Low-latency caching and short-lived coordination without turning cache into the source of truth.", fa: "کش کم‌تأخیر و هماهنگی کوتاه‌مدت، بدون تبدیل کش به منبع حقیقت داده.", route: "/data/" },
  { name: "TypeScript", category: "Web", status: "adopt", en: "Typed application development across public interfaces and administration surfaces.", fa: "توسعه type-safe برای رابط‌های عمومی و محیط‌های مدیریتی.", route: "/platforms/sfas/" },
  { name: "React", category: "Web", status: "adopt", en: "Composable interface primitives for product and administration experiences.", fa: "پایه کامپوننتی برای تجربه‌های محصول و رابط‌های مدیریتی.", route: "/platforms/sfas/" },
  { name: "Next.js", category: "Web", status: "adopt", en: "Web application foundation where routing, rendering and deployment requirements justify it.", fa: "پایه اپلیکیشن وب در جایی که نیازهای routing، rendering و deployment آن را توجیه می‌کنند.", route: "/platforms/sfas/" },
  { name: "OpenAPI", category: "Platform", status: "adopt", en: "Versioned synchronous contracts that make integration boundaries explicit and reviewable.", fa: "قراردادهای نسخه‌بندی‌شده هم‌زمان برای مرزهای یکپارچه‌سازی صریح و قابل بازبینی.", route: "/platform/" },

  { name: "Apache Kafka", category: "Data", status: "use", en: "Event transport when decoupling, throughput and operational ownership justify the added platform cost.", fa: "انتقال رویداد زمانی که جداسازی، throughput و نیاز عملیاتی هزینه پلتفرم را توجیه کند.", route: "/data/" },
  { name: "OpenTelemetry", category: "Operations", status: "use", en: "Portable instrumentation for traces, metrics and correlation across service boundaries.", fa: "ابزار استاندارد و قابل‌انتقال برای trace، metric و correlation میان سرویس‌ها.", route: "/devops-sre/" },
  { name: "OpenSearch", category: "Data", status: "use", en: "Search and analytical access paths when relational queries are not the right operational fit.", fa: "مسیر جست‌وجو و تحلیل در جایی که query رابطه‌ای انتخاب عملیاتی مناسبی نیست.", route: "/data/" },
  { name: "S3-compatible storage", category: "Cloud", status: "use", en: "Object storage for media, artifacts and durable blobs where object semantics fit the workload.", fa: "ذخیره‌سازی object برای رسانه، artifact و blobهای پایدار، وقتی مدل object با workload سازگار است.", route: "/cloud/" },
  { name: "Kubernetes", category: "Cloud", status: "use", en: "Orchestration only when workload scale and operational ownership earn its complexity.", fa: "orchestration فقط زمانی که مقیاس workload و مسئولیت عملیاتی، پیچیدگی آن را توجیه کنند.", route: "/cloud/" },

  { name: "AI-assisted engineering", category: "AI", status: "trial", en: "Human-owned implementation, review and documentation workflows with traceable validation.", fa: "گردش‌کار توسعه، بازبینی و مستندسازی با مالکیت انسانی و اعتبارسنجی قابل ردیابی.", route: "/ai/" },
  { name: "Policy automation", category: "Security", status: "trial", en: "Reviewable automation for repeatable controls without hiding security decisions in opaque tooling.", fa: "خودکارسازی قابل بازبینی برای کنترل‌های تکرارپذیر، بدون پنهان‌کردن تصمیم امنیتی در ابزار مبهم.", route: "/security/" },
  { name: "Platform abstractions", category: "Platform", status: "trial", en: "Measured reuse across products; abstractions are promoted only when repeated product needs prove the boundary.", fa: "استفاده مجدد سنجیده میان محصولات؛ abstraction فقط وقتی تثبیت می‌شود که نیاز تکرارشونده مرز آن را ثابت کند.", route: "/platform/" },

  { name: "Managed cloud services", category: "Cloud", status: "assess", en: "Evaluate portability, operating burden and cost before moving ownership to a managed service.", fa: "ارزیابی portability، بار عملیاتی و هزینه پیش از واگذاری مسئولیت به سرویس مدیریت‌شده.", route: "/cloud/" },
  { name: "Edge deployment", category: "Cloud", status: "assess", en: "Evaluate latency, placement, observability and operational constraints before adopting edge execution.", fa: "ارزیابی latency، محل اجرا، مشاهده‌پذیری و محدودیت عملیاتی پیش از استفاده از edge execution.", route: "/cloud/" },
  { name: "International payment rails", category: "Platform", status: "assess", en: "Future integration options are evaluated against provider contracts, compliance and operational fit.", fa: "گزینه‌های آینده پرداخت بر اساس قرارداد ارائه‌دهنده، الزامات انطباق و تناسب عملیاتی ارزیابی می‌شوند.", route: "/platforms/fox-pay/" },
  { name: "Developer tooling", category: "Operations", status: "assess", en: "Emerging engineering tools are assessed against reproducibility, security and measurable workflow value.", fa: "ابزارهای جدید مهندسی بر اساس تکرارپذیری، امنیت و ارزش قابل سنجش در workflow ارزیابی می‌شوند.", route: "/devops-sre/" },
];

const statuses: Array<{ id: RadarStatus; en: string; fa: string }> = [
  { id: "adopt", en: "Adopt", fa: "تثبیت‌شده" },
  { id: "use", en: "Use when justified", fa: "استفاده هدفمند" },
  { id: "trial", en: "Trial", fa: "آزمایش" },
  { id: "assess", en: "Assess", fa: "ارزیابی" },
];

const categoryFa: Record<RadarEntry["category"], string> = {
  Backend: "Backend",
  Data: "داده",
  Web: "وب",
  Platform: "پلتفرم",
  Operations: "عملیات",
  Cloud: "ابر",
  AI: "هوش مصنوعی",
  Security: "امنیت",
};

const radii: Record<RadarStatus, number> = {
  adopt: 18,
  use: 29,
  trial: 39,
  assess: 47,
};

function statusLabel(status: RadarStatus, fa: boolean) {
  const item = statuses.find((entry) => entry.id === status);
  return item ? (fa ? item.fa : item.en) : status;
}

export default function TechnologyRadar({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(entries.map((entry) => entry.category)))],
    [],
  );
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState<"All" | RadarStatus>("All");
  const [selected, setSelected] = useState(entries[0].name);

  const visible = useMemo(
    () =>
      entries.filter(
        (entry) =>
          (category === "All" || entry.category === category) &&
          (status === "All" || entry.status === status),
      ),
    [category, status],
  );

  const current =
    visible.find((entry) => entry.name === selected) ??
    visible[0] ??
    entries[0];

  const positions = useMemo(() => {
    const result = new Map<string, { left: string; top: string }>();
    statuses.forEach((statusItem, ringIndex) => {
      const ringEntries = entries.filter((entry) => entry.status === statusItem.id);
      ringEntries.forEach((entry, index) => {
        const angle =
          (index / ringEntries.length) * Math.PI * 2 -
          Math.PI / 2 +
          ringIndex * 0.22;
        const radius = radii[statusItem.id];
        result.set(entry.name, {
          left: 50 + Math.cos(angle) * radius + "%",
          top: 50 + Math.sin(angle) * radius + "%",
        });
      });
    });
    return result;
  }, []);

  return (
    <section
      className="radarExperience shell"
      aria-label={fa ? "رادار تعاملی فناوری" : "Interactive Technology Radar"}
    >
      <div className="radarToolbar">
        <div className="radarStatusFilters" role="group" aria-label={fa ? "فیلتر وضعیت" : "Status filter"}>
          <button
            type="button"
            className={status === "All" ? "selected" : ""}
            aria-pressed={status === "All"}
            onClick={() => {
              setStatus("All");
              setSelected(entries[0].name);
            }}
          >
            {fa ? "همه وضعیت‌ها" : "All statuses"}
          </button>
          {statuses.map((item) => (
            <button
              type="button"
              key={item.id}
              className={status === item.id ? "selected" : ""}
              aria-pressed={status === item.id}
              onClick={() => {
                setStatus(item.id);
                const first = entries.find(
                  (entry) =>
                    entry.status === item.id &&
                    (category === "All" || entry.category === category),
                );
                if (first) setSelected(first.name);
              }}
            >
              {fa ? item.fa : item.en}
            </button>
          ))}
        </div>

        <label className="radarCategory">
          <span>{fa ? "حوزه" : "Category"}</span>
          <select
            value={category}
            onChange={(event) => {
              const next = event.target.value;
              setCategory(next);
              const first = entries.find(
                (entry) =>
                  (next === "All" || entry.category === next) &&
                  (status === "All" || entry.status === status),
              );
              if (first) setSelected(first.name);
            }}
          >
            {categories.map((item) => (
              <option value={item} key={item}>
                {item === "All" ? (fa ? "همه حوزه‌ها" : "All categories") : fa ? categoryFa[item as RadarEntry["category"]] : item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="radarLayout">
        <div className="radarPlot" aria-label={fa ? "چهار حلقه تصمیم فناوری" : "Four technology decision rings"}>
          <div className="radarAxis radarAxisHorizontal" aria-hidden="true" />
          <div className="radarAxis radarAxisVertical" aria-hidden="true" />
          {statuses.map((item, index) => (
            <div
              className={"radarRingVisual radarRingVisual-" + item.id}
              key={item.id}
              aria-hidden="true"
            >
              <span>{fa ? item.fa : item.en}</span>
            </div>
          ))}

          {entries.map((entry, index) => {
            const point = positions.get(entry.name)!;
            const isVisible = visible.some((item) => item.name === entry.name);
            const isActive = current.name === entry.name;
            return (
              <button
                type="button"
                key={entry.name}
                className={"radarBlip " + (isActive ? "active " : "") + (!isVisible ? "filtered" : "")}
                style={
                  {
                    left: point.left,
                    top: point.top,
                    "--radar-delay": index * 35 + "ms",
                  } as CSSProperties
                }
                aria-label={entry.name + " — " + statusLabel(entry.status, fa)}
                aria-pressed={isActive}
                tabIndex={isVisible ? 0 : -1}
                onMouseEnter={() => isVisible && setSelected(entry.name)}
                onFocus={() => isVisible && setSelected(entry.name)}
                onClick={() => isVisible && setSelected(entry.name)}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            );
          })}
        </div>

        <aside className="radarSide">
          <div className="radarDetail" aria-live="polite">
            <div className="radarDetailMeta">
              <span>{fa ? categoryFa[current.category] : current.category}</span>
              <b>{statusLabel(current.status, fa)}</b>
            </div>
            <h3>{current.name}</h3>
            <p>{fa ? current.fa : current.en}</p>
            <Link href={current.route}>
              {fa ? "مشاهده زمینه مهندسی" : "Open engineering context"}
              <span aria-hidden="true"> ↗</span>
            </Link>
          </div>

          <div className="radarLegend" aria-label={fa ? "راهنمای وضعیت‌ها" : "Radar status legend"}>
            {statuses.map((item) => (
              <div key={item.id}>
                <i className={"legend-" + item.id} />
                <span>{fa ? item.fa : item.en}</span>
                <b>{visible.filter((entry) => entry.status === item.id).length.toLocaleString(fa ? "fa-IR" : "en-US")}</b>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="radarMobile">
        {statuses.map((item) => {
          const group = visible.filter((entry) => entry.status === item.id);
          if (!group.length) return null;
          return (
            <section key={item.id}>
              <h3>{fa ? item.fa : item.en}</h3>
              <div>
                {group.map((entry) => (
                  <button
                    type="button"
                    key={entry.name}
                    className={current.name === entry.name ? "active" : ""}
                    onClick={() => setSelected(entry.name)}
                  >
                    <span>{entry.name}</span>
                    <small>{fa ? categoryFa[entry.category] : entry.category}</small>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
        <div className="radarMobileDetail">
          <strong>{current.name}</strong>
          <p>{fa ? current.fa : current.en}</p>
          <Link href={current.route}>{fa ? "مشاهده زمینه مهندسی" : "Open engineering context"} ↗</Link>
        </div>
      </div>
    </section>
  );
}
