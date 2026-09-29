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
  "engineering-principles",
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
      lead: "Silver Fox is built as a connected ecosystem of independently owned products and shared platform capabilities. Common infrastructure is reused through explicit contracts; product data, domain behavior and release decisions stay bounded.",
      summary: "The architecture optimizes for controlled change: clear ownership, versioned interfaces, tenant-safe boundaries, observable behavior and the option to split or replace components when evidence justifies it.",
      visual: "/visual-architecture.svg",
      sections: [
        { title: "Platform and product boundaries", body: "Identity, administration, licensing and payments can become shared platform capabilities without absorbing product-specific workflows. A shared service owns a reusable technical concern; a product domain keeps its business rules and authoritative data.", bullets: ["Shared technical capability", "Product-owned business behavior", "Independent release paths"] },
        { title: "Data ownership stays explicit", body: "Transactional state belongs to the domain that is responsible for it. PostgreSQL-backed domain data remains authoritative; caches, search projections and analytics views improve access without becoming a second source of truth." },
        { title: "Contracts define integration", body: "Versioned APIs and schemas define how independently evolving components meet. The contract is the dependency surface; another service's internal tables, private implementation and deployment model are not." , bullets: ["OpenAPI for synchronous interfaces", "Stable machine-readable errors", "Compatibility reviewed as architecture"] },
        { title: "Events decouple progression", body: "Asynchronous integration is used when workflow progression, fan-out or resilience benefits from it. Transactional changes and event intent stay aligned so downstream projections can be rebuilt without inventing business truth." },
        { title: "Multi-tenancy crosses every trusted boundary", body: "Tenant context is carried through authorization, data access, background work and operational tooling. Isolation is a system property rather than a filter applied at the interface." },
        { title: "Reliability is designed into state transitions", body: "Retries, idempotency, timeout handling, recovery paths and reconciliation are modeled around the business operation. The goal is not to hide failure, but to make uncertain outcomes recoverable and explainable." },
        { title: "Security follows ownership and privilege", body: "Identity, authorization, secret handling, audit evidence and least-privilege access are enforced at trusted boundaries. Public documentation explains the principles while sensitive controls and topology stay private." },
        { title: "Distribution has to earn its complexity", body: "Components remain modular until scale, isolation, runtime suitability or operational ownership creates a reason to separate them. A more distributed diagram is not automatically a better system." },
        { title: "Evolution is a first-class requirement", body: "Backward compatibility, migration paths and versioned boundaries preserve room to change. Architecture is allowed to become more specialized as measured product and operational needs become clearer." }
      ],
      closingTitle: "Good architecture protects options.",
      closingBody: "A useful architecture is understandable now, measurable in operation and still leaves a credible path to change later."
    },
    fa: {
      eyebrow: "معماری سیستم",
      title: "معماری‌ای که تغییر را قابل کنترل نگه می‌دارد.",
      lead: "در پردازش ابری روباه نقره‌ای، محصولات مستقل‌اند اما جدا از هم ساخته نمی‌شوند. قابلیت‌های مشترک از طریق قراردادهای روشن در اختیار محصولات قرار می‌گیرند و در مقابل، داده، منطق دامنه و تصمیم انتشار هر محصول در همان دامنه باقی می‌ماند.",
      summary: "هدف معماری، کم‌کردن هزینه تغییر است: مالکیت روشن، رابط‌های نسخه‌بندی‌شده، مرزهای امن چندمستاجری، رفتار قابل مشاهده و امکان تفکیک یا جایگزینی اجزا وقتی شواهد واقعی آن را توجیه کند.",
      visual: "/visual-architecture.svg",
      sections: [
        { title: "مرز پلتفرم و محصول", body: "هویت، مدیریت، لایسنس و پرداخت می‌توانند قابلیت مشترک پلتفرمی باشند، بدون اینکه فرایندهای اختصاصی محصول را در خود جمع کنند. پلتفرم مسئول مسئله فنی مشترک است و محصول مالک قواعد کسب‌وکار و داده مرجع خود می‌ماند.", bullets: ["قابلیت فنی مشترک", "منطق کسب‌وکار در مالکیت محصول", "مسیر انتشار مستقل"] },
        { title: "مالکیت داده باید روشن بماند", body: "داده تراکنشی در همان دامنه‌ای نگهداری می‌شود که مسئولیت آن را بر عهده دارد. کش، جست‌وجو و نماهای تحلیلی برای سرعت و دسترسی بهترند؛ نه برای ساختن یک منبع حقیقت دوم." },
        { title: "قرارداد، مرز یکپارچگی است", body: "API و schema نسخه‌بندی‌شده مشخص می‌کنند اجزای مستقل چگونه با هم ارتباط می‌گیرند. وابستگی باید به قرارداد باشد، نه به جدول داخلی، جزئیات پیاده‌سازی یا روش استقرار سرویس دیگر.", bullets: ["OpenAPI برای رابط‌های هم‌زمان", "خطاهای پایدار و قابل پردازش", "سازگاری نسخه‌ها به‌عنوان تصمیم معماری"] },
        { title: "رویداد برای جداسازی جریان کار", body: "ارتباط ناهم‌زمان زمانی استفاده می‌شود که پیشرفت فرایند، fan-out یا تاب‌آوری از آن سود ببرد. تغییر تراکنشی و قصد انتشار رویداد باید هماهنگ بمانند تا مصرف‌کننده‌های بعدی بتوانند نماهای خود را بدون ساختن واقعیت جدید بازسازی کنند." },
        { title: "چندمستاجری از تمام مرزهای قابل اعتماد عبور می‌کند", body: "زمینه مستأجر در مجوزدهی، دسترسی داده، پردازش پس‌زمینه و ابزارهای عملیاتی همراه درخواست می‌ماند. جداسازی مستأجر یک فیلتر رابط کاربری نیست؛ بخشی از رفتار سیستم است." },
        { title: "قابلیت اتکا در مدل وضعیت ساخته می‌شود", body: "تلاش مجدد، idempotency، مدیریت timeout، بازیابی و تطبیق نتیجه باید متناسب با عملیات کسب‌وکار طراحی شوند. هدف پنهان‌کردن خطا نیست؛ هدف این است که نتیجه نامطمئن قابل بازیابی و قابل توضیح باشد." },
        { title: "امنیت از مالکیت و سطح دسترسی پیروی می‌کند", body: "هویت، مجوزدهی، مدیریت اطلاعات محرمانه، شواهد ممیزی و اصل کمترین دسترسی در مرزهای قابل اعتماد اعمال می‌شوند. اصول عمومی منتشر می‌شوند، اما توپولوژی و کنترل‌های حساس خصوصی می‌مانند." },
        { title: "توزیع‌شدن باید ارزشش را ثابت کند", body: "اجزا تا زمانی ماژولار می‌مانند که مقیاس، جداسازی، نوع بار کاری یا مالکیت عملیاتی دلیل روشنی برای تفکیک ایجاد کند. نمودار شلوغ‌تر لزوماً معماری بهتر نیست." },
        { title: "تکامل، بخشی از طراحی است", body: "سازگاری با نسخه قبل، مسیر مهاجرت و مرزهای نسخه‌بندی‌شده حق انتخاب آینده را حفظ می‌کنند. با روشن‌تر شدن نیاز واقعی محصول و عملیات، معماری می‌تواند تخصصی‌تر شود." }
      ],
      closingTitle: "معماری خوب، حق انتخاب آینده را حفظ می‌کند.",
      closingBody: "سیستم امروز باید قابل فهم و قابل سنجش باشد و برای تغییر فردا نیز مسیر معقولی باقی بگذارد."
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
      visual: "/visual-devops.svg",
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
      visual: "/visual-devops.svg",
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
      visual: "/visual-data.svg",
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
      visual: "/visual-data.svg",
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
      visual: "/visual-radar.svg",
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
      visual: "/visual-radar.svg",
      sections: [
        { title: "استفاده تثبیت‌شده", body: "Go، PostgreSQL، Redis، TypeScript، React/Next.js، OpenAPI، فرایندهای یکپارچه‌سازی و استقرار پیوسته و کنترل‌های امنیتی مخزن، بخشی از پایه فعلی هستند." },
        { title: "استفاده در صورت نیاز", body: "Kafka، OpenSearch، OpenTelemetry، ذخیره‌سازی سازگار با S3 و ارکستریشن کانتینر زمانی استفاده می‌شوند که نقش عملیاتی مشخصی داشته باشند." },
        { title: "آزمایش", body: "گردش‌کارهای توسعه با کمک هوش مصنوعی، خودکارسازی سیاست‌ها و انتزاع‌های تازه پلتفرمی در محدوده مشخص و با معیار قابل اندازه‌گیری آزمایش می‌شوند." },
        { title: "بررسی پیوسته", body: "سرویس‌های مدیریت‌شده ابری، قابلیت‌های لبه، مسیرهای پرداخت بین‌المللی و ابزارهای تازه توسعه با معیارهایی مثل امنیت، قابلیت جابه‌جایی و هزینه عملیاتی ارزیابی می‌شوند." }
      ],
      closingTitle: "جدید بودن، دلیل کافی برای مفید بودن نیست.",
      closingBody: "هر فناوری باید ریسک را کم کند، اهرم بیشتری بسازد یا اداره سیستم را ساده‌تر کند."
    }
  },
  "engineering-principles": {
    en: {
      eyebrow: "ENGINEERING PRINCIPLES",
      title: "Rules that keep autonomy from becoming fragmentation.",
      lead: "Silver Fox products evolve independently, but independence is bounded by shared rules for ownership, contracts, security, observability and change.",
      summary: "These principles are constraints on how systems are designed and operated. They exist to keep reuse deliberate, coupling visible and operational responsibility clear.",
      visual: "/visual-principles.svg",
      sections: [
        { title: "Ownership before reuse", body: "A capability is shared only when its responsibility and operating owner are explicit. Product domains keep ownership of business rules and authoritative data." },
        { title: "Contracts are system boundaries", body: "Versioned APIs, schemas and compatibility rules define where systems meet. Integration should depend on a contract, not on another component's internal implementation." },
        { title: "Secure defaults, explicit privilege", body: "Identity, authorization, tenant context, secret handling and audit evidence are designed into trusted boundaries. Privilege is granted deliberately and reviewed as the system changes." },
        { title: "Observable change", body: "Delivery, telemetry and recovery belong to one feedback loop. A change is not operationally complete until its behavior can be explained with useful signals." },
        { title: "Evolution follows evidence", body: "Complexity is introduced when measured scale, reliability or product needs justify it. Components may be split, replaced or centralized as evidence changes." },
        { title: "RTL and LTR are equal product modes", body: "Localization, typography, direction, accessibility and responsive behavior are first-class product concerns rather than a translation pass at the end." }
      ],
      closingTitle: "Consistency should protect autonomy, not replace it.",
      closingBody: "Shared engineering rules create predictable boundaries so products can move independently without making integration and operations unpredictable."
    },
    fa: {
      eyebrow: "اصول مهندسی",
      title: "قواعد مشترک، برای اینکه استقلال محصول به پراکندگی تبدیل نشود.",
      lead: "محصولات پردازش ابری روباه نقره‌ای مسیر توسعه مستقل دارند، اما این استقلال در چارچوب قواعد مشترک برای مالکیت، قراردادها، امنیت، مشاهده‌پذیری و مدیریت تغییر تعریف می‌شود.",
      summary: "این اصول شعار نیستند؛ محدودیت‌های طراحی و عملیات‌اند. کمک می‌کنند استفاده مجدد آگاهانه باشد، وابستگی‌ها پنهان نمانند و مسئولیت هر بخش مشخص بماند.",
      visual: "/visual-principles.svg",
      sections: [
        { title: "اول مالکیت، بعد اشتراک", body: "یک قابلیت زمانی مشترک می‌شود که مسئولیت و مالک عملیاتی آن روشن باشد. قوانین کسب‌وکار و داده مرجع هر دامنه در مالکیت همان محصول باقی می‌مانند." },
        { title: "قرارداد، مرز ارتباط سیستم‌هاست", body: "API، schema و قواعد سازگاری نسخه‌بندی می‌شوند تا نقطه اتصال سیستم‌ها روشن باشد. یکپارچه‌سازی نباید به جزئیات داخلی پیاده‌سازی سرویس دیگر وابسته شود." },
        { title: "پیش‌فرض امن، دسترسی صریح", body: "هویت، مجوزدهی، زمینه مستأجر، مدیریت اطلاعات محرمانه و شواهد ممیزی در مرزهای قابل اعتماد طراحی می‌شوند. دسترسی بیشتر باید آگاهانه اعطا و با تغییر سیستم بازبینی شود." },
        { title: "تغییر باید قابل مشاهده باشد", body: "تحویل، telemetry و بازیابی یک چرخه بازخورد واحدند. تغییر زمانی از نظر عملیاتی کامل است که بتوان رفتار آن را با سیگنال‌های مفید توضیح داد." },
        { title: "معماری با شواهد تکامل پیدا می‌کند", body: "پیچیدگی فقط وقتی وارد سیستم می‌شود که مقیاس، قابلیت اتکا یا نیاز واقعی محصول آن را توجیه کند. با تغییر شواهد، اجزا می‌توانند جدا، جایگزین یا متمرکز شوند." },
        { title: "RTL و LTR دو حالت هم‌ارز محصول‌اند", body: "بومی‌سازی، تایپوگرافی، جهت، دسترس‌پذیری و رفتار responsive از ابتدا جزئی از محصول‌اند؛ نه مرحله‌ای برای ترجمه در پایان توسعه." }
      ],
      closingTitle: "هماهنگی باید از استقلال محصول محافظت کند، نه جای آن را بگیرد.",
      closingBody: "قواعد مشترک مهندسی مرزها را قابل پیش‌بینی می‌کنند تا محصولات مستقل تغییر کنند، بدون اینکه یکپارچه‌سازی و عملیات غیرقابل پیش‌بینی شود."
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
  status: string;
  capabilities: string[];
  engineering: string[];
  sections: PageSection[];
};

export const platformPages: Record<PlatformSlug, Record<Locale, PlatformPage>> = {
  sfas: {
    en: {
      name: "Silver Fox Admin System",
      eyebrow: "EXPERIENCE PLATFORM",
      title: "A shared administration foundation without shared product logic.",
      lead: "SFAS provides reusable administration, design, localization and accessibility foundations so product teams can start from the same operational baseline without inheriting one shared business application.",
      status: "Phase 1 engineering baseline complete; first controlled package publication proof is the remaining release-binding gate.",
      capabilities: ["Shared admin shell", "Design-system foundations", "RTL/LTR as equal product modes", "Accessible operational UI"],
      engineering: ["Versioned reusable packages", "SSR-safe React and HTML adapters", "Gregorian/Jalali date foundation", "Automated interaction, accessibility and visual QA"],
      sections: [
        { title: "Why SFAS exists", body: "Administration surfaces repeat the same hard problems: navigation, forms, data tables, themes, localization, accessibility and interaction states. SFAS moves those foundations into reusable packages while leaving business workflows in the consuming product." },
        { title: "RTL and LTR are one product contract", body: "Direction is not a late translation pass. Layout, keyboard behavior, technical LTR islands, typography and visual regression are tested as equal operating modes." },
        { title: "Reuse is versioned", body: "Products consume explicit package surfaces and can adopt compatible releases deliberately. Shared primitives should reduce duplicated UI engineering without forcing every product into the same release cycle." },
        { title: "Current engineering state", body: "The Phase 1 engineering baseline is complete across seven TypeScript package surfaces with automated unit, contract, browser, accessibility and visual checks. The remaining release-binding step is the first controlled publication and clean install proof from the canonical package registry." }
      ]
    },
    fa: {
      name: "Silver Fox Admin System",
      eyebrow: "پلتفرم تجربه و مدیریت",
      title: "یک پایه مشترک برای مدیریت؛ بدون اشتراک منطق محصول.",
      lead: "SFAS زیرساخت رابط مدیریت، سیستم طراحی، بومی‌سازی و دسترس‌پذیری را به‌صورت قابل استفاده مجدد فراهم می‌کند تا محصولات از یک پایه عملیاتی مشترک شروع کنند، بدون اینکه فرایندهای کسب‌وکارشان در یک برنامه مرکزی ادغام شود.",
      status: "پایه مهندسی فاز ۱ کامل است؛ اثبات اولین انتشار کنترل‌شده بسته‌ها، آخرین گیت انتشار است.",
      capabilities: ["پوسته مشترک مدیریت", "پایه سیستم طراحی", "پشتیبانی هم‌ارز RTL/LTR", "رابط عملیاتی دسترس‌پذیر"],
      engineering: ["بسته‌های نسخه‌بندی‌شده", "آداپتورهای React و HTML", "پایه تاریخ میلادی و جلالی", "آزمون تعامل، دسترس‌پذیری و رگرسیون بصری"],
      sections: [
        { title: "چرا SFAS وجود دارد", body: "رابط‌های مدیریتی بارها با مسئله‌های مشابهی مثل ناوبری، فرم، جدول داده، تم، بومی‌سازی، دسترس‌پذیری و وضعیت‌های تعاملی روبه‌رو می‌شوند. SFAS این پایه‌ها را مشترک می‌کند و منطق کسب‌وکار را در محصول مصرف‌کننده نگه می‌دارد." },
        { title: "RTL و LTR دو نسخه جدا نیستند", body: "جهت صفحه یک مرحله ترجمه در انتهای کار نیست. چیدمان، رفتار صفحه‌کلید، بخش‌های فنی LTR، تایپوگرافی و رگرسیون بصری برای هر دو جهت به‌صورت هم‌ارز بررسی می‌شوند." },
        { title: "استفاده مجدد باید نسخه‌پذیر باشد", body: "محصولات سطح مشخصی از بسته‌ها را مصرف می‌کنند و نسخه‌های سازگار را آگاهانه می‌پذیرند. هدف کم‌کردن تکرار در مهندسی UI است، نه قفل‌کردن همه محصولات به یک چرخه انتشار." },
        { title: "وضعیت مهندسی فعلی", body: "پایه مهندسی فاز ۱ در هفت سطح بسته TypeScript تکمیل شده و آزمون‌های واحد، قراردادی، مرورگر، دسترس‌پذیری و بصری روی آن اجرا می‌شوند. گام باقی‌مانده برای انتشار، یک انتشار کنترل‌شده و اثبات نصب تمیز از مخزن بسته اصلی است." }
      ]
    }
  },
  "license-platform": {
    en: {
      name: "Silver Fox License Platform",
      eyebrow: "LICENSING & ENTITLEMENT CONTROL PLANE",
      title: "Separate the commercial relationship from technical access.",
      lead: "The License Platform models subscriptions, entitlements and licenses as different responsibilities. That separation lets commercial policy evolve without pushing product-specific licensing logic into every codebase.",
      status: "Phases 0–4 complete. The next phase is application authentication and customer API access.",
      capabilities: ["Multi-tenancy", "Policy-driven licensing", "Entitlement snapshots", "Versioned signed licenses"],
      engineering: ["Subscription / entitlement / license separation", "Hybrid activation policy", "Online and offline validation model", "Auditable issuance and lifecycle"],
      sections: [
        { title: "Three models, three responsibilities", body: "A subscription represents the commercial relationship. An entitlement grants technical rights. A license is the signed credential that proves access. Keeping those concepts separate prevents billing policy, feature rights and runtime validation from collapsing into one object." },
        { title: "Policy belongs to the product", body: "Products can define different activation, duration, environment and feature rules. Licensing behavior is policy-driven so the platform can serve products with different enforcement models without hard-coded special cases." },
        { title: "The licensing engine is now a real foundation", body: "The current implementation includes a versioned signed-license model, activation policies, lifecycle actions, online/offline validation, key rotation foundations, auditability and tenant-aware issuance. The implementation has dedicated integration, migration and end-to-end coverage." },
        { title: "The next boundary is authenticated API access", body: "Application identity and customer API credentials are the next planned layer. This keeps product-to-platform authentication distinct from the license credential itself and creates a cleaner base for quotas, rate controls and future metering." }
      ]
    },
    fa: {
      name: "Silver Fox License Platform",
      eyebrow: "لایه کنترل لایسنس و سطح دسترسی",
      title: "رابطه تجاری را از دسترسی فنی جدا می‌کنیم.",
      lead: "در پلتفرم لایسنس، اشتراک، حق دسترسی و لایسنس سه مسئولیت متفاوت دارند. این تفکیک اجازه می‌دهد سیاست تجاری تغییر کند، بدون اینکه منطق اختصاصی لایسنس وارد کد همه محصولات شود.",
      status: "فازهای ۰ تا ۴ کامل شده‌اند. گام بعدی احراز هویت برنامه و دسترسی API مشتری است.",
      capabilities: ["چندمستاجری", "لایسنس مبتنی بر سیاست", "تصویر حق دسترسی", "لایسنس امضاشده و نسخه‌بندی‌شده"],
      engineering: ["تفکیک اشتراک، حق دسترسی و لایسنس", "سیاست ترکیبی فعال‌سازی", "اعتبارسنجی آنلاین و آفلاین", "صدور و چرخه عمر قابل ممیزی"],
      sections: [
        { title: "سه مدل برای سه مسئولیت", body: "اشتراک رابطه تجاری را ثبت می‌کند، حق دسترسی، مجوز فنی را مشخص می‌کند و لایسنس مدرک امضاشده دسترسی است. این جداسازی مانع از آن می‌شود که قیمت‌گذاری، سطح قابلیت و اعتبارسنجی فنی در یک مدل درهم ادغام شوند." },
        { title: "سیاست لایسنس متعلق به محصول است", body: "محصولات می‌توانند قواعد متفاوتی برای فعال‌سازی، مدت، محیط و قابلیت‌ها داشته باشند. رفتار لایسنس مبتنی بر سیاست است تا پلتفرم بدون شرط‌های اختصاصی برای هر محصول کار کند." },
        { title: "موتور لایسنس اکنون یک پایه عملیاتی است", body: "پیاده‌سازی فعلی شامل مدل لایسنس امضاشده و نسخه‌بندی‌شده، سیاست فعال‌سازی، چرخه عمر، اعتبارسنجی آنلاین و آفلاین، پایه چرخش کلید، ممیزی و صدور آگاه از مستأجر است. این بخش با آزمون‌های یکپارچه‌سازی، مهاجرت و انتها‌به‌انتها پوشش داده شده است." },
        { title: "مرز بعدی، دسترسی API احراز هویت‌شده است", body: "هویت برنامه و اعتبارنامه API مشتری در فاز بعدی قرار دارند. این تفکیک، احراز هویت محصول در برابر پلتفرم را از خود اعتبارنامه لایسنس جدا می‌کند و پایه روشن‌تری برای سهمیه، کنترل نرخ و اندازه‌گیری مصرف می‌سازد." }
      ]
    }
  },
  "fox-pay": {
    en: {
      name: "Fox Pay",
      eyebrow: "PAYMENT ORCHESTRATION",
      title: "Keep provider complexity out of product code.",
      lead: "Fox Pay is being built as a provider-neutral payment layer. Products integrate with a stable payment contract while provider accounts, routing decisions and provider-specific behavior stay behind the orchestration boundary.",
      status: "Phase 1 multi-tenant core complete. Identity, RBAC and API clients are the next planned phase.",
      capabilities: ["Organization and project boundaries", "Provider-neutral domain model", "BYOM operating model", "Routing and reconciliation roadmap"],
      engineering: ["Go + PostgreSQL + Redis baseline", "Multi-tenant organization/project core", "Provider adapters planned behind one contract", "Idempotency and auditable routing as required invariants"],
      sections: [
        { title: "Bring your own merchant account", body: "Fox Pay is not designed to hold customer funds or act as a merchant of record. Each business uses its own provider relationship while the platform supplies the software boundary for orchestration." },
        { title: "Provider-specific behavior belongs behind adapters", body: "Creation, callback, verification, inquiry, refund and error semantics vary by provider. The target architecture isolates those differences so product code depends on one payment model rather than a collection of gateway SDKs." },
        { title: "Routing must preserve payment correctness", body: "Weighted, priority, health-aware and failover routing are roadmap capabilities. A timeout or unknown result cannot trigger blind failover; inquiry, idempotency and recovery have to resolve uncertain state first to reduce duplicate-payment risk." },
        { title: "Current engineering state", body: "The implemented foundation currently covers the core multi-tenant organization and project domain. Identity, RBAC and machine API clients are next; provider framework, payment state machine, routing, reconciliation and advanced observability remain subsequent phases rather than shipped claims." }
      ]
    },
    fa: {
      name: "Fox Pay",
      eyebrow: "ارکستریشن پرداخت",
      title: "پیچیدگی درگاه باید بیرون از کد محصول بماند.",
      lead: "Fox Pay به‌عنوان لایه‌ای مستقل از ارائه‌دهنده ساخته می‌شود. محصول با یک قرارداد پرداخت پایدار کار می‌کند و حساب‌های پذیرندگی، تصمیم مسیریابی و رفتار اختصاصی هر درگاه پشت مرز ارکستریشن باقی می‌مانند.",
      status: "هسته چندمستاجری فاز ۱ کامل است. هویت، RBAC و API Clientها گام بعدی برنامه هستند.",
      capabilities: ["مرز سازمان و پروژه", "مدل مستقل از ارائه‌دهنده", "مدل BYOM", "نقشه‌راه مسیریابی و تطبیق"],
      engineering: ["پایه Go، PostgreSQL و Redis", "هسته چندمستاجری سازمان و پروژه", "آداپتورهای درگاه پشت قرارداد مشترک", "idempotency و ممیزی تصمیم مسیریابی به‌عنوان اصل طراحی"],
      sections: [
        { title: "حساب پذیرندگی در مالکیت کسب‌وکار می‌ماند", body: "Fox Pay برای نگهداری پول مشتری یا ایفای نقش Merchant of Record طراحی نشده است. هر کسب‌وکار رابطه خود را با ارائه‌دهنده پرداخت حفظ می‌کند و پلتفرم لایه نرم‌افزاری ارکستریشن را فراهم می‌کند." },
        { title: "رفتار اختصاصی درگاه پشت Adapter می‌ماند", body: "ایجاد پرداخت، callback، تأیید، استعلام، refund و مدل خطا میان ارائه‌دهنده‌ها متفاوت است. معماری هدف این تفاوت‌ها را جدا می‌کند تا محصول به یک مدل پرداخت وابسته باشد، نه به مجموعه‌ای از SDKهای درگاه." },
        { title: "مسیریابی نباید صحت پرداخت را قربانی کند", body: "مسیریابی وزنی، اولویتی، مبتنی بر سلامت و جایگزینی خودکار در نقشه‌راه قرار دارند. timeout یا نتیجه نامشخص نباید باعث ارسال کورکورانه همان پرداخت به درگاه بعدی شود؛ ابتدا استعلام، idempotency و بازیابی باید وضعیت را روشن کنند." },
        { title: "وضعیت مهندسی فعلی", body: "پیاده‌سازی فعلی هسته چندمستاجری سازمان و پروژه را پوشش می‌دهد. هویت، RBAC و API Clientها گام بعدی‌اند و چارچوب ارائه‌دهنده، مدل وضعیت پرداخت، مسیریابی، تطبیق و مشاهده‌پذیری پیشرفته در فازهای بعد قرار دارند؛ بنابراین در این سایت به‌عنوان قابلیت آماده عرضه معرفی نمی‌شوند." }
      ]
    }
  },
  exotravel: {
    en: {
      name: "ExoTravel",
      eyebrow: "TRAVEL COMMERCE",
      title: "A travel domain that keeps its business ownership.",
      lead: "ExoTravel is organized around product-owned travel and commerce workflows while consuming common identity, tenancy, audit, localization and platform foundations through explicit boundaries.",
      status: "Architecture and phased delivery roadmap defined; implementation follows the accepted ابتدا پایه‌های معماری sequence.",
      capabilities: ["Travel domain ownership", "Tenant-aware foundation", "Commerce lifecycle roadmap", "همکار تجاری و API readiness"],
      engineering: ["Explicit domain boundaries", "Money and localization primitives", "Audit and event-aware integration", "Phased delivery behind validation gates"],
      sections: [
        { title: "Product ownership comes first", body: "Travel workflows, booking semantics and product data remain owned by the travel domain. Shared platform capabilities support the product without becoming a second owner of its business state." },
        { title: "Foundation before feature breadth", body: "The roadmap establishes tenancy, identity, authorization, localization, audit and design foundations before finance, booking and public API layers expand." },
        { title: "Commerce is built around invariants", body: "Inventory, quotes, payment and booking need explicit state transitions, idempotency and durable financial semantics. The architecture treats those rules as domain behavior rather than UI logic." }
      ]
    },
    fa: {
      name: "ExoTravel",
      eyebrow: "تجارت و فناوری سفر",
      title: "محصول سفر، مالک دامنه خودش باقی می‌ماند.",
      lead: "ExoTravel گردش‌کارهای سفر و تجارت را در مالکیت خود نگه می‌دارد و هویت، چندمستاجری، ممیزی، بومی‌سازی و پایه‌های مشترک را از طریق مرزهای روشن مصرف می‌کند.",
      status: "معماری و نقشه‌راه مرحله‌ای تعریف شده‌اند و اجرا بر اساس ترتیب ابتدا پایه‌های معماری پیش می‌رود.",
      capabilities: ["مالکیت دامنه سفر", "پایه آگاه از مستأجر", "نقشه‌راه چرخه تجارت", "آمادگی همکار تجاری و API"],
      engineering: ["مرز روشن دامنه", "پایه پول و بومی‌سازی", "ممیزی و یکپارچگی آگاه از رویداد", "تحویل مرحله‌ای پشت گیت‌های اعتبارسنجی"],
      sections: [
        { title: "مالکیت محصول در اولویت است", body: "گردش‌کار سفر، معنای رزرو و داده محصول در مالکیت دامنه سفر می‌مانند. قابلیت مشترک باید محصول را تقویت کند، نه اینکه به منبع دوم حقیقت کسب‌وکار تبدیل شود." },
        { title: "پایه پیش از گستردگی قابلیت", body: "نقشه‌راه، چندمستاجری، هویت، مجوزدهی، بومی‌سازی، ممیزی و سیستم طراحی را پیش از توسعه گسترده مالی، رزرو و API عمومی تثبیت می‌کند." },
        { title: "تجارت بر پایه invariant ساخته می‌شود", body: "موجودی، quote، پرداخت و رزرو به state transition روشن، idempotency و معنای مالی پایدار نیاز دارند. این قواعد در دامنه پیاده می‌شوند، نه در منطق رابط کاربری." }
      ]
    }
  },
  exohub: {
    en: {
      name: "ExoHub",
      eyebrow: "ECOSYSTEM INTEGRATION",
      title: "Add business capabilities without duplicating the platform core.",
      lead: "ExoHub follows an anti-duplication principle: new capabilities extend the existing identity, tenancy, booking, payment, ledger, audit and integration foundations instead of creating parallel systems.",
      status: "Architecture direction defined; capabilities are integrated through bounded contexts rather than a parallel platform.",
      capabilities: ["Shared platform reuse", "Bounded business contexts", "API/event contracts", "Single source-of-truth ownership"],
      engineering: ["Extend before duplicating", "Canonical domain ownership", "Transactional source of truth", "Event-aware projections and integrations"],
      sections: [
        { title: "A new capability is not a new platform", body: "Membership, entitlement, allocation or property operations can be added as bounded contexts while reusing the existing identity, customer, booking, payment, ledger, audit and observability foundations." },
        { title: "Anti-duplication is an architecture gate", body: "Before a new module, table, API or event is added, the design checks whether an existing domain can own the responsibility. This reduces duplicate data ownership and conflicting business rules." },
        { title: "Events and projections do not own the transaction", body: "Search and event projections can serve specialized read paths, but authoritative business mutations remain inside the owning transactional domain." }
      ]
    },
    fa: {
      name: "ExoHub",
      eyebrow: "یکپارچگی اکوسیستم",
      title: "قابلیت جدید، نباید هسته پلتفرم را دوباره بسازد.",
      lead: "ExoHub بر اصل پرهیز از تکرار بنا شده است: قابلیت‌های تازه باید هویت، چندمستاجری، رزرو، پرداخت، دفتر مالی، ممیزی و یکپارچگی موجود را گسترش دهند؛ نه اینکه برای هر دامنه یک سیستم موازی ایجاد شود.",
      status: "جهت معماری تعریف شده و قابلیت‌ها به‌صورت دامنه‌های مستقل روی پایه مشترک توسعه پیدا می‌کنند، نه به‌عنوان یک پلتفرم موازی.",
      capabilities: ["استفاده مجدد از پایه مشترک", "دامنه‌های مستقل با مرز روشن", "قرارداد API و رویداد", "مالکیت یکتای منبع حقیقت"],
      engineering: ["گسترش پیش از تکرار", "مالکیت مرجع دامنه", "منبع حقیقت تراکنشی", "نماهای خواندنی و یکپارچگی رویدادمحور"],
      sections: [
        { title: "قابلیت جدید، پلتفرم جدید نیست", body: "عضویت، حق دسترسی، تخصیص یا عملیات ملک می‌توانند به‌صورت دامنه مستقل اضافه شوند و از هویت، مشتری، رزرو، پرداخت، دفتر مالی، ممیزی و مشاهده‌پذیری موجود استفاده کنند." },
        { title: "پرهیز از تکرار یک گیت معماری است", body: "پیش از اضافه‌شدن ماژول، جدول، API یا رویداد تازه بررسی می‌شود که آیا یک دامنه موجود می‌تواند مسئولیت را بر عهده بگیرد یا نه. این کار از مالکیت دوگانه داده و قواعد متناقض جلوگیری می‌کند." },
        { title: "رویداد و نمای خواندنی مالک تراکنش نیستند", body: "جست‌وجو و نماهای رویدادمحور می‌توانند مسیر خواندن تخصصی بسازند، اما تغییر معتبر کسب‌وکار در دامنه تراکنشی مالک انجام می‌شود." }
      ]
    }
  }
};