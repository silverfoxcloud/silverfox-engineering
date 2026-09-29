export type Locale = "en" | "fa";

export const projects = [
  {
    name: "Silver Fox Admin System",
    short: "SFAS",
    category: { en: "Core Platform", fa: "پلتفرم هسته" },
    status: { en: "Active development", fa: "در حال توسعه فعال" },
    description: {
      en: "A shared administration and design-system layer for Silver Fox products, providing a stable UI foundation, reusable capabilities, and first-class RTL/LTR support.",
      fa: "لایه مشترک مدیریت و سیستم طراحی برای محصولات Silver Fox که زیرساخت رابط کاربری پایدار، قابلیت‌های قابل استفاده مجدد و پشتیبانی هم‌سطح RTL/LTR را فراهم می‌کند."
    },
    capabilities: {
      en: ["Shared admin shell", "Design tokens & components", "RTL / LTR", "Light / Dark / System"],
      fa: ["پوسته مدیریتی مشترک", "توکن‌ها و کامپوننت‌های طراحی", "RTL / LTR", "حالت روشن / تاریک / سیستم"]
    }
  },
  {
    name: "Silver Fox License Platform",
    short: "License",
    category: { en: "SaaS Infrastructure", fa: "زیرساخت SaaS" },
    status: { en: "Active development", fa: "در حال توسعه فعال" },
    description: {
      en: "A multi-tenant cloud licensing platform for Silver Fox products and external commercial customers, separating subscriptions, entitlements, licenses, usage and billing.",
      fa: "پلتفرم لایسنس ابری چندمستاجری برای محصولات Silver Fox و مشتریان تجاری خارجی که اشتراک، دسترسی‌ها، مجوزها، مصرف و صورتحساب را از یکدیگر تفکیک می‌کند."
    },
    capabilities: {
      en: ["Entitlements", "Usage metering", "RBAC & audit", "Billing-ready"],
      fa: ["مدیریت Entitlement", "اندازه‌گیری مصرف", "RBAC و ممیزی", "آماده برای صورتحساب"]
    }
  },
  {
    name: "Fox Pay",
    short: "Pay",
    category: { en: "Payment Infrastructure", fa: "زیرساخت پرداخت" },
    status: { en: "Active development", fa: "در حال توسعه فعال" },
    description: {
      en: "A Silver Fox payment infrastructure product designed for SaaS and BYOM scenarios, with provider orchestration, independent organizations/projects and licensing integration.",
      fa: "محصول زیرساخت پرداخت Silver Fox برای سناریوهای SaaS و BYOM با ارکستریشن ارائه‌دهندگان پرداخت، سازمان‌ها و پروژه‌های مستقل و اتصال به پلتفرم لایسنس."
    },
    capabilities: {
      en: ["Provider orchestration", "Project isolation", "Payment routing", "License integration"],
      fa: ["ارکستریشن درگاه‌ها", "ایزوله‌سازی پروژه‌ها", "مسیریابی پرداخت", "یکپارچگی با لایسنس"]
    }
  },
  {
    name: "ExoTravel",
    short: "ExoTravel",
    category: { en: "Travel Technology", fa: "فناوری سفر" },
    status: { en: "Development", fa: "در حال توسعه" },
    description: {
      en: "A travel technology product within the Silver Fox ecosystem, designed to consume shared platform services while keeping its own business domain, data model and APIs.",
      fa: "محصول فناوری سفر در اکوسیستم Silver Fox که از سرویس‌های مشترک پلتفرم استفاده می‌کند و در عین حال دامنه کسب‌وکار، مدل داده و APIهای مستقل خود را حفظ می‌کند."
    },
    capabilities: {
      en: ["Travel workflows", "Shared platform integration", "Independent domain model", "Private repository"],
      fa: ["فرایندهای سفر", "یکپارچگی با پلتفرم مشترک", "مدل دامنه مستقل", "مخزن خصوصی"]
    }
  },
  {
    name: "ExoHub",
    short: "ExoHub",
    category: { en: "Platform Product", fa: "محصول پلتفرمی" },
    status: { en: "Development", fa: "در حال توسعه" },
    description: {
      en: "A Silver Fox ecosystem product designed to participate in the shared platform architecture and consume common identity, administration, licensing and payment capabilities.",
      fa: "محصولی از اکوسیستم Silver Fox که در معماری مشترک پلتفرم قرار می‌گیرد و از قابلیت‌های هویت، مدیریت، لایسنس و پرداخت مشترک استفاده می‌کند."
    },
    capabilities: {
      en: ["Shared identity", "SFAS integration", "Licensing", "Payment-ready"],
      fa: ["هویت مشترک", "یکپارچگی با SFAS", "لایسنس", "آماده برای پرداخت"]
    }
  },
  {
    name: "Lilium Travel",
    short: "Lilium",
    category: { en: "Travel Product", fa: "محصول سفر" },
    status: { en: "Development", fa: "در حال توسعه" },
    description: {
      en: "A travel product in the Silver Fox ecosystem with a dedicated customer journey, booking and payment flows, and integration with shared Silver Fox infrastructure.",
      fa: "محصول سفر در اکوسیستم Silver Fox با مسیر کاربری اختصاصی، فرایندهای رزرو و پرداخت و اتصال به زیرساخت‌های مشترک Silver Fox."
    },
    capabilities: {
      en: ["Booking journey", "Customer account", "Payments", "Shared platform services"],
      fa: ["مسیر رزرو", "حساب کاربری مشتری", "پرداخت", "سرویس‌های مشترک پلتفرم"]
    }
  }
];

export const copy = {
  en: {
    langName: "فارسی",
    langHref: "/fa/",
    eyebrow: "SILVER FOX ENGINEERING",
    heroTitle: "Building a connected digital ecosystem.",
    heroBody:
      "Silver Fox develops interoperable products across platform infrastructure, payments, licensing, administration and travel technology. This portal explains what we build, how the pieces fit together, and the engineering principles behind them.",
    primaryCta: "Explore projects",
    secondaryCta: "Architecture",
    nav: ["Ecosystem", "Projects", "Architecture", "Standards", "Security"],
    metrics: [
      ["6", "Ecosystem products"],
      ["2", "Languages by design"],
      ["1", "Shared platform philosophy"]
    ],
    ecosystemTitle: "One ecosystem, independent products.",
    ecosystemBody:
      "Each product owns its business domain and data while shared platform capabilities reduce duplication and establish consistent engineering standards.",
    pillars: [
      ["Shared Experience", "SFAS provides a common administration and design-system foundation without forcing products to share business logic."],
      ["Shared Infrastructure", "Licensing, payments, identity and platform services are designed as reusable capabilities across the ecosystem."],
      ["Product Autonomy", "Products keep independent domain models, databases, APIs and release lifecycles where required."],
      ["Bilingual by Default", "English/LTR and Persian/RTL are first-class concerns in architecture, components, quality assurance and localization."]
    ],
    projectsTitle: "Projects & platforms",
    projectsBody: "Public overviews of products currently being built within the Silver Fox ecosystem.",
    architectureTitle: "Architecture principles",
    architectureBody:
      "The ecosystem favors explicit boundaries, versioned shared contracts and cloud-managed platform services.",
    architecture: [
      ["Platform over copy-paste", "Shared capabilities are consumed as stable platform services or versioned packages rather than duplicated across products."],
      ["Contract-driven integration", "Products integrate through documented APIs, entitlements and stable interfaces while preserving internal boundaries."],
      ["Cloud-first operation", "Core commercial platforms are designed for Silver Fox-managed cloud operation, with tenant isolation and dedicated resources where appropriate."],
      ["Security by design", "RBAC, auditability, environment separation, idempotency and least-privilege principles are treated as platform concerns."]
    ],
    standardsTitle: "Engineering standards",
    standards: [
      "RTL and LTR are first-class and equivalent.",
      "Persian and English experiences are designed together, not retrofitted.",
      "Shared UI capabilities are centralized and versioned.",
      "Technical values that must remain LTR are isolated intentionally.",
      "Public documentation exposes architecture intent without exposing secrets or sensitive operational details.",
      "Product repositories may remain private while public engineering information is curated here."
    ],
    securityTitle: "Public by design. Private where necessary.",
    securityBody:
      "This portal publishes product purpose, public architecture concepts, engineering standards and selected roadmap context. Source code, secrets, credentials, sensitive schemas, internal infrastructure details and non-public security implementation remain private.",
    footer: "Silver Fox Engineering — engineering.silverfoxcloud.com",
    legal: "Engineering portal for the Silver Fox ecosystem."
  },
  fa: {
    langName: "English",
    langHref: "/",
    eyebrow: "مهندسی SILVER FOX",
    heroTitle: "ساخت یک اکوسیستم دیجیتال یکپارچه.",
    heroBody:
      "Silver Fox مجموعه‌ای از محصولات سازگار و متصل را در حوزه زیرساخت پلتفرم، پرداخت، لایسنس، مدیریت و فناوری سفر توسعه می‌دهد. این پرتال توضیح می‌دهد چه می‌سازیم، اجزا چگونه به هم متصل می‌شوند و اصول مهندسی پشت آن‌ها چیست.",
    primaryCta: "مشاهده پروژه‌ها",
    secondaryCta: "معماری",
    nav: ["اکوسیستم", "پروژه‌ها", "معماری", "استانداردها", "امنیت"],
    metrics: [
      ["۶", "محصول در اکوسیستم"],
      ["۲", "زبان از ابتدا در طراحی"],
      ["۱", "فلسفه مشترک پلتفرم"]
    ],
    ecosystemTitle: "یک اکوسیستم، محصولات مستقل.",
    ecosystemBody:
      "هر محصول مالک دامنه کسب‌وکار و داده‌های خود است، در حالی که قابلیت‌های مشترک پلتفرم از تکرار جلوگیری کرده و استانداردهای مهندسی یکسانی ایجاد می‌کنند.",
    pillars: [
      ["تجربه مشترک", "SFAS زیرساخت مشترک مدیریت و سیستم طراحی را فراهم می‌کند، بدون آن‌که منطق کسب‌وکار محصولات را با هم ادغام کند."],
      ["زیرساخت مشترک", "لایسنس، پرداخت، هویت و سرویس‌های پلتفرمی به‌عنوان قابلیت‌های قابل استفاده مجدد در اکوسیستم طراحی می‌شوند."],
      ["استقلال محصول", "هر محصول در صورت نیاز مدل دامنه، دیتابیس، API و چرخه انتشار مستقل خود را حفظ می‌کند."],
      ["دو‌زبانه از ابتدا", "انگلیسی/LTR و فارسی/RTL در معماری، کامپوننت‌ها، QA و بومی‌سازی هم‌سطح و first-class هستند."]
    ],
    projectsTitle: "پروژه‌ها و پلتفرم‌ها",
    projectsBody: "معرفی عمومی محصولاتی که در حال حاضر در اکوسیستم Silver Fox توسعه داده می‌شوند.",
    architectureTitle: "اصول معماری",
    architectureBody:
      "اکوسیستم بر مرزبندی شفاف، قراردادهای مشترک نسخه‌بندی‌شده و سرویس‌های پلتفرمی مدیریت‌شده در Cloud تکیه دارد.",
    architecture: [
      ["پلتفرم به‌جای کپی", "قابلیت‌های مشترک به‌صورت سرویس‌های پایدار یا پکیج‌های نسخه‌بندی‌شده مصرف می‌شوند و میان محصولات کپی نمی‌شوند."],
      ["یکپارچگی مبتنی بر قرارداد", "محصولات از طریق APIها، entitlementها و رابط‌های پایدار و مستند با یکدیگر متصل می‌شوند و مرزهای داخلی خود را حفظ می‌کنند."],
      ["عملیات Cloud-first", "پلتفرم‌های تجاری اصلی برای اجرای Cloud تحت مدیریت Silver Fox و ایزوله‌سازی tenantها طراحی می‌شوند."],
      ["امنیت در طراحی", "RBAC، ممیزی، جداسازی محیط‌ها، idempotency و اصل کمترین سطح دسترسی از دغدغه‌های اصلی پلتفرم هستند."]
    ],
    standardsTitle: "استانداردهای مهندسی",
    standards: [
      "RTL و LTR هم‌سطح و first-class هستند.",
      "تجربه فارسی و انگلیسی هم‌زمان طراحی می‌شوند، نه به‌صورت الحاقی.",
      "قابلیت‌های مشترک رابط کاربری متمرکز و نسخه‌بندی می‌شوند.",
      "مقادیر فنی که باید LTR باقی بمانند به‌صورت هدفمند ایزوله می‌شوند.",
      "مستندات عمومی هدف معماری را نمایش می‌دهند، بدون افشای اطلاعات حساس.",
      "مخازن محصولات می‌توانند خصوصی بمانند و فقط اطلاعات مهندسی انتخاب‌شده در این پرتال عمومی شوند."
    ],
    securityTitle: "عمومی در جای درست؛ خصوصی در جای لازم.",
    securityBody:
      "این پرتال هدف محصولات، مفاهیم عمومی معماری، استانداردهای مهندسی و بخش‌های انتخاب‌شده‌ای از مسیر توسعه را منتشر می‌کند. سورس‌کد، Secretها، Credentialها، Schemaهای حساس، جزئیات زیرساخت داخلی و پیاده‌سازی‌های غیرعمومی امنیتی خصوصی باقی می‌مانند.",
    footer: "Silver Fox Engineering — engineering.silverfoxcloud.com",
    legal: "پرتال مهندسی اکوسیستم Silver Fox."
  }
} as const;
