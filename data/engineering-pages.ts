import type { Locale } from "./content";

export const engineeringSlugs = [
  "architecture",
  "platform",
  "cloud",
  "security",
  "ai",
  "devops-sre",
  "data",
  "technology-radar",
] as const;

export type EngineeringSlug = typeof engineeringSlugs[number];

type PageSection = {
  title: string;
  body: string;
  bullets?: string[];
};

type PageCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  summary: string;
  visual: string;
  sections: PageSection[];
  closingTitle: string;
  closingBody: string;
};

export const engineeringPages: Record<EngineeringSlug, Record<Locale, PageCopy>> = {
  architecture: {
    en: {
      eyebrow: "SYSTEM ARCHITECTURE",
      title: "Architecture that keeps change affordable.",
      lead: "Silver Fox is designed as a connected ecosystem of bounded products and shared platform capabilities. The goal is simple: reuse what should be common without coupling everything that needs to move independently.",
      summary: "Clear ownership, contract-first integration, evolutionary boundaries and measurable systems give teams room to change architecture when evidence—not fashion—justifies it.",
      visual: "/visual-platform.svg",
      sections: [
        { title: "Bounded by responsibility", body: "Business domains own their models, data and lifecycle. Shared infrastructure does not become shared business logic.", bullets: ["Explicit domain ownership", "Independent release paths", "No duplicate platform capabilities"] },
        { title: "Contracts before coupling", body: "APIs and event contracts define how systems meet. Public APIs are versioned; asynchronous flows use explicit schemas and idempotent consumers.", bullets: ["OpenAPI for synchronous contracts", "AsyncAPI for event contracts", "Problem Details for consistent API errors"] },
        { title: "Modular first, distributed when earned", body: "A service is extracted when scale, isolation, runtime suitability or operational ownership creates a real reason—not to make a diagram look more modern." },
        { title: "Evolution is a feature", body: "Architecture decisions leave room for migration, backward compatibility and measured decomposition. A component can be split or replaced without rewriting the ecosystem." }
      ],
      closingTitle: "Good architecture protects options.",
      closingBody: "The system should be easy to understand today and still leave a credible path to tomorrow."
    },
    fa: {
      eyebrow: "معماری سیستم",
      title: "معماری‌ای که هزینه تغییر را پایین نگه می‌دارد.",
      lead: "در پردازش ابری روباه نقره‌ای، محصولات به هم متصل‌اند اما در هم حل نمی‌شوند. قابلیت‌هایی که باید مشترک باشند یک‌بار در لایه پلتفرم ساخته می‌شوند و هر دامنه‌ای که به استقلال نیاز دارد، مالک داده، منطق و چرخه توسعه خودش باقی می‌ماند.",
      summary: "مرزهای روشن، قراردادهای پایدار و سیستم‌های قابل اندازه‌گیری کمک می‌کنند معماری بر اساس نیاز واقعی تغییر کند؛ نه بر اساس موج بعدی فناوری.",
      visual: "/visual-platform.svg",
      sections: [
        { title: "هر دامنه، یک مسئولیت روشن", body: "مدل داده، منطق کسب‌وکار و چرخه توسعه هر دامنه صاحب مشخص دارد. زیرساخت مشترک به معنی منطق مشترک نیست.", bullets: ["مالکیت روشن دامنه", "انتشار مستقل", "پرهیز از ساخت قابلیت‌های تکراری"] },
        { title: "قرارداد پیش از وابستگی", body: "رابط‌های برنامه‌نویسی و رویدادها مرز ارتباط سیستم‌ها هستند. قراردادها نسخه‌بندی می‌شوند تا تغییر یک بخش، بخش‌های دیگر را غافلگیر نکند.", bullets: ["OpenAPI برای رابط‌های هم‌زمان", "AsyncAPI برای رویدادها", "الگوی خطای یکپارچه برای API"] },
        { title: "ماژولار تا وقتی توزیع‌شدن لازم شود", body: "یک سرویس زمانی جدا می‌شود که مقیاس، ایزوله‌سازی، نوع بار کاری یا مالکیت عملیاتی واقعاً آن را توجیه کند؛ نه برای پر کردن نمودار معماری." },
        { title: "تغییر، بخشی از طراحی است", body: "سازگاری با نسخه‌های قبلی، مهاجرت داده و مسیر تفکیک اجزا از ابتدا در نظر گرفته می‌شوند تا رشد سیستم نیازمند بازنویسی کامل نباشد." }
      ],
      closingTitle: "معماری خوب، حق انتخاب آینده را حفظ می‌کند.",
      closingBody: "سیستم امروز باید ساده و قابل فهم باشد و برای فردا هم مسیر قابل اتکایی برای رشد داشته باشد."
    }
  },
  platform: {
    en: {
      eyebrow: "PLATFORM ENGINEERING",
      title: "Build common capabilities once. Let products move faster.",
      lead: "Identity, tenancy, administration, licensing, payments and shared product experience form a platform layer that reduces duplicated engineering across Silver Fox.",
      summary: "The platform is not a central monolith. It is a set of reusable capabilities with explicit contracts and product-owned boundaries.",
      visual: "/visual-platform.svg",
      sections: [
        { title: "Multi-tenancy by design", body: "Tenant context and isolation are carried through authorization, data access, background jobs and operational tooling—not simulated by a filter in the interface." },
        { title: "Identity and access as a platform concern", body: "Membership, roles, permissions, environment context and audit evidence are designed consistently so product teams do not reinvent access control." },
        { title: "Shared experience without shared business logic", body: "SFAS standardizes product administration, design primitives, accessibility and multilingual foundations while domain rules stay with each product." },
        { title: "Commercial infrastructure as reusable services", body: "Licensing and payment capabilities are consumed as platform services, reducing provider-specific and policy-specific logic inside product codebases." }
      ],
      closingTitle: "Platform engineering should remove repeated work.",
      closingBody: "The measure is not how much is centralized; it is how much product complexity disappears without creating a new bottleneck."
    },
    fa: {
      eyebrow: "مهندسی پلتفرم",
      title: "قابلیت‌های مشترک را یک‌بار می‌سازیم تا محصولات سریع‌تر جلو بروند.",
      lead: "هویت، چندمستاجری، مدیریت، لایسنس، پرداخت و تجربه‌های مشترک محصول در یک لایه پلتفرمی قرار می‌گیرند تا هر تیم مجبور نباشد همان مسئله را از صفر حل کند.",
      summary: "این لایه یک نرم‌افزار مرکزی و سنگین نیست؛ مجموعه‌ای از قابلیت‌های قابل استفاده مجدد است که با قراردادهای روشن در اختیار محصولات قرار می‌گیرد.",
      visual: "/visual-platform.svg",
      sections: [
        { title: "چندمستاجری از پایه", body: "زمینه هر مستأجر از مجوزدهی و دسترسی داده تا کارهای پس‌زمینه و ابزارهای عملیاتی همراه درخواست باقی می‌ماند؛ امنیت با فیلتر ظاهری پیاده نمی‌شود." },
        { title: "هویت و دسترسی، مسئله‌ای مشترک", body: "عضویت، نقش، سطح دسترسی، محیط اجرایی و رویدادهای قابل ممیزی با یک منطق هماهنگ طراحی می‌شوند تا هر محصول سامانه دسترسی جداگانه‌ای نسازد." },
        { title: "تجربه مشترک، منطق مستقل", body: "SFAS پایه مدیریت، سیستم طراحی، دسترس‌پذیری و تجربه چندزبانه را یکپارچه می‌کند؛ اما قوانین هر محصول در همان دامنه باقی می‌مانند." },
        { title: "زیرساخت تجاری قابل استفاده مجدد", body: "لایسنس و پرداخت به شکل سرویس‌های پلتفرمی مصرف می‌شوند تا پیچیدگی درگاه‌ها، سیاست‌ها و چرخه‌های تجاری وارد کد هر محصول نشود." }
      ],
      closingTitle: "کار پلتفرم، حذف تکرار است.",
      closingBody: "موفقیت پلتفرم با میزان تمرکز سنجیده نمی‌شود؛ با مقدار پیچیدگی‌ای سنجیده می‌شود که از مسیر ساخت محصول کنار می‌رود."
    }
  },
  cloud: {
    en: {
      eyebrow: "CLOUD & INFRASTRUCTURE",
      title: "Infrastructure that can be repeated, observed and changed.",
      lead: "Silver Fox treats infrastructure as product engineering: environments, delivery, edge controls, storage, compute and operational telemetry are designed as one lifecycle.",
      summary: "Cloud-native means automation and operational clarity—not moving complexity to somebody else's server.",
      visual: "/visual-cloud.svg",
      sections: [
        { title: "Environment isolation", body: "Development, staging, sandbox and production can carry independent credentials, limits, endpoints and policies." },
        { title: "Containers with a reason", body: "Linux and containers are the baseline. Kubernetes is introduced when orchestration, scale or operational ownership justifies its cost." },
        { title: "Edge and traffic control", body: "CDN, DNS, WAF and edge capabilities protect and accelerate ingress while application services keep explicit internal boundaries." },
        { title: "Repeatable operations", body: "Builds, configuration, deployment and recovery are designed to be reproducible, reviewable and increasingly automated." }
      ],
      closingTitle: "Cloud is an operating model.",
      closingBody: "The value comes from repeatability, elasticity and visibility—not from the label on the infrastructure."
    },
    fa: {
      eyebrow: "زیرساخت و پردازش ابری",
      title: "زیرساختی که بتوان آن را تکرار کرد، دید و با اطمینان تغییر داد.",
      lead: "در پردازش ابری روباه نقره‌ای زیرساخت از توسعه محصول جدا نیست. محیط‌های اجرایی، فرایند تحویل، کنترل ترافیک، ذخیره‌سازی، توان پردازشی و داده‌های عملیاتی در یک چرخه مهندسی دیده می‌شوند.",
      summary: "ابری بودن برای ما یعنی خودکارسازی و شفافیت عملیاتی؛ نه فقط انتقال پیچیدگی به یک سرور دیگر.",
      visual: "/visual-cloud.svg",
      sections: [
        { title: "جداسازی محیط‌ها", body: "توسعه، آزمایش، محیط نمایشی و محیط عملیاتی می‌توانند اعتبارنامه، محدودیت، نشانی و سیاست مستقل خود را داشته باشند." },
        { title: "کانتینر، وقتی دلیل دارد", body: "لینوکس و کانتینر پایه مناسبی برای اجرا هستند. Kubernetes زمانی وارد معماری می‌شود که مقیاس یا نیاز عملیاتی، هزینه و پیچیدگی آن را توجیه کند." },
        { title: "کنترل ترافیک در لبه شبکه", body: "شبکه توزیع محتوا، DNS، دیواره آتش وب و قابلیت‌های لبه، ورودی سامانه را امن‌تر و سریع‌تر می‌کنند؛ بدون مخلوط‌کردن مرزهای داخلی سرویس‌ها." },
        { title: "عملیات تکرارپذیر", body: "ساخت، پیکربندی، استقرار و بازیابی باید تا حد ممکن قابل تکرار، قابل بازبینی و خودکار باشند." }
      ],
      closingTitle: "ابر، بیشتر از یک محل اجراست.",
      closingBody: "ارزش اصلی در تکرارپذیری، مقیاس‌پذیری و دید عملیاتی است؛ نه در برچسبی که روی زیرساخت می‌زنیم."
    }
  },
  security: {
    en: {
      eyebrow: "SECURITY ENGINEERING",
      title: "Security starts inside the architecture.",
      lead: "Identity, authorization, tenant isolation, secret handling, audit evidence and secure delivery are built into platform behavior rather than added as perimeter controls.",
      summary: "Public pages explain principles and capabilities. Sensitive defensive detail, topology and credentials stay private.",
      visual: "/visual-security.svg",
      sections: [
        { title: "Least privilege", body: "Roles, permissions, scopes and application context are explicit and verified at trusted boundaries." },
        { title: "Tenant isolation", body: "Cross-tenant access is denied through application boundaries and database controls where appropriate." },
        { title: "Secure software lifecycle", body: "Dependency controls, static checks, tests, review gates and deployment controls make security part of delivery." },
        { title: "Auditability", body: "Sensitive actions produce durable evidence so security and operational decisions can be reconstructed later." }
      ],
      closingTitle: "Security is behavior, not branding.",
      closingBody: "A secure system is one whose boundaries keep working when the happy path ends."
    },
    fa: {
      eyebrow: "مهندسی امنیت",
      title: "امنیت از درون معماری آغاز می‌شود.",
      lead: "هویت، مجوزدهی، جداسازی مستأجرها، مدیریت اطلاعات محرمانه، ثبت رویدادهای قابل ممیزی و تحویل امن از ابتدا در رفتار پلتفرم طراحی می‌شوند؛ نه اینکه در پایان پروژه به مرز شبکه اضافه شوند.",
      summary: "در این وب‌سایت اصول و قابلیت‌های عمومی را توضیح می‌دهیم. توپولوژی حساس، اعتبارنامه‌ها و جزئیات دفاعی که انتشارشان ریسک ایجاد می‌کند خصوصی می‌مانند.",
      visual: "/visual-security.svg",
      sections: [
        { title: "کمترین سطح دسترسی", body: "نقش‌ها، مجوزها، محدوده دسترسی و زمینه برنامه به‌صورت صریح تعریف و در مرزهای قابل اعتماد بررسی می‌شوند." },
        { title: "جداسازی مستأجرها", body: "دسترسی میان مستأجرها در لایه برنامه و هرجا لازم باشد در پایگاه داده محدود می‌شود؛ جداسازی یک قابلیت رابط کاربری نیست." },
        { title: "چرخه توسعه امن", body: "کنترل وابستگی‌ها، تحلیل ایستا، آزمون، بازبینی و دروازه‌های استقرار، امنیت را وارد فرایند تحویل نرم‌افزار می‌کنند." },
        { title: "ممیزی‌پذیری", body: "عملیات حساس باید ردپای ماندگار و قابل پیگیری داشته باشند تا تصمیم‌های امنیتی و عملیاتی بعداً قابل بازسازی باشند." }
      ],
      closingTitle: "امنیت یک ادعا نیست؛ رفتار قابل سنجش سیستم است.",
      closingBody: "مرزهای واقعی زمانی ارزش دارند که خارج از مسیر عادی هم درست کار کنند."
    }
  },
  ai: {
    en: {
      eyebrow: "AI ENGINEERING",
      title: "Use artificial intelligence to accelerate engineering, not to outsource ownership.",
      lead: "AI assists implementation, review, documentation and analysis across Silver Fox. Human engineers remain responsible for architecture, acceptance and operational consequences.",
      summary: "AI workflows are most useful when they are traceable, testable and bounded by the same engineering controls as human-authored changes.",
      visual: "/visual-ai.svg",
      sections: [
        { title: "Human-owned decisions", body: "Architecture, security and commercial behavior remain accountable to named human owners." },
        { title: "Validation before acceptance", body: "Generated changes still pass through source control, tests, static checks, review and deployment gates." },
        { title: "Provider-neutral metering", body: "Where AI becomes a metered product capability, usage is modeled independently from any single provider or model." },
        { title: "Cost and usage clarity", body: "Raw usage, provider cost and customer price are separated so economics remain auditable." }
      ],
      closingTitle: "Speed is useful when trust survives it.",
      closingBody: "The engineering advantage is not generating more code. It is shortening the path from intent to verified result."
    },
    fa: {
      eyebrow: "مهندسی هوش مصنوعی",
      title: "هوش مصنوعی سرعت می‌دهد؛ مسئولیت مهندسی را واگذار نمی‌کند.",
      lead: "در پردازش ابری روباه نقره‌ای از هوش مصنوعی برای توسعه، بازبینی، مستندسازی و تحلیل استفاده می‌شود. تصمیم معماری، پذیرش تغییر و پیامد عملیاتی همچنان در مالکیت انسان باقی می‌ماند.",
      summary: "گردش‌کار هوش مصنوعی زمانی ارزشمند است که مانند هر تغییر مهندسی دیگری قابل ردیابی، قابل آزمون و تحت کنترل باشد.",
      visual: "/visual-ai.svg",
      sections: [
        { title: "تصمیم با مالک مشخص", body: "معماری، امنیت و رفتار تجاری سامانه به تصمیم‌گیر انسانی مشخص وابسته می‌ماند." },
        { title: "تأیید پیش از پذیرش", body: "تغییر تولیدشده با هوش مصنوعی هم از کنترل نسخه، آزمون، تحلیل ایستا، بازبینی و دروازه استقرار عبور می‌کند." },
        { title: "اندازه‌گیری مستقل از ارائه‌دهنده", body: "هرجا هوش مصنوعی به قابلیت قابل اندازه‌گیری محصول تبدیل شود، مصرف به یک مدل یا شرکت خاص گره نمی‌خورد." },
        { title: "شفافیت مصرف و هزینه", body: "مصرف خام، هزینه ارائه‌دهنده و مبلغ مشتری از هم جدا نگه داشته می‌شوند تا تحلیل مالی و سودآوری قابل ممیزی باشد." }
      ],
      closingTitle: "سرعت وقتی ارزش دارد که اعتماد حفظ شود.",
      closingBody: "مزیت اصلی، تولید کد بیشتر نیست؛ کوتاه‌کردن مسیر میان ایده و نتیجه‌ای است که واقعاً بررسی شده است."
    }
  },
  "devops-sre": {
    en: {
      eyebrow: "DEVOPS & SRE",
      title: "Delivery and reliability are one engineering loop.",
      lead: "A change is not complete when it compiles. It must be deployable, observable, reversible where possible and supported by signals that explain behavior in production.",
      summary: "CI/CD, operational telemetry and reliability practices turn software delivery into a controlled feedback loop.",
      visual: "/visual-cloud.svg",
      sections: [
        { title: "Continuous validation", body: "Tests, security checks, builds and repository hygiene are automated early so drift is caught before deployment." },
        { title: "Observable services", body: "Structured logs, metrics, distributed traces and correlation identifiers provide context across requests and workers." },
        { title: "Reliability patterns", body: "Timeouts, retries, backpressure, health signals, circuit breaking and graceful degradation are designed deliberately." },
        { title: "Service-level thinking", body: "Availability, latency, error rates, queue depth and delivery success are treated as product signals, not just infrastructure counters." }
      ],
      closingTitle: "You cannot operate what you cannot explain.",
      closingBody: "Reliability grows from fast feedback, useful signals and repeatable response."
    },
    fa: {
      eyebrow: "دواپس و قابلیت اتکا",
      title: "تحویل نرم‌افزار و قابلیت اتکا، یک چرخه مهندسی‌اند.",
      lead: "تغییر زمانی تمام نمی‌شود که کد بدون خطا ساخته شود. باید بتوان آن را با اطمینان مستقر کرد، رفتار آن را دید، در صورت نیاز مسیر بازگشت داشت و با داده واقعی فهمید در محیط عملیاتی چه اتفاقی افتاده است.",
      summary: "یکپارچه‌سازی و استقرار پیوسته، مشاهده‌پذیری و مهندسی قابلیت اتکا، فرایند تحویل را به یک چرخه بازخورد کنترل‌شده تبدیل می‌کنند.",
      visual: "/visual-cloud.svg",
      sections: [
        { title: "اعتبارسنجی پیوسته", body: "آزمون، بررسی امنیتی، ساخت و کنترل سلامت مخزن تا جای ممکن خودکار می‌شوند تا انحراف پیش از استقرار دیده شود." },
        { title: "سرویس‌های قابل مشاهده", body: "لاگ ساختاریافته، سنجه، ردیابی توزیع‌شده و شناسه هم‌بستگی کمک می‌کنند مسیر یک درخواست در سرویس و کارگر پس‌زمینه قابل دنبال‌کردن باشد." },
        { title: "الگوهای قابلیت اتکا", body: "مهلت زمانی، تلاش مجدد، کنترل فشار، پایش سلامت، قطع‌کننده مدار و کاهش کنترل‌شده سرویس از قبل طراحی می‌شوند." },
        { title: "نگاه سطح سرویس", body: "دسترس‌پذیری، تأخیر، نرخ خطا، عمق صف و موفقیت تحویل بخشی از کیفیت محصول‌اند؛ نه فقط عددهای پنل زیرساخت." }
      ],
      closingTitle: "چیزی را که نمی‌توان توضیح داد، نمی‌توان با اطمینان اداره کرد.",
      closingBody: "قابلیت اتکا از بازخورد سریع، نشانه‌های درست و واکنش تکرارپذیر ساخته می‌شود."
    }
  },
  data: {
    en: {
      eyebrow: "DATA ENGINEERING",
      title: "Keep the source of truth clear.",
      lead: "Transactional state, cache, search and event projections serve different jobs. Silver Fox keeps those responsibilities explicit so speed does not quietly become ambiguity.",
      summary: "PostgreSQL is the transactional source of truth in core domains; Redis, search and event projections accelerate specific access patterns without becoming accidental authorities.",
      visual: "/visual-platform.svg",
      sections: [
        { title: "Relational state first", body: "Core business data favors explicit relational models, constraints and transactional integrity. Flexible fields do not replace domain design." },
        { title: "Historical integrity", body: "Important business facts use immutable events, effective dates, versions or decision snapshots rather than silent overwrite." },
        { title: "Cache is not truth", body: "Redis improves latency and coordination, but authoritative decisions remain grounded in durable state." },
        { title: "Events carry change", body: "Outbox-based publishing keeps business mutations and event intent aligned before downstream consumers build projections." }
      ],
      closingTitle: "Fast data is useful. Trusted data is essential.",
      closingBody: "Performance layers can change; the meaning and ownership of business state must stay clear."
    },
    fa: {
      eyebrow: "مهندسی داده",
      title: "منبع حقیقت باید همیشه روشن بماند.",
      lead: "داده تراکنشی، کش، جست‌وجو و نمای رویداد هرکدام کار متفاوتی دارند. در پردازش ابری روباه نقره‌ای این مرزها عمداً جدا نگه داشته می‌شوند تا افزایش سرعت، به ابهام در مالکیت داده تبدیل نشود.",
      summary: "در دامنه‌های اصلی، PostgreSQL منبع حقیقت تراکنشی است. Redis و لایه‌های جست‌وجو یا نمای رویداد برای سرعت و الگوی دسترسی خاص استفاده می‌شوند، نه برای جایگزینی حقیقت اصلی.",
      visual: "/visual-platform.svg",
      sections: [
        { title: "داده رابطه‌ای، پایه کار", body: "داده‌های اصلی کسب‌وکار با مدل رابطه‌ای، محدودیت‌های روشن و تراکنش‌های قابل اتکا نگهداری می‌شوند. فیلدهای انعطاف‌پذیر جای طراحی دامنه را نمی‌گیرند." },
        { title: "حفظ تاریخچه", body: "واقعیت‌های مهم تجاری با رویداد تغییرناپذیر، تاریخ اثرگذاری، نسخه یا تصویر تصمیم نگهداری می‌شوند و بی‌صدا بازنویسی نمی‌شوند." },
        { title: "کش، منبع حقیقت نیست", body: "Redis تأخیر را کم می‌کند و هماهنگی را سریع‌تر می‌سازد؛ اما تصمیم معتبر باید به داده پایدار تکیه کند." },
        { title: "رویداد، تغییر را منتقل می‌کند", body: "الگوی Outbox کمک می‌کند تغییر کسب‌وکار و قصد انتشار رویداد در یک تراکنش هماهنگ بمانند و مصرف‌کننده‌های بعدی نمای خود را با اطمینان بسازند." }
      ],
      closingTitle: "داده سریع مفید است؛ داده قابل اعتماد ضروری است.",
      closingBody: "لایه‌های کارایی می‌توانند تغییر کنند، اما معنی و مالکیت داده کسب‌وکار باید روشن بماند."
    }
  },
  "technology-radar": {
    en: {
      eyebrow: "TECHNOLOGY RADAR",
      title: "Use technology deliberately.",
      lead: "The Silver Fox radar is not a popularity chart. It describes technologies and practices by the role they currently play in our engineering approach.",
      summary: "Adopted technologies solve active problems today. Trial items are evaluated in bounded contexts. Assess items are monitored before they earn production responsibility.",
      visual: "/visual-ai.svg",
      sections: [
        { title: "Adopt", body: "Go, PostgreSQL, Redis, TypeScript, React/Next.js, OpenAPI, structured CI/CD and security-focused source control practices are established parts of the stack." },
        { title: "Use When Justified", body: "Kafka, OpenSearch, OpenTelemetry, S3-compatible object storage and container orchestration are used when their operational role is clear." },
        { title: "Trial", body: "AI-assisted engineering workflows, advanced policy automation and new platform abstractions are introduced behind measurable goals and review gates." },
        { title: "Assess continuously", body: "Managed cloud services, edge capabilities, international payment rails and emerging developer tooling are evaluated against portability, security and operational cost." }
      ],
      closingTitle: "Modern is not the same as useful.",
      closingBody: "A technology earns its place by reducing risk, increasing leverage or making the system easier to operate."
    },
    fa: {
      eyebrow: "رادار فناوری",
      title: "فناوری را آگاهانه انتخاب می‌کنیم.",
      lead: "رادار فناوری پردازش ابری روباه نقره‌ای جدول محبوبیت ابزارها نیست. نشان می‌دهد هر فناوری یا روش، امروز چه نقشی در رویکرد مهندسی ما دارد و با چه سطحی از تعهد استفاده می‌شود.",
      summary: "فناوری‌های تثبیت‌شده مسئله واقعی امروز را حل می‌کنند. گزینه‌های آزمایشی در محدوده مشخص سنجیده می‌شوند و فناوری‌های در حال بررسی پیش از گرفتن مسئولیت عملیاتی، باید ارزش خود را نشان دهند.",
      visual: "/visual-ai.svg",
      sections: [
        { title: "استفاده تثبیت‌شده", body: "Go، PostgreSQL، Redis، TypeScript، React/Next.js، OpenAPI، فرایندهای یکپارچه‌سازی و استقرار پیوسته و کنترل‌های امنیتی مخزن، بخشی از پایه فعلی هستند." },
        { title: "استفاده در صورت نیاز", body: "Kafka، OpenSearch، OpenTelemetry، ذخیره‌سازی سازگار با S3 و ارکستریشن کانتینر زمانی استفاده می‌شوند که نقش عملیاتی مشخصی داشته باشند." },
        { title: "آزمایش", body: "گردش‌کارهای توسعه با کمک هوش مصنوعی، خودکارسازی سیاست‌ها و انتزاع‌های تازه پلتفرمی در محدوده مشخص و با معیار قابل اندازه‌گیری آزمایش می‌شوند." },
        { title: "بررسی پیوسته", body: "سرویس‌های مدیریت‌شده ابری، قابلیت‌های لبه، مسیرهای پرداخت بین‌المللی و ابزارهای تازه توسعه با معیارهایی مثل امنیت، قابلیت جابه‌جایی و هزینه عملیاتی ارزیابی می‌شوند." }
      ],
      closingTitle: "جدید بودن، دلیل کافی برای مفید بودن نیست.",
      closingBody: "هر فناوری باید ریسک را کم کند، اهرم بیشتری بسازد یا اداره سیستم را ساده‌تر کند."
    }
  }
};

export const platformSlugs = ["sfas", "license-platform", "fox-pay", "exotravel", "exohub"] as const;
export type PlatformSlug = typeof platformSlugs[number];

type PlatformPage = {
  name: string;
  eyebrow: string;
  title: string;
  lead: string;
  capabilities: string[];
  engineering: string[];
};

export const platformPages: Record<PlatformSlug, Record<Locale, PlatformPage>> = {
  sfas: {
    en: { name:"Silver Fox Admin System", eyebrow:"EXPERIENCE PLATFORM", title:"A shared foundation for operational products.", lead:"SFAS standardizes administration, design primitives, accessibility and multilingual product foundations while leaving domain behavior inside each product.", capabilities:["Shared admin shell","Design-system foundations","Multilingual experience","Accessible operational UI"], engineering:["Reusable components and semantic tokens","Consistent product navigation and states","Locale-aware layout and typography","Adoption without sharing business logic"] },
    fa: { name:"Silver Fox Admin System", eyebrow:"پلتفرم تجربه", title:"یک پایه مشترک برای محصولات عملیاتی.", lead:"SFAS مدیریت، اجزای طراحی، دسترس‌پذیری و پایه تجربه چندزبانه را یکپارچه می‌کند؛ بدون اینکه منطق کسب‌وکار محصولات در یک جا جمع شود.", capabilities:["پوسته مدیریت مشترک","پایه سیستم طراحی","تجربه چندزبانه","رابط عملیاتی دسترس‌پذیر"], engineering:["کامپوننت‌های قابل استفاده مجدد و توکن‌های معنایی","ناوبری و وضعیت‌های هماهنگ در محصولات","چیدمان و تایپوگرافی وابسته به زبان","استفاده مشترک بدون اشتراک منطق دامنه"] }
  },
  "license-platform": {
    en: { name:"Silver Fox License Platform", eyebrow:"COMMERCIAL CONTROL PLANE", title:"Licensing, entitlement and usage as a platform.", lead:"The License Platform separates subscriptions, entitlements, technical licenses and metered usage so commercial policy does not leak into every product implementation.", capabilities:["Multi-tenancy","Policy-driven licensing","Entitlement management","Usage metering"], engineering:["Subscription and entitlement separation","Environment-aware credentials and policy","Idempotent sensitive operations","Auditable pricing and usage models"] },
    fa: { name:"Silver Fox License Platform", eyebrow:"لایه کنترل تجاری", title:"لایسنس، دسترسی و مصرف؛ به‌عنوان یک قابلیت پلتفرمی.", lead:"این پلتفرم اشتراک، سطح دسترسی، لایسنس فنی و مصرف را از هم جدا نگه می‌دارد تا سیاست تجاری به کد هر محصول نشت نکند.", capabilities:["چندمستاجری","لایسنس مبتنی بر سیاست","مدیریت سطح دسترسی","اندازه‌گیری مصرف"], engineering:["تفکیک اشتراک از دسترسی فنی","سیاست و اعتبارنامه مستقل برای هر محیط","عملیات حساس با جلوگیری از اجرای تکراری","مدل قیمت و مصرف قابل ممیزی"] }
  },
  "fox-pay": {
    en: { name:"Fox Pay", eyebrow:"PAYMENT INFRASTRUCTURE", title:"One payment contract. Multiple providers.", lead:"Fox Pay isolates provider-specific behavior behind adapters and adds deterministic routing, verification, reconciliation, webhook delivery and operational visibility.", capabilities:["Provider abstraction","Policy routing","Reconciliation","Provider health"], engineering:["Go + PostgreSQL + Redis baseline","Deterministic routing and failover","Idempotency and replay protection","Provider-independent payment states"] },
    fa: { name:"Fox Pay", eyebrow:"زیرساخت پرداخت", title:"یک قرارداد پرداخت؛ چند ارائه‌دهنده.", lead:"Fox Pay جزئیات اختصاصی هر درگاه را پشت لایه‌های سازگار پنهان می‌کند و مسیریابی، تأیید، تطبیق تراکنش، تحویل Webhook و دید عملیاتی را به‌صورت یکپارچه فراهم می‌کند.", capabilities:["انتزاع درگاه","مسیریابی سیاست‌محور","تطبیق تراکنش","پایش سلامت درگاه"], engineering:["پایه Go، PostgreSQL و Redis","مسیریابی و جایگزینی قطعی","جلوگیری از اجرای تکراری و بازپخش","وضعیت پرداخت مستقل از درگاه"] }
  },
  exotravel: {
    en: { name:"ExoTravel", eyebrow:"TRAVEL TECHNOLOGY", title:"A travel domain built on strong platform foundations.", lead:"ExoTravel combines product-owned travel workflows with shared tenancy, identity, audit, multilingual, commerce and integration foundations.", capabilities:["Travel domain ownership","Tenant-safe foundations","Commerce lifecycle","Partner and API readiness"], engineering:["Forced tenant isolation patterns","Audit and transactional outbox","Money and localization primitives","Progressive domain delivery"] },
    fa: { name:"ExoTravel", eyebrow:"فناوری سفر", title:"دامنه سفر روی پایه‌ای محکم از قابلیت‌های پلتفرمی.", lead:"ExoTravel فرایندهای اختصاصی سفر را با زیرساخت مشترک چندمستاجری، هویت، ممیزی، چندزبانه، تجارت و یکپارچگی ترکیب می‌کند.", capabilities:["مالکیت دامنه سفر","پایه امن چندمستاجری","چرخه تجارت و رزرو","آمادگی همکاری و API"], engineering:["الگوهای جداسازی اجباری مستأجرها","ممیزی و Outbox تراکنشی","پایه پول و بومی‌سازی","تحویل مرحله‌ای دامنه‌ها"] }
  },
  exohub: {
    en: { name:"ExoHub", eyebrow:"ECOSYSTEM PLATFORM", title:"Shared platform capabilities for connected products.", lead:"ExoHub provides common platform services for travel-commerce domains while keeping identity, tenancy, commerce, booking and financial ownership explicit.", capabilities:["Shared platform services","Domain boundaries","Commerce foundations","Integration layer"], engineering:["Platform-first reuse","Canonical domain ownership","API-first contracts","Event-aware integration"] },
    fa: { name:"ExoHub", eyebrow:"پلتفرم اکوسیستم", title:"قابلیت‌های مشترک برای محصولاتی که باید به هم متصل بمانند.", lead:"ExoHub سرویس‌های مشترک پلتفرمی را برای دامنه‌های تجاری و سفر فراهم می‌کند و در عین حال مالکیت هویت، مستأجر، تجارت، رزرو و داده مالی را روشن نگه می‌دارد.", capabilities:["سرویس‌های مشترک پلتفرم","مرزبندی دامنه‌ها","پایه تجارت","لایه یکپارچگی"], engineering:["استفاده مجدد در سطح پلتفرم","مالکیت مرجع هر دامنه","قراردادهای API از ابتدا","یکپارچگی آگاه به رویداد"] }
  }
};
