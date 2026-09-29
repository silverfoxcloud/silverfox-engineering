export type Locale = "en" | "fa";

export const stack = [
  "Go",
  "PostgreSQL",
  "Redis",
  "Apache Kafka",
  "OpenSearch",
  "S3",
  "OpenAPI",
  "AsyncAPI",
  "OpenTelemetry",
  "TypeScript",
  "Next.js",
  "React",
  "Containers",
  "Kubernetes",
  "Cloudflare"
];

export const projects = [
  {
    name: "Silver Fox Admin System", short: "SFAS",
    category: { en: "Experience Platform", fa: "پلتفرم تجربه" },
    status: { en: "Platform engineering", fa: "مهندسی پلتفرم" },
    description: {
      en: "A shared administration and product-experience foundation that standardizes design primitives, reusable application capabilities, accessibility and multilingual interfaces across the ecosystem.",
      fa: "زیرساخت مشترک مدیریت و تجربه محصول در اکوسیستم پردازش ابری روباه نقره‌ای؛ با تمرکز بر سیستم طراحی یکپارچه، قابلیت‌های قابل استفاده مجدد، دسترس‌پذیری و تجربه کاربری چندزبانه."
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
      fa: "لایه کنترل چندمستاجری برای مدیریت لایسنس، سطح دسترسی و مصرف؛ با مرزبندی روشن میان مستأجرها، ثبت رویدادهای قابل ممیزی و یکپارچگی مبتنی بر قراردادهای پایدار."
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
      fa: "لایه ارکستریشن پرداخت برای جدا کردن پیچیدگی درگاه‌ها از محصولات، مسیریابی مبتنی بر سیاست، مدیریت چرخه تراکنش و ایجاد زیرساختی پایدار و قابل ممیزی."
    },
    capabilities: {
      en: ["Provider abstraction", "Policy routing", "Idempotency", "Reconciliation"],
      fa: ["انتزاع درگاه", "مسیریابی سیاست‌محور", "اجرای تکرارناپذیر", "تطبیق تراکنش"]
    }
  },
  {
    name: "ExoTravel", short: "ExoTravel",
    category: { en: "Travel Technology", fa: "فناوری سفر" },
    status: { en: "Product engineering", fa: "مهندسی محصول" },
    description: {
      en: "A travel technology domain built to consume shared platform capabilities while retaining clear ownership of its business model, data contracts and independent product lifecycle.",
      fa: "دامنه‌ای در فناوری سفر که از قابلیت‌های مشترک پلتفرم بهره می‌برد و هم‌زمان مالکیت مستقل مدل کسب‌وکار، قراردادهای داده و چرخه توسعه محصول را حفظ می‌کند."
    },
    capabilities: {
      en: ["Domain ownership", "Platform integration", "API contracts", "Independent lifecycle"],
      fa: ["مالکیت دامنه", "یکپارچگی پلتفرمی", "قراردادهای API", "چرخه مستقل محصول"]
    }
  },
  {
    name: "ExoHub", short: "ExoHub",
    category: { en: "Ecosystem Platform", fa: "پلتفرم اکوسیستم" },
    status: { en: "Product engineering", fa: "مهندسی محصول" },
    description: {
      en: "An ecosystem product designed around composable platform services, shared identity and consistent engineering contracts while preserving bounded product responsibilities.",
      fa: "پلتفرمی برای ترکیب سرویس‌های مشترک اکوسیستم، هویت یکپارچه و قراردادهای فنی منسجم؛ بدون از بین بردن مرز و مسئولیت مستقل هر محصول."
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
    langName: "English", langHref: "/", eyebrow: "مهندسی پردازش ابری روباه نقره‌ای",
    heroTitle: "سیستم‌هایی که برای تغییر طراحی می‌شوند.",
    heroBody: "در Silver Fox، قابلیت‌های مشترک مثل هویت، چندمستاجری، لایسنس، پرداخت و مدیریت یک‌بار و با قراردادهای روشن ساخته می‌شوند. هر محصول در عین استفاده از این زیرساخت، مالک منطق دامنه، داده و چرخه انتشار خود می‌ماند تا تغییر یک بخش، مسیر توسعه بقیه را متوقف نکند.",
    primaryCta: "مشاهده رویکرد مهندسی", secondaryCta: "معماری",
    nav: ["اکوسیستم", "پلتفرم‌ها", "معماری", "فناوری", "امنیت"],
    metrics: [["پلتفرم ابری", "زیرساخت مشترک محصولات"],["هوش مصنوعی", "شتاب‌دهی مهندسی"],["۲۴/۷", "نگاه مبتنی بر قابلیت اتکا"]],
    ecosystemTitle: "اکوسیستمی پلتفرمی با مرزهای روشن.",
    ecosystemBody: "قابلیت‌های مشترک فقط در جایی متمرکز می‌شوند که این تمرکز ارزش واقعی ایجاد کند. هر محصول نیز مالک دامنه، داده و چرخه توسعه خود باقی می‌ماند تا استقلال فنی و سرعت تحول حفظ شود.",
    pillars: [
      ["مهندسی پلتفرم", "هویت، مدیریت، لایسنس، پرداخت و قابلیت‌های مشترک تجربه کاربری به‌عنوان سرویس‌ها و زیرساخت‌های قابل استفاده مجدد طراحی می‌شوند."],
      ["چندمستاجری", "جداسازی مستأجرها، محدوده دسترسی و زمینه هر درخواست از لایه داده تا رابط‌های برنامه‌نویسی و پردازش‌های پس‌زمینه در معماری لحاظ می‌شود."],
      ["استقلال محصول", "هر دامنه مدل داده، منطق کسب‌وکار و چرخه انتشار مستقل خود را حفظ می‌کند و از طریق قراردادهای روشن با سایر بخش‌ها ارتباط می‌گیرد."],
      ["چندزبانه از ابتدا", "بین‌المللی‌سازی، بومی‌سازی، تایپوگرافی و رفتار وابسته به زبان از پایه در محصول طراحی می‌شوند، نه به‌عنوان قابلیتی الحاقی در پایان کار."]
    ],
    projectsTitle: "پلتفرم‌ها و دامنه‌های محصول",
    projectsBody: "نمایی عمومی از بخش‌های اصلی مهندسی که اکوسیستم پردازش ابری روباه نقره‌ای را شکل می‌دهند؛ بدون انتشار جزئیات محرمانه پیاده‌سازی.",
    architectureTitle: "معماری برای تغییر؛ نه فقط برای شروع.",
    architectureBody: "معماری ما تکاملی است: قراردادهای روشن، مرزهای مسئولیت مشخص و سیستم‌هایی که در محیط واقعی قابل اندازه‌گیری‌اند. هر جزء باید بتواند بر اساس شواهد عملیاتی، بدون ایجاد وابستگی پنهان، رشد کند یا تغییر یابد.",
    architecture: [
      ["مرزبندی روشن دامنه‌ها", "مالکیت هر دامنه، داده و مسئولیت آن صریح است. استفاده از زیرساخت مشترک به معنی ادغام منطق کسب‌وکار محصولات نیست."],
      ["یکپارچگی مبتنی بر قرارداد", "رابط‌های برنامه‌نویسی، ساختار داده و قواعد سازگاری نسخه‌بندی می‌شوند تا وابستگی پنهان کاهش یابد و تغییر سرویس‌ها قابل کنترل باشد."],
      ["معماری ابری", "بارهای کاری برای خودکارسازی، جداسازی محیط‌ها، مقیاس‌پذیری، زیرساخت مدیریت‌شده و فرایند استقرار تکرارپذیر طراحی می‌شوند."],
      ["معماری رویدادمحور", "در کنار ارتباط هم‌زمان، هرجا جداسازی سرویس‌ها، تاب‌آوری یا پیشرفت فرایندها سود ببرد از الگوهای ناهم‌زمان و رویدادمحور استفاده می‌شود."],
      ["مالکیت داده", "PostgreSQL منبع اصلی داده‌های تراکنشی است؛ Redis برای کش و هماهنگی کم‌تأخیر به‌کار می‌رود و دسترسی به داده در مرز هر دامنه کنترل می‌شود."],
      ["مهندسی قابلیت اتکا", "مهلت زمانی درخواست، تلاش مجدد، جلوگیری از اجرای تکراری، کنترل فشار، پایش سلامت و کاهش کنترل‌شده سرویس از ابتدا بخشی از رفتار سیستم هستند."]
    ],
    techTitle: "مهندسی مدرن در تمام لایه‌های فناوری",
    techBody: "انتخاب فناوری بر اساس نیاز واقعی سیستم انجام می‌شود. هدف، استفاده از یک مجموعه فناوری مُد روز نیست؛ هدف ساخت پلتفرمی امن، قابل نگهداری، قابل مشاهده و آماده رشد است.",
    technology: [
      ["زیرساخت ابری و لبه شبکه", "زیرساخت مدیریت‌شده، شبکه توزیع محتوا، پردازش در لبه، کنترل ترافیک و دامنه، جداسازی محیط‌ها، ذخیره‌سازی شیء و الگوهای مقیاس‌پذیر تحویل."],
      ["سمت سرور و داده", "Go برای سرویس‌های پرترافیک و یکپارچه‌سازی، PostgreSQL برای داده پایدار رابطه‌ای، Redis برای کش و هماهنگی سریع و قراردادهای روشن برای ارتباط سرویس‌ها."],
      ["وب و تجربه محصول", "TypeScript، React و Next.js در کنار سیستم طراحی قابل استفاده مجدد، دسترس‌پذیری، رابط واکنش‌گرا و تجربه چندزبانه."],
      ["عملیات توسعه و تحویل", "گردش‌کار مبتنی بر Git، اعتبارسنجی خودکار، یکپارچه‌سازی و استقرار پیوسته، ساخت تکرارپذیر، کنترل مرحله استقرار و خودکارسازی زیرساخت."],
      ["مشاهده‌پذیری و قابلیت اتکا", "لاگ ساختاریافته، سنجه‌ها، ردیابی توزیع‌شده، هم‌بستگی رخدادها، هشدارهای قابل اقدام، سنجش ظرفیت و بهبود قابلیت اتکا بر اساس داده واقعی."],
      ["مهندسی هوش مصنوعی", "استفاده از هوش مصنوعی در توسعه، بازبینی و مستندسازی به‌عنوان ابزار افزایش سرعت؛ همراه با مالکیت انسانی، راستی‌آزمایی، کنترل امنیتی و گردش‌کار قابل ممیزی."],
      ["مهندسی رابط‌های برنامه‌نویسی", "قراردادهای نسخه‌بندی‌شده، کنترل نرخ، اعتبارسنجی Webhook، جلوگیری از اجرای تکراری و مرزهای پایدار برای یکپارچگی بلندمدت."],
      ["کارایی و مقیاس", "راهبرد کش، بهینه‌سازی پرس‌وجو، پردازش ناهم‌زمان، پروفایل‌گیری و آزمون بار؛ با اصل اندازه‌گیری پیش از بهینه‌سازی."]
    ],
    standardsTitle: "اصول مهندسی",
    standards: [
      "مالکیت روشن و قرارداد پایدار را به وابستگی ضمنی ترجیح می‌دهیم.",
      "چندزبانه بودن محصول یک قابلیت پایه است، نه لایه‌ای برای ترجمه در پایان پروژه.",
      "کارهای تکرارپذیر را خودکار می‌کنیم و تصمیم‌های نیازمند قضاوت را در اختیار انسان نگه می‌داریم.",
      "سیستم باید آن‌قدر مشاهده‌پذیر باشد که رفتار آن در محیط عملیاتی قابل توضیح باشد.",
      "سازگاری با نسخه‌های پیشین، مهاجرت داده و نسخه‌بندی بخشی از معماری هستند.",
      "آزمون، تحلیل ایستا و یکپارچه‌سازی پیوسته کنترل‌های فرایند تحویل‌اند، نه بررسی‌های انتهای کار.",
      "بهینه‌سازی را بر اساس اندازه‌گیری انجام می‌دهیم و پیچیدگی باید ضرورت خود را اثبات کند.",
      "دانش مهندسی قابل انتشار را عمومی می‌کنیم، بدون افشای اطلاعات حساس یا جزئیات امنیتی قابل سوءاستفاده."
    ],
    securityTitle: "امنیت، ویژگی ذاتی معماری است.",
    securityBody: "امنیت از هویت و مجوزدهی تا جداسازی مستأجرها، مدیریت اطلاعات محرمانه، کنترل زنجیره تأمین نرم‌افزار، تحویل امن، ممیزی‌پذیری، حفاظت از داده و پاسخ عملیاتی ادامه پیدا می‌کند. در این وب‌سایت فقط اصول و قابلیت‌های عمومی منتشر می‌شوند و جزئیات حساس زیرساخت، اعتبارنامه‌ها و روش‌های دفاعی داخلی خصوصی باقی می‌مانند.",
    securityPoints: ["کمترین سطح دسترسی و کنترل نقش‌ها","جداسازی مستأجرها","مدیریت امن اطلاعات محرمانه","ثبت رویدادهای قابل ممیزی","چرخه توسعه امن","کنترل وابستگی‌ها و زنجیره تأمین","کنترل نرخ و مقاومت در برابر سوءاستفاده","رمزنگاری و حفاظت از داده"],
    footer: "Silver Fox Engineering — engineering.silverfoxcloud.com",
    legal: "پرتال عمومی مهندسی اکوسیستم پردازش ابری روباه نقره‌ای."
  }
} as const;
