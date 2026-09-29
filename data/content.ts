export type Locale = "en" | "fa";

export const projects = [
  {
    name: "Silver Fox Admin System", short: "SFAS",
    category: { en: "Experience Platform", fa: "پلتفرم تجربه" },
    status: { en: "Platform engineering", fa: "مهندسی پلتفرم" },
    description: {
      en: "A shared administration and product-experience foundation that standardizes design primitives, reusable application capabilities, accessibility and multilingual interfaces across the ecosystem.",
      fa: "زیرساخت مشترک مدیریت و تجربه محصول که اصول طراحی، قابلیت‌های قابل استفاده مجدد، دسترس‌پذیری و رابط‌های چندزبانه را در سطح اکوسیستم استاندارد می‌کند."
    },
    capabilities: {
      en: ["Design system", "Multilingual UX", "Reusable modules", "Accessibility"],
      fa: ["سیستم طراحی", "تجربه چندزبانه", "ماژول‌های مشترک", "دسترس‌پذیری"]
    }
  },
  {
    name: "Silver Fox License Platform", short: "License",
    category: { en: "Cloud Control Plane", fa: "لایه کنترل ابری" },
    status: { en: "Platform engineering", fa: "مهندسی پلتفرم" },
    description: {
      en: "A multi-tenant control plane for product licensing, entitlements and usage governance, designed around explicit tenancy boundaries, auditable state and contract-driven integrations.",
      fa: "لایه کنترل چندمستاجری برای لایسنس، دسترسی‌ها و حاکمیت مصرف که بر مرزهای شفاف مستأجرها، وضعیت قابل ممیزی و یکپارچگی مبتنی بر قرارداد طراحی شده است."
    },
    capabilities: {
      en: ["Multi-tenancy", "Entitlements", "Usage governance", "Auditability"],
      fa: ["چندمستاجری", "مدیریت دسترسی", "حاکمیت مصرف", "ممیزی‌پذیری"]
    }
  },
  {
    name: "Fox Pay", short: "Pay",
    category: { en: "Payment Infrastructure", fa: "زیرساخت پرداخت" },
    status: { en: "Platform engineering", fa: "مهندسی پلتفرم" },
    description: {
      en: "A payment orchestration layer built to isolate provider complexity behind stable contracts, support policy-driven routing, and provide a reliable foundation for transaction workflows.",
      fa: "لایه ارکستریشن پرداخت که پیچیدگی ارائه‌دهندگان را پشت قراردادهای پایدار جدا می‌کند، از مسیریابی مبتنی بر سیاست پشتیبانی می‌کند و پایه‌ای قابل اتکا برای جریان‌های تراکنشی می‌سازد."
    },
    capabilities: {
      en: ["Provider abstraction", "Policy routing", "Idempotency", "Reconciliation"],
      fa: ["انتزاع ارائه‌دهنده", "مسیریابی سیاست‌محور", "Idempotency", "تطبیق تراکنش"]
    }
  },
  {
    name: "ExoTravel", short: "ExoTravel",
    category: { en: "Travel Technology", fa: "فناوری سفر" },
    status: { en: "Product engineering", fa: "مهندسی محصول" },
    description: {
      en: "A travel technology domain built to consume shared platform capabilities while retaining clear ownership of its business model, data contracts and independent product lifecycle.",
      fa: "دامنه‌ای در فناوری سفر که از قابلیت‌های مشترک پلتفرم استفاده می‌کند و در عین حال مالکیت روشن مدل کسب‌وکار، قراردادهای داده و چرخه مستقل محصول را حفظ می‌کند."
    },
    capabilities: {
      en: ["Domain ownership", "Platform integration", "API contracts", "Independent lifecycle"],
      fa: ["مالکیت دامنه", "یکپارچگی پلتفرمی", "قراردادهای API", "چرخه مستقل"]
    }
  },
  {
    name: "ExoHub", short: "ExoHub",
    category: { en: "Ecosystem Platform", fa: "پلتفرم اکوسیستم" },
    status: { en: "Product engineering", fa: "مهندسی محصول" },
    description: {
      en: "An ecosystem product designed around composable platform services, shared identity and consistent engineering contracts while preserving bounded product responsibilities.",
      fa: "محصولی در اکوسیستم که بر سرویس‌های پلتفرمی ترکیب‌پذیر، هویت مشترک و قراردادهای مهندسی یکپارچه تکیه دارد و مسئولیت‌های مرزبندی‌شده محصول را حفظ می‌کند."
    },
    capabilities: {
      en: ["Composable services", "Shared identity", "Platform contracts", "Modular architecture"],
      fa: ["سرویس‌های ترکیب‌پذیر", "هویت مشترک", "قراردادهای پلتفرمی", "معماری ماژولار"]
    }
  }
];

export const copy = {
  en: {
    langName: "فارسی", langHref: "/fa/", eyebrow: "SILVER FOX ENGINEERING",
    heroTitle: "Engineering systems built to evolve.",
    heroBody: "Silver Fox engineers a connected technology ecosystem across cloud platforms, product infrastructure, payments, licensing and digital experiences. We focus on clear boundaries, secure defaults, operational visibility and architectures that can evolve without turning shared infrastructure into shared complexity.",
    primaryCta: "Explore engineering", secondaryCta: "Architecture",
    nav: ["Ecosystem", "Platforms", "Architecture", "Technology", "Security"],
    metrics: [["Cloud", "Platform-first architecture"],["AI", "Engineering acceleration"],["24/7", "Reliability mindset"]],
    ecosystemTitle: "A platform ecosystem with explicit boundaries.",
    ecosystemBody: "Shared capabilities are engineered once where centralization creates leverage. Product domains remain autonomous where ownership, release velocity and data boundaries matter.",
    pillars: [
      ["Platform Engineering", "Identity, administration, licensing, payments and common experience capabilities are treated as reusable platform concerns with stable contracts."],
      ["Multi-tenancy", "Tenant context, isolation and authorization boundaries are architectural concerns across data access, APIs, background processing and operational tooling."],
      ["Product Autonomy", "Bounded contexts preserve independent domain models, APIs, data ownership and delivery lifecycles while integrating through explicit contracts."],
      ["Multilingual by Design", "Internationalization, localization, typography, content direction and locale-aware behavior are designed into product foundations from the start."]
    ],
    projectsTitle: "Platforms & product domains",
    projectsBody: "Selected public views of the engineering domains that make up the Silver Fox ecosystem.",
    architectureTitle: "Architecture for change, not just launch.",
    architectureBody: "We favor evolutionary architecture: clear contracts today, measurable systems in production, and room to split, scale or replace components as real operational evidence demands.",
    architecture: [
      ["Bounded architecture", "Domain boundaries, ownership and data responsibility are explicit. Shared infrastructure does not imply shared business logic."],
      ["Contract-first integration", "Versioned APIs, schemas and compatibility rules reduce hidden coupling and make service evolution deliberate."],
      ["Cloud-native foundations", "Workloads are designed for automation, horizontal evolution, environment isolation, managed infrastructure and repeatable delivery."],
      ["Event-aware systems", "Synchronous APIs are complemented by asynchronous patterns where decoupling, resilience and workflow progression benefit from events."],
      ["Data ownership", "PostgreSQL-backed transactional domains, Redis-assisted caching and carefully scoped data access keep consistency decisions close to domain ownership."],
      ["Reliability engineering", "Timeouts, retries, idempotency, backpressure, health signals and graceful degradation are designed as system behavior rather than incident patches."]
    ],
    techTitle: "Modern engineering across the stack",
    techBody: "Technology choices follow system constraints. The goal is not a fashionable stack; it is a maintainable, observable and secure platform that can evolve.",
    technology: [
      ["Cloud & Edge", "Cloud-managed infrastructure, CDN and edge capabilities, DNS and traffic controls, environment separation, object storage and scalable delivery patterns."],
      ["Backend & Data", "Go for service-oriented workloads, PostgreSQL for durable relational state, Redis for low-latency coordination and caching, and explicit API contracts."],
      ["Web & Experience", "Modern TypeScript and React/Next.js foundations, reusable design systems, accessibility, responsive interfaces and multilingual product experiences."],
      ["DevOps & Delivery", "Git-based workflows, automated validation, CI/CD, reproducible builds, deployment gates, infrastructure automation and progressive operational discipline."],
      ["Observability & SRE", "Structured logs, metrics, traces, correlation, service-level thinking, actionable alerts, capacity awareness and evidence-driven reliability work."],
      ["AI Engineering", "AI-assisted development, review and documentation are treated as engineering accelerators with human ownership, verification, security controls and auditable workflows."],
      ["API Engineering", "RESTful contracts, versioning, idempotency, rate controls, webhook verification and integration boundaries designed for long-lived interoperability."],
      ["Performance", "Caching strategy, query discipline, asynchronous work, profiling, load awareness and measurement before optimization."]
    ],
    standardsTitle: "Engineering principles",
    standards: [
      "Prefer explicit ownership and stable contracts over implicit coupling.",
      "Design multilingual products as a core capability, not a translation layer.",
      "Automate repeatable engineering work and keep human review where judgment matters.",
      "Make systems observable enough to explain behavior in production.",
      "Treat backward compatibility, migrations and versioning as architecture work.",
      "Use tests, static analysis and CI as delivery controls rather than end-stage checks.",
      "Optimize from measured evidence and preserve simplicity until complexity earns its place.",
      "Publish useful engineering ideas without exposing sensitive implementation details."
    ],
    securityTitle: "Security is an engineering property.",
    securityBody: "Security spans identity, authorization, tenant isolation, secrets management, supply-chain controls, secure delivery, auditability, data protection and operational response. Public documentation describes principles and capabilities; sensitive topology, credentials, defensive implementation details and internal procedures remain private.",
    securityPoints: ["Least privilege & RBAC","Tenant isolation","Secrets hygiene","Audit trails","Secure SDLC","Dependency & supply-chain controls","Rate limiting & abuse resistance","Encryption & data protection"],
    footer: "Silver Fox Engineering — engineering.silverfoxcloud.com",
    legal: "Public engineering portal for the Silver Fox ecosystem."
  },
  fa: {
    langName: "English", langHref: "/", eyebrow: "مهندسی SILVER FOX",
    heroTitle: "مهندسی سیستم‌هایی که برای تکامل ساخته می‌شوند.",
    heroBody: "Silver Fox یک اکوسیستم فناوری متصل را در حوزه پلتفرم‌های ابری، زیرساخت محصول، پرداخت، لایسنس و تجربه‌های دیجیتال مهندسی می‌کند. تمرکز ما بر مرزهای روشن، امنیت پیش‌فرض، مشاهده‌پذیری عملیاتی و معماری‌هایی است که بدون تبدیل زیرساخت مشترک به پیچیدگی مشترک، قابلیت تکامل داشته باشند.",
    primaryCta: "مشاهده مهندسی", secondaryCta: "معماری",
    nav: ["اکوسیستم", "پلتفرم‌ها", "معماری", "فناوری", "امنیت"],
    metrics: [["Cloud", "معماری پلتفرم‌محور"],["AI", "شتاب‌دهی مهندسی"],["۲۴/۷", "نگاه مبتنی بر قابلیت اتکا"]],
    ecosystemTitle: "اکوسیستم پلتفرمی با مرزهای روشن.",
    ecosystemBody: "قابلیت‌های مشترک در جایی متمرکز می‌شوند که این تمرکز ارزش ایجاد کند؛ دامنه‌های محصول نیز در جایی که مالکیت، سرعت انتشار و مرزهای داده اهمیت دارند، استقلال خود را حفظ می‌کنند.",
    pillars: [
      ["مهندسی پلتفرم", "هویت، مدیریت، لایسنس، پرداخت و قابلیت‌های مشترک تجربه به‌عنوان دغدغه‌های پلتفرمی با قراردادهای پایدار مهندسی می‌شوند."],
      ["چندمستاجری", "زمینه مستأجر، ایزوله‌سازی و مرزهای مجوزدهی در دسترسی داده، APIها، پردازش‌های پس‌زمینه و ابزارهای عملیاتی بخشی از معماری هستند."],
      ["استقلال محصول", "Bounded Contextها مدل دامنه، API، مالکیت داده و چرخه تحویل مستقل را حفظ می‌کنند و از طریق قراردادهای صریح یکپارچه می‌شوند."],
      ["چندزبانه از ابتدا", "بین‌المللی‌سازی، بومی‌سازی، تایپوگرافی، جهت محتوا و رفتار وابسته به Locale از ابتدا در پایه محصول طراحی می‌شوند."]
    ],
    projectsTitle: "پلتفرم‌ها و دامنه‌های محصول",
    projectsBody: "نمایی عمومی و انتخاب‌شده از دامنه‌های مهندسی تشکیل‌دهنده اکوسیستم Silver Fox.",
    architectureTitle: "معماری برای تغییر، نه فقط شروع.",
    architectureBody: "رویکرد ما معماری تکاملی است: قراردادهای روشن امروز، سیستم‌های قابل اندازه‌گیری در محیط واقعی و امکان تفکیک، مقیاس‌دهی یا جایگزینی اجزا بر اساس شواهد عملیاتی.",
    architecture: [
      ["معماری مرزبندی‌شده", "مرز دامنه، مالکیت و مسئولیت داده صریح است؛ زیرساخت مشترک به معنی منطق کسب‌وکار مشترک نیست."],
      ["یکپارچگی Contract-first", "APIها، Schemaها و قواعد سازگاری نسخه‌بندی‌شده، coupling پنهان را کاهش می‌دهند و تکامل سرویس را کنترل‌پذیر می‌کنند."],
      ["پایه Cloud-native", "Workloadها برای اتوماسیون، تکامل افقی، جداسازی محیط‌ها، زیرساخت مدیریت‌شده و تحویل تکرارپذیر طراحی می‌شوند."],
      ["سیستم‌های Event-aware", "در کنار APIهای هم‌زمان، جایی که decoupling، تاب‌آوری و پیشرفت workflow سود می‌برد از الگوهای ناهم‌زمان استفاده می‌شود."],
      ["مالکیت داده", "دامنه‌های تراکنشی مبتنی بر PostgreSQL، کش و هماهنگی با Redis و دسترسی محدود به داده، تصمیم‌های سازگاری را نزدیک مالک دامنه نگه می‌دارند."],
      ["مهندسی قابلیت اتکا", "Timeout، Retry، Idempotency، Backpressure، Health Signal و Graceful Degradation رفتار طراحی‌شده سیستم هستند، نه وصله‌های پس از رخداد."]
    ],
    techTitle: "مهندسی مدرن در تمام لایه‌ها",
    techBody: "انتخاب فناوری از محدودیت‌ها و نیازهای سیستم پیروی می‌کند. هدف یک Stack مُد روز نیست؛ هدف پلتفرمی نگهداشت‌پذیر، مشاهده‌پذیر، امن و قابل تکامل است.",
    technology: [
      ["Cloud و Edge", "زیرساخت مدیریت‌شده ابری، CDN و قابلیت‌های Edge، کنترل DNS و ترافیک، جداسازی محیط‌ها، Object Storage و الگوهای مقیاس‌پذیر تحویل."],
      ["Backend و Data", "Go برای workloadهای سرویس‌محور، PostgreSQL برای وضعیت رابطه‌ای پایدار، Redis برای هماهنگی کم‌تأخیر و کش و قراردادهای صریح API."],
      ["Web و Experience", "پایه‌های مدرن TypeScript و React/Next.js، سیستم طراحی قابل استفاده مجدد، دسترس‌پذیری، رابط واکنش‌گرا و تجربه محصول چندزبانه."],
      ["DevOps و Delivery", "جریان‌های Git-based، اعتبارسنجی خودکار، CI/CD، Build تکرارپذیر، Deployment Gate، اتوماسیون زیرساخت و انضباط عملیاتی."],
      ["Observability و SRE", "لاگ ساختاریافته، Metric، Trace، Correlation، تفکر سطح سرویس، Alert قابل اقدام، آگاهی ظرفیت و بهبود قابلیت اتکا بر اساس شواهد."],
      ["مهندسی AI", "توسعه، بازبینی و مستندسازی با کمک AI به‌عنوان شتاب‌دهنده مهندسی، همراه با مالکیت انسانی، راستی‌آزمایی، کنترل امنیتی و workflow قابل ممیزی."],
      ["مهندسی API", "قراردادهای RESTful، نسخه‌بندی، Idempotency، کنترل نرخ، اعتبارسنجی Webhook و مرزهای یکپارچگی برای تعامل‌پذیری بلندمدت."],
      ["Performance", "راهبرد کش، انضباط Query، پردازش ناهم‌زمان، Profiling، آگاهی از بار و اندازه‌گیری پیش از بهینه‌سازی."]
    ],
    standardsTitle: "اصول مهندسی",
    standards: [
      "مالکیت صریح و قرارداد پایدار را به coupling ضمنی ترجیح می‌دهیم.",
      "محصول چندزبانه یک قابلیت پایه است، نه لایه‌ای که بعداً ترجمه شود.",
      "کارهای مهندسی تکرارپذیر را خودکار می‌کنیم و قضاوت‌های مهم را در مالکیت انسان نگه می‌داریم.",
      "سیستم باید آن‌قدر مشاهده‌پذیر باشد که رفتار آن در Production قابل توضیح باشد.",
      "Backward Compatibility، Migration و Versioning بخشی از کار معماری هستند.",
      "Test، تحلیل ایستا و CI کنترل‌های فرایند تحویل‌اند، نه بررسی‌های انتهای کار.",
      "بهینه‌سازی بر اساس اندازه‌گیری انجام می‌شود و پیچیدگی باید ضرورت خود را اثبات کند.",
      "دانش مهندسی مفید را عمومی می‌کنیم، بدون افشای جزئیات حساس پیاده‌سازی."
    ],
    securityTitle: "امنیت یک ویژگی مهندسی سیستم است.",
    securityBody: "امنیت از هویت و مجوزدهی تا ایزوله‌سازی مستأجر، مدیریت Secret، کنترل زنجیره تأمین، تحویل امن، ممیزی‌پذیری، حفاظت داده و پاسخ عملیاتی امتداد دارد. مستندات عمومی اصول و قابلیت‌ها را توضیح می‌دهند؛ توپولوژی حساس، Credentialها، جزئیات دفاعی و رویه‌های داخلی خصوصی باقی می‌مانند.",
    securityPoints: ["کمترین سطح دسترسی و RBAC","ایزوله‌سازی مستأجر","مدیریت امن Secret","Audit Trail","Secure SDLC","کنترل وابستگی و زنجیره تأمین","Rate Limiting و مقاومت در برابر سوءاستفاده","رمزنگاری و حفاظت داده"],
    footer: "Silver Fox Engineering — engineering.silverfoxcloud.com",
    legal: "پرتال عمومی مهندسی اکوسیستم Silver Fox."
  }
} as const;
