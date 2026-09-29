import type { Locale } from "./content";

export type PackageSlug =
  | "sfas-foundation"
  | "sfas-core"
  | "sfas-html-adapter"
  | "sfas-react-adapter"
  | "sfas-jalali"
  | "sfas-datatable"
  | "sfas-date-picker";

export type PackageRecord = {
  slug: PackageSlug;
  name: string;
  displayName: string;
  version: string;
  channel: "next";
  lifecycle: "Prerelease";
  registry: "GitHub Packages";
  registryVisibility: "Private";
  publishedAt: "2026-09-29";
  owner: "SFAS";
  ecosystem: "TypeScript";
  description: Record<Locale, string>;
  overview: Record<Locale, string>;
  capabilities: Record<Locale, string[]>;
  compatibility: Record<Locale, string[]>;
  dependencies: string[];
  install: string;
};

const common = {
  version: "0.2.0-alpha.12",
  channel: "next",
  lifecycle: "Prerelease",
  registry: "GitHub Packages",
  registryVisibility: "Private",
  publishedAt: "2026-09-29",
  owner: "SFAS",
  ecosystem: "TypeScript",
} as const;

export const packages: PackageRecord[] = [
  {
    ...common,
    slug: "sfas-foundation",
    name: "@silverfoxcloud/sfas-foundation",
    displayName: "SFAS Foundation",
    description: {
      en: "Shared foundation primitives for Silver Fox administration surfaces, including CSS exports and the base RTL/LTR, typography and theme layer.",
      fa: "لایه پایه مشترک برای رابط‌های مدیریتی Silver Fox؛ شامل خروجی CSS و زیرساخت جهت، تایپوگرافی و تم برای RTL و LTR.",
    },
    overview: {
      en: "The Foundation package is the lowest presentation layer in SFAS. It exposes shared CSS and TypeScript primitives used by higher-level adapters without owning product business logic.",
      fa: "Foundation پایین‌ترین لایه ارائه در SFAS است. این پکیج پایه‌های مشترک CSS و TypeScript را برای آداپترهای بالاتر فراهم می‌کند و وارد منطق کسب‌وکار محصول نمی‌شود.",
    },
    capabilities: {
      en: ["Shared CSS export", "RTL/LTR foundation", "Theme primitives", "Typography and formatting utilities"],
      fa: ["خروجی CSS مشترک", "پایه RTL/LTR", "زیرساخت تم", "ابزارهای تایپوگرافی و قالب‌بندی"],
    },
    compatibility: {
      en: ["SFAS workspace baseline: Node.js 20+", "Designed as a dependency for the SFAS package family"],
      fa: ["خط پایه workspace در SFAS: Node.js 20+", "طراحی‌شده به‌عنوان زیرساخت خانواده پکیج‌های SFAS"],
    },
    dependencies: [],
    install: "npm install @silverfoxcloud/sfas-foundation@0.2.0-alpha.12",
  },
  {
    ...common,
    slug: "sfas-core",
    name: "@silverfoxcloud/sfas-core",
    displayName: "SFAS Core",
    description: {
      en: "Framework-independent runtime for locale and direction, theme state, shell state and shared SFAS contracts.",
      fa: "هسته مستقل از فریم‌ورک برای locale و جهت، وضعیت تم، shell و قراردادهای مشترک SFAS.",
    },
    overview: {
      en: "SFAS Core owns canonical runtime state without depending on a product framework. Locale/direction, theme and shell controllers are kept here so adapters consume one shared contract.",
      fa: "SFAS Core وضعیت canonical زمان اجرا را بدون وابستگی به فریم‌ورک محصول مدیریت می‌کند. کنترل‌کننده‌های locale/جهت، تم و shell در این لایه متمرکزند تا آداپترها یک قرارداد مشترک مصرف کنند.",
    },
    capabilities: {
      en: ["SFLocaleController", "SFThemeController", "SFShellController", "Shared runtime contracts"],
      fa: ["SFLocaleController", "SFThemeController", "SFShellController", "قراردادهای مشترک زمان اجرا"],
    },
    compatibility: {
      en: ["Framework-independent", "ES module package", "SFAS workspace baseline: Node.js 20+"],
      fa: ["مستقل از فریم‌ورک", "پکیج ES module", "خط پایه workspace در SFAS: Node.js 20+"],
    },
    dependencies: [],
    install: "npm install @silverfoxcloud/sfas-core@0.2.0-alpha.12",
  },
  {
    ...common,
    slug: "sfas-html-adapter",
    name: "@silverfoxcloud/sfas-html-adapter",
    displayName: "SFAS HTML Adapter",
    description: {
      en: "Vanilla HTML/CSS/JS adapter for SFAS bootstrap, runtime direction switching, theme state and approved Metronic/KTUI integration.",
      fa: "آداپتر Vanilla HTML/CSS/JS برای راه‌اندازی SFAS، تغییر جهت در زمان اجرا، مدیریت تم و یکپارچگی کنترل‌شده با Metronic/KTUI.",
    },
    overview: {
      en: "The HTML Adapter brings shared SFAS behavior to products that do not use React. It initializes the canonical shell and can bridge to the licensed host Metronic/KTUI runtime when that runtime is present.",
      fa: "HTML Adapter رفتار مشترک SFAS را به محصولاتی می‌آورد که React ندارند. این لایه shell canonical را راه‌اندازی می‌کند و در صورت وجود runtime لایسنس‌شده میزبان، به Metronic/KTUI متصل می‌شود.",
    },
    capabilities: {
      en: ["Bootstrap and disposal contract", "Runtime RTL/LTR switching", "Light/Dark/System theme bootstrap", "Licensed host-runtime bridge"],
      fa: ["قرارداد راه‌اندازی و disposal", "تغییر RTL/LTR در زمان اجرا", "راه‌اندازی تم Light/Dark/System", "پل به runtime لایسنس‌شده میزبان"],
    },
    compatibility: {
      en: ["Vanilla HTML/CSS/JavaScript products", "Requires @silverfoxcloud/sfas-core 0.2.0-alpha.12"],
      fa: ["محصولات Vanilla HTML/CSS/JavaScript", "وابسته به @silverfoxcloud/sfas-core نسخه 0.2.0-alpha.12"],
    },
    dependencies: ["@silverfoxcloud/sfas-core"],
    install: "npm install @silverfoxcloud/sfas-html-adapter@0.2.0-alpha.12",
  },
  {
    ...common,
    slug: "sfas-react-adapter",
    name: "@silverfoxcloud/sfas-react-adapter",
    displayName: "SFAS React Adapter",
    description: {
      en: "React lifecycle bridge for SFAS controllers, provider state and reusable capability integration.",
      fa: "پل lifecycle برای React جهت استفاده از کنترل‌کننده‌ها، provider state و قابلیت‌های قابل استفاده مجدد SFAS.",
    },
    overview: {
      en: "The React Adapter exposes SFAS through a React-safe provider and disposable controller lifecycle. It supports runtime locale/theme switching while keeping direction driven by shared Core state.",
      fa: "React Adapter، SFAS را از طریق provider سازگار با React و lifecycle کنترل‌کننده‌های disposable ارائه می‌کند. تغییر locale و تم در زمان اجرا انجام می‌شود و جهت همچنان از وضعیت مشترک Core پیروی می‌کند.",
    },
    capabilities: {
      en: ["SFASProvider", "useSFLocale", "useSFTheme", "Disposable controller bridge"],
      fa: ["SFASProvider", "useSFLocale", "useSFTheme", "پل کنترل‌کننده‌های disposable"],
    },
    compatibility: {
      en: ["React 18.3+ or React 19.x", "Verified against React 19.3", "Requires SFAS Core and HTML Adapter 0.2.0-alpha.12"],
      fa: ["React 18.3+ یا React 19.x", "اعتبارسنجی‌شده با React 19.3", "وابسته به SFAS Core و HTML Adapter نسخه 0.2.0-alpha.12"],
    },
    dependencies: ["@silverfoxcloud/sfas-core", "@silverfoxcloud/sfas-html-adapter"],
    install: "npm install @silverfoxcloud/sfas-react-adapter@0.2.0-alpha.12",
  },
  {
    ...common,
    slug: "sfas-jalali",
    name: "@silverfoxcloud/sfas-jalali",
    displayName: "SFAS Jalali",
    description: {
      en: "Dependency-free Gregorian/Jalali date-only conversion engine with explicit canonical date contracts.",
      fa: "موتور بدون وابستگی برای تبدیل date-only میان Gregorian و Jalali با قرارداد صریح برای مقدار canonical.",
    },
    overview: {
      en: "The Jalali package centralizes Gregorian/Jalali date-only conversion. Product and API values remain canonical Gregorian YYYY-MM-DD unless a domain contract explicitly says otherwise.",
      fa: "این پکیج تبدیل date-only میان Gregorian و Jalali را در یک نقطه متمرکز می‌کند. مقدار محصول و API به‌صورت canonical در قالب Gregorian YYYY-MM-DD باقی می‌ماند مگر قرارداد دامنه صراحتاً خلاف آن را تعیین کند.",
    },
    capabilities: {
      en: ["Gregorian → Jalali conversion", "Jalali → Gregorian conversion", "Validation and round-trip coverage", "No runtime dependencies"],
      fa: ["تبدیل Gregorian به Jalali", "تبدیل Jalali به Gregorian", "اعتبارسنجی و آزمون round-trip", "بدون وابستگی زمان اجرا"],
    },
    compatibility: {
      en: ["Date-only values", "Explicit Gregorian canonical storage contract", "Does not reinterpret date-time/instant values"],
      fa: ["مقادیر date-only", "قرارداد ذخیره canonical بر پایه Gregorian", "مقادیر date-time/instant را به‌عنوان date-only بازتفسیر نمی‌کند"],
    },
    dependencies: [],
    install: "npm install @silverfoxcloud/sfas-jalali@0.2.0-alpha.12",
  },
  {
    ...common,
    slug: "sfas-datatable",
    name: "@silverfoxcloud/sfas-datatable",
    displayName: "SFAS DataTable",
    description: {
      en: "SFAS capability bridge for the approved KTDataTable runtime, keeping product code behind one shared contract.",
      fa: "پل قابلیت DataTable در SFAS برای runtime تأییدشده KTDataTable؛ با هدف نگه‌داشتن کد محصول پشت یک قرارداد مشترک.",
    },
    overview: {
      en: "Products consume this package rather than importing KTUI DataTable behavior directly. The current baseline covers remote data, pagination, state namespaces, search, filters, redraw and checked-row access.",
      fa: "محصولات به‌جای استفاده مستقیم از رفتار DataTable در KTUI این پکیج را مصرف می‌کنند. خط پایه فعلی داده remote، صفحه‌بندی، state namespace، جست‌وجو، فیلتر، redraw و دسترسی به ردیف‌های انتخاب‌شده را پوشش می‌دهد.",
    },
    capabilities: {
      en: ["Remote apiEndpoint", "Pagination and state namespace", "Search/filter/redraw", "Checked-row access"],
      fa: ["apiEndpoint برای داده remote", "صفحه‌بندی و state namespace", "جست‌وجو، فیلتر و redraw", "دسترسی به ردیف‌های انتخاب‌شده"],
    },
    compatibility: {
      en: ["Approved Metronic/KTUI KTDataTable baseline", "Requires @silverfoxcloud/sfas-core 0.2.0-alpha.12"],
      fa: ["خط پایه تأییدشده KTDataTable در Metronic/KTUI", "وابسته به @silverfoxcloud/sfas-core نسخه 0.2.0-alpha.12"],
    },
    dependencies: ["@silverfoxcloud/sfas-core"],
    install: "npm install @silverfoxcloud/sfas-datatable@0.2.0-alpha.12",
  },
  {
    ...common,
    slug: "sfas-date-picker",
    name: "@silverfoxcloud/sfas-date-picker",
    displayName: "SFAS Date Picker",
    description: {
      en: "Date-selection capability with an approved Gregorian bridge and an SFAS-native accessible Jalali calendar.",
      fa: "قابلیت انتخاب تاریخ با bridge تأییدشده Gregorian و تقویم Jalali بومی SFAS با دسترس‌پذیری داخلی.",
    },
    overview: {
      en: "The package exposes two presentation paths: a Gregorian bridge over the approved KTDatePicker runtime and a native Jalali month-grid controller. Both keep canonical product/backend date-only values in Gregorian YYYY-MM-DD.",
      fa: "این پکیج دو مسیر ارائه دارد: bridge تقویم Gregorian روی runtime تأییدشده KTDatePicker و کنترل‌کننده بومی Jalali با month-grid. هر دو، مقدار canonical محصول و backend را در قالب Gregorian YYYY-MM-DD نگه می‌دارند.",
    },
    capabilities: {
      en: ["Gregorian runtime bridge", "Native Jalali month grid", "Keyboard navigation", "Accessible grid semantics"],
      fa: ["bridge برای runtime Gregorian", "month-grid بومی Jalali", "ناوبری صفحه‌کلید", "semanticهای دسترس‌پذیر grid"],
    },
    compatibility: {
      en: ["RTL/LTR keyboard behavior", "Persian and English labels", "Requires @silverfoxcloud/sfas-jalali 0.2.0-alpha.12"],
      fa: ["رفتار صفحه‌کلید سازگار با RTL/LTR", "برچسب فارسی و انگلیسی", "وابسته به @silverfoxcloud/sfas-jalali نسخه 0.2.0-alpha.12"],
    },
    dependencies: ["@silverfoxcloud/sfas-jalali"],
    install: "npm install @silverfoxcloud/sfas-date-picker@0.2.0-alpha.12",
  },
];

export const packageSlugs = packages.map((pkg) => pkg.slug);

export function getPackage(slug: string) {
  return packages.find((pkg) => pkg.slug === slug);
}
