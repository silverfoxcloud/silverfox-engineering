import type { Locale } from "./content";

export type PublicationKind = "note" | "decision" | "story";

export type PublicationSection = {
  heading: Record<Locale, string>;
  body: Record<Locale, string>;
  bullets?: Record<Locale, string[]>;
};

export type PublicationRecord = {
  kind: PublicationKind;
  slug: string;
  published: string;
  sourceDate?: string;
  status?: string;
  platform: string;
  category: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  tags: string[];
  sections: PublicationSection[];
};

export const engineeringNotes: PublicationRecord[] = [
  {
    kind: "note",
    slug: "bidirectional-ui-is-a-release-contract",
    published: "2026-09-29",
    platform: "SFAS",
    category: "Design Engineering",
    title: {
      en: "Bidirectional UI is a release contract, not a translation feature",
      fa: "RTL و LTR قرارداد انتشارند، نه قابلیت جانبی ترجمه",
    },
    summary: {
      en: "Why SFAS treats direction as runtime truth, requires logical CSS properties and makes regressions in either direction release-blocking.",
      fa: "چرا SFAS جهت رابط را بخشی از قرارداد زمان اجرا می‌داند، CSS منطقی را الزام می‌کند و خرابی در هر دو جهت را مانع انتشار می‌شمارد.",
    },
    tags: ["RTL", "LTR", "SFAS", "Accessibility"],
    sections: [
      {
        heading: { en: "The problem", fa: "مسئله" },
        body: {
          en: "A bilingual product is easy to weaken if one direction is treated as the primary interface and the other as a mirrored afterthought. That approach pushes defects into navigation, spacing, technical identifiers and component behavior.",
          fa: "در محصول دوزبانه، اگر یک جهت «نسخه اصلی» و جهت دیگر فقط آینه آن تلقی شود، خطا خیلی زود وارد ناوبری، فاصله‌گذاری، شناسه‌های فنی و رفتار کامپوننت‌ها می‌شود.",
        },
      },
      {
        heading: { en: "The SFAS contract", fa: "قرارداد SFAS" },
        body: {
          en: "Direction is derived from the active locale and expressed through the document direction. Shared shell and component CSS uses logical properties unless a documented semantic reason requires a physical edge.",
          fa: "در SFAS جهت از locale فعال مشتق می‌شود و در سطح سند اعلام می‌شود. CSS مشترک shell و کامپوننت‌ها بر پایه logical property نوشته می‌شود؛ مگر جایی که دلیل معنایی و مستند برای استفاده از لبه فیزیکی وجود داشته باشد.",
        },
        bullets: {
          en: ["RTL and LTR are equal reference modes", "Technical identifiers stay LTR-isolated", "Direction regressions block release"],
          fa: ["RTL و LTR دو حالت هم‌ارز مرجعند", "شناسه‌های فنی در هر دو جهت LTR-isolated باقی می‌مانند", "خرابی جهت، انتشار را متوقف می‌کند"],
        },
      },
      {
        heading: { en: "Why this matters", fa: "چرا مهم است" },
        body: {
          en: "The benefit is not visual symmetry for its own sake. A stable directional contract lets multiple Silver Fox products reuse administration infrastructure without each product inventing its own RTL/LTR rules.",
          fa: "هدف صرفاً تقارن ظاهری نیست. قرارداد پایدار جهت باعث می‌شود چند محصول Silver Fox زیرساخت مدیریتی مشترک مصرف کنند، بدون اینکه هر محصول دوباره قواعد RTL/LTR خودش را بسازد.",
        },
      },
    ],
  },
  {
    kind: "note",
    slug: "rights-should-survive-catalog-change",
    published: "2026-09-29",
    sourceDate: "2026-09-28",
    platform: "License Platform",
    category: "Licensing",
    title: {
      en: "Effective rights should survive catalog change",
      fa: "حق دسترسی مؤثر نباید با تغییر کاتالوگ بازنویسی شود",
    },
    summary: {
      en: "Why the License Platform materializes append-only entitlement snapshots instead of calculating customer rights from mutable catalog rows on every read.",
      fa: "چرا License Platform به‌جای محاسبه دائمی حق مشتری از ردیف‌های قابل تغییر کاتالوگ، snapshotهای append-only برای entitlement می‌سازد.",
    },
    tags: ["Entitlements", "Snapshots", "Licensing", "Auditability"],
    sections: [
      {
        heading: { en: "Commercial state is not technical right", fa: "رابطه تجاری با حق فنی یکی نیست" },
        body: {
          en: "Subscription describes the commercial relationship. Entitlement describes the effective technical rights derived from a specific plan version and policy state. Keeping those concepts separate makes later licensing and enforcement behavior reproducible.",
          fa: "Subscription رابطه تجاری را بیان می‌کند؛ Entitlement حق فنی مؤثر حاصل از نسخه مشخص Plan و سیاست‌های همان وضعیت را. جدا نگه‌داشتن این دو مفهوم باعث می‌شود رفتار لایسنس و enforcement بعدی قابل بازسازی باشد.",
        },
      },
      {
        heading: { en: "Snapshot instead of live join", fa: "Snapshot به‌جای live join" },
        body: {
          en: "The accepted model stores immutable entitlement snapshots and copied snapshot items at materialization time. Current rights are the latest snapshot plus active overrides; historical rights can be reconstructed as of an earlier point without assuming the catalog stayed unchanged.",
          fa: "مدل پذیرفته‌شده هنگام materialization یک snapshot تغییرناپذیر و اقلام کپی‌شده آن را ذخیره می‌کند. حق فعلی از آخرین snapshot به‌علاوه overrideهای فعال به دست می‌آید و حق تاریخی نیز بدون فرض ثابت‌ماندن کاتالوگ قابل بازسازی است.",
        },
      },
      {
        heading: { en: "No cache before a measured need", fa: "کش قبل از نیاز اندازه‌گیری‌شده اضافه نمی‌شود" },
        body: {
          en: "The Phase 3 decision deliberately avoids Redis or an in-process entitlement cache. Indexed snapshot and override reads are already bounded, and a cache would optimize a hot path that did not yet exist.",
          fa: "تصمیم Phase 3 عمداً Redis یا کش درون‌پردازه‌ای برای entitlement اضافه نکرد. خواندن snapshot و override با ایندکس مشخص انجام می‌شود و اضافه‌کردن کش، بهینه‌سازی مسیری بود که هنوز بار واقعی و اندازه‌گیری‌شده نداشت.",
        },
      },
    ],
  },
  {
    kind: "note",
    slug: "payment-orchestration-without-owning-funds",
    published: "2026-09-29",
    sourceDate: "2026-09-27",
    platform: "Fox Pay",
    category: "Payments",
    title: {
      en: "Payment orchestration without becoming the merchant",
      fa: "ارکستریشن پرداخت بدون تبدیل‌شدن به صاحب وجوه",
    },
    summary: {
      en: "The BYOM boundary keeps merchant relationships and fund settlement with the customer while Fox Pay owns routing, integration and operational evidence.",
      fa: "در مدل BYOM، رابطه با درگاه و تسویه وجوه در مالکیت مشتری باقی می‌ماند و Fox Pay مسئول ارکستریشن، یکپارچگی و شواهد عملیاتی است.",
    },
    tags: ["Fox Pay", "BYOM", "Payments", "Boundaries"],
    sections: [
      {
        heading: { en: "The boundary", fa: "مرز مسئولیت" },
        body: {
          en: "Fox Pay is designed around Bring Your Own Merchant. Customers obtain their own merchant accounts and provider credentials. Funds move between payer, provider and the customer's merchant account; Fox Pay does not hold or settle customer funds.",
          fa: "Fox Pay بر پایه Bring Your Own Merchant طراحی شده است. مشتری حساب پذیرندگی و credential درگاه را خودش دریافت می‌کند. وجه بین پرداخت‌کننده، ارائه‌دهنده و حساب پذیرنده مشتری حرکت می‌کند و Fox Pay نگهدارنده یا تسویه‌کننده وجوه مشتری نیست.",
        },
      },
      {
        heading: { en: "What Fox Pay does own", fa: "Fox Pay چه چیزی را مالک است" },
        body: {
          en: "The engineering responsibility sits in provider integration, normalized state, future routing eligibility, audit evidence and reconciliation visibility. Provider-specific behavior belongs behind adapters so Core does not learn each provider's protocol.",
          fa: "مسئولیت مهندسی در یکپارچگی درگاه، وضعیت canonical، eligibility مسیریابی آینده، شواهد ممیزی و مشاهده‌پذیری تطبیق تراکنش قرار می‌گیرد. تفاوت هر درگاه پشت Adapter می‌ماند تا Core به پروتکل اختصاصی ارائه‌دهنده آلوده نشود.",
        },
      },
      {
        heading: { en: "What is still roadmap", fa: "چه چیزی هنوز roadmap است" },
        body: {
          en: "The provider-adapter architecture is an accepted design direction. Fox Pay Phase 1 completed the multi-tenant core; payment routing and provider behavior are not presented here as already shipped runtime capability.",
          fa: "معماری Provider Adapter یک تصمیم پذیرفته‌شده است، اما نباید با قابلیت تحویل‌شده اشتباه شود. Fox Pay در Phase 1 هسته چندمستاجری را تکمیل کرده و routing و رفتار واقعی provider هنوز در این پرتال به‌عنوان قابلیت اجراشده معرفی نمی‌شود.",
        },
      },
    ],
  },
];

export const architectureDecisions: PublicationRecord[] = [
  {
    kind: "decision",
    slug: "license-tenant-isolation",
    published: "2026-09-29",
    sourceDate: "2026-09-27",
    status: "Accepted",
    platform: "License Platform",
    category: "Architecture",
    title: {
      en: "Tenant isolation through explicit scoped access",
      fa: "جداسازی مستأجر با دسترسی صریح و scope‌شده",
    },
    summary: {
      en: "Use a shared schema with tenant_id on business data and enforce tenant scope through the data-access boundary; PostgreSQL RLS remains a documented future defense-in-depth option.",
      fa: "استفاده از schema مشترک با tenant_id روی داده کسب‌وکار و اعمال scope مستأجر در مرز data access؛ RLS فعلاً گزینه مستند آینده برای defense-in-depth باقی می‌ماند.",
    },
    tags: ["Multi-tenancy", "PostgreSQL", "Isolation"],
    sections: [
      {
        heading: { en: "Decision", fa: "تصمیم" },
        body: {
          en: "Business tables carry tenant identity and repository operations require tenant scope explicitly. IDs are resolved inside the caller's tenant boundary rather than trusted as globally meaningful input.",
          fa: "جدول‌های کسب‌وکار هویت مستأجر را حمل می‌کنند و عملیات repository باید scope مستأجر را صریح دریافت کند. شناسه ورودی در محدوده همان مستأجر resolve می‌شود و به‌عنوان شناسه جهانی قابل اعتماد نیست.",
        },
      },
      {
        heading: { en: "Trade-off", fa: "ملاحظه" },
        body: {
          en: "RLS would add defense in depth, but the accepted phase decision judged its connection/session policy overhead disproportionate while access remained centralized in the repository layer.",
          fa: "RLS می‌تواند لایه دفاعی دیگری اضافه کند، اما در این مرحله با توجه به متمرکزبودن دسترسی در repository، هزینه سیاست‌های connection/session نسبت به منفعت آن زودهنگام ارزیابی شد.",
        },
      },
    ],
  },
  {
    kind: "decision",
    slug: "license-entitlement-snapshots",
    published: "2026-09-29",
    sourceDate: "2026-09-28",
    status: "Accepted",
    platform: "License Platform",
    category: "Licensing",
    title: { en: "Entitlements are materialized as immutable snapshots", fa: "Entitlement به‌صورت snapshot تغییرناپذیر materialize می‌شود" },
    summary: {
      en: "Effective rights are reproduced from append-only snapshots and time-bounded overrides, not live mutable catalog joins.",
      fa: "حق مؤثر از snapshotهای append-only و overrideهای زمان‌دار بازسازی می‌شود، نه از live join روی کاتالوگ قابل تغییر.",
    },
    tags: ["Entitlements", "History", "Policy"],
    sections: [
      {
        heading: { en: "Decision", fa: "تصمیم" },
        body: {
          en: "Each materialization event creates an immutable snapshot. Active overrides remain independent of snapshots so plan changes do not silently erase an operator decision.",
          fa: "هر رویداد materialization یک snapshot تغییرناپذیر ایجاد می‌کند. Override فعال مستقل از snapshot باقی می‌ماند تا تغییر Plan تصمیم اپراتور را بی‌صدا از بین نبرد.",
        },
      },
      {
        heading: { en: "Consequence", fa: "پیامد" },
        body: {
          en: "Current and historical rights are queryable from stored state, and later licensing phases consume the entitlement boundary instead of reaching back into catalog tables.",
          fa: "حق فعلی و تاریخی از state ذخیره‌شده قابل پرس‌وجو است و فازهای بعدی لایسنس از مرز Entitlement استفاده می‌کنند، نه اینکه مستقیماً سراغ جدول‌های Catalog بروند.",
        },
      },
    ],
  },
  {
    kind: "decision",
    slug: "foxpay-byom",
    published: "2026-09-29",
    sourceDate: "2026-09-27",
    status: "Accepted",
    platform: "Fox Pay",
    category: "Payments",
    title: { en: "Fox Pay uses a Bring Your Own Merchant model", fa: "Fox Pay از مدل Bring Your Own Merchant استفاده می‌کند" },
    summary: {
      en: "Merchant accounts and provider credentials belong to the customer; Fox Pay orchestrates integrations without becoming a PSP, custodian or settlement intermediary.",
      fa: "حساب پذیرندگی و credential درگاه متعلق به مشتری است؛ Fox Pay یکپارچگی را ارکستریت می‌کند بدون اینکه PSP، نگهدارنده وجوه یا واسطه تسویه شود.",
    },
    tags: ["BYOM", "Payments", "Commercial Boundary"],
    sections: [
      {
        heading: { en: "Decision", fa: "تصمیم" },
        body: {
          en: "Customers contract directly with providers and register their provider accounts with Fox Pay. The platform does not take custody of funds.",
          fa: "مشتری مستقیماً با provider قرارداد دارد و Provider Account خودش را در Fox Pay ثبت می‌کند. پلتفرم وارد custody وجوه نمی‌شود.",
        },
      },
      {
        heading: { en: "Consequence", fa: "پیامد" },
        body: {
          en: "Routing can consider multiple provider accounts, while provider disputes and settlement remain between the customer and provider. Fox Pay supplies operational evidence rather than executing settlement.",
          fa: "مسیریابی می‌تواند چند Provider Account را در نظر بگیرد، اما اختلاف provider و تسویه بین مشتری و ارائه‌دهنده باقی می‌ماند. Fox Pay شواهد عملیاتی می‌دهد، نه اینکه تسویه را انجام دهد.",
        },
      },
    ],
  },
  {
    kind: "decision",
    slug: "foxpay-provider-adapters",
    published: "2026-09-29",
    sourceDate: "2026-09-27",
    status: "Accepted",
    platform: "Fox Pay",
    category: "Architecture",
    title: { en: "Provider-specific payment behavior stays behind adapters", fa: "رفتار اختصاصی هر درگاه پشت Adapter می‌ماند" },
    summary: {
      en: "Core depends on normalized capabilities rather than importing provider implementations directly.",
      fa: "Core به capabilityهای نرمال‌شده وابسته است و implementation هر provider را مستقیم import نمی‌کند.",
    },
    tags: ["Adapters", "Payments", "Boundaries"],
    sections: [
      {
        heading: { en: "Decision", fa: "تصمیم" },
        body: {
          en: "Provider adapters implement small capability interfaces and translate provider-specific state into normalized Fox Pay outcomes. Unsupported capabilities are explicit instead of emulated in Core.",
          fa: "Provider Adapterها interfaceهای کوچک مبتنی بر capability را پیاده می‌کنند و وضعیت اختصاصی provider را به outcome نرمال‌شده Fox Pay تبدیل می‌کنند. قابلیت پشتیبانی‌نشده صریح اعلام می‌شود و Core نسخه ساختگی آن را اجرا نمی‌کند.",
        },
      },
      {
        heading: { en: "Lifecycle note", fa: "یادداشت چرخه محصول" },
        body: {
          en: "This is an accepted architecture decision from Phase 0. It describes the target provider boundary; it is not evidence that every named provider adapter has shipped.",
          fa: "این تصمیم معماری در Phase 0 پذیرفته شده و مرز هدف providerها را تعریف می‌کند؛ اما به‌معنای تحویل همه Adapterهای نام‌برده نیست.",
        },
      },
    ],
  },
  {
    kind: "decision",
    slug: "sfas-directionality",
    published: "2026-09-29",
    status: "Accepted",
    platform: "SFAS",
    category: "Design Engineering",
    title: { en: "Bidirectional UI is a core SFAS contract", fa: "رابط دوجهته یک قرارداد اصلی در SFAS است" },
    summary: {
      en: "RTL and LTR have equal release weight; direction comes from locale and shared CSS defaults to logical edges.",
      fa: "RTL و LTR وزن یکسان در انتشار دارند؛ جهت از locale می‌آید و CSS مشترک به‌صورت پیش‌فرض از لبه‌های منطقی استفاده می‌کند.",
    },
    tags: ["RTL", "LTR", "SFAS"],
    sections: [
      {
        heading: { en: "Decision", fa: "تصمیم" },
        body: {
          en: "The active locale determines document direction. Shared components use logical properties, while code, identifiers and similar technical islands remain LTR-isolated.",
          fa: "locale فعال جهت سند را تعیین می‌کند. کامپوننت مشترک از logical property استفاده می‌کند و کد، شناسه و technical islandهای مشابه به‌صورت LTR-isolated باقی می‌مانند.",
        },
      },
      {
        heading: { en: "Release rule", fa: "قاعده انتشار" },
        body: {
          en: "A serious RTL regression and a serious LTR regression are equally release-blocking.",
          fa: "Regression جدی در RTL و regression جدی در LTR به یک اندازه مانع انتشارند.",
        },
      },
    ],
  },
];

export const buildStories: PublicationRecord[] = [
  {
    kind: "story",
    slug: "shipping-seven-sfas-packages",
    published: "2026-09-29",
    platform: "SFAS",
    category: "Developer Experience",
    title: { en: "Shipping seven SFAS packages without shipping the repository", fa: "انتشار هفت پکیج SFAS بدون انتشار خود repository" },
    summary: {
      en: "How the SFAS release pipeline moved from workspace builds to audited tarballs, checksums, a clean consumer smoke test and a controlled GitHub Packages prerelease.",
      fa: "SFAS چگونه از build داخل workspace به tarballهای audit‌شده، checksum، clean consumer smoke test و انتشار کنترل‌شده در GitHub Packages رسید.",
    },
    tags: ["Packages", "Release", "SFAS", "GitHub Packages"],
    sections: [
      {
        heading: { en: "Constraint", fa: "محدودیت" },
        body: {
          en: "The package surface had to be installable without exposing repository internals or raw licensed upstream source. Seven packages also needed one exact version so dependency drift could not hide inside the workspace.",
          fa: "سطح package باید قابل نصب می‌بود، بدون اینکه repository internals یا source لایسنس‌شده upstream را منتشر کند. هفت پکیج نیز باید یک نسخه دقیق مشترک می‌داشتند تا drift وابستگی داخل workspace پنهان نشود.",
        },
      },
      {
        heading: { en: "Implementation", fa: "پیاده‌سازی" },
        body: {
          en: "Each manifest uses an explicit files whitelist. The release dry run builds tarballs, produces a package manifest and SHA-256 checksums, then installs all seven tarballs into a fresh temporary consumer and imports representative runtime surfaces.",
          fa: "هر manifest یک files whitelist صریح دارد. release dry run فایل‌های tarball، package manifest و checksumهای SHA-256 را می‌سازد؛ سپس هر هفت پکیج در یک consumer موقت و تمیز نصب می‌شوند و surfaceهای اصلی runtime import می‌شوند.",
        },
      },
      {
        heading: { en: "Outcome", fa: "نتیجه" },
        body: {
          en: "Version 0.2.0-alpha.12 was published to the private GitHub Packages registry with dist-tag next. The first controlled publication and real-registry clean install/import both passed.",
          fa: "نسخه 0.2.0-alpha.12 با dist-tag برابر next در GitHub Packages خصوصی منتشر شد. هم اولین انتشار کنترل‌شده و هم clean install/import از رجیستری واقعی PASS شدند.",
        },
      },
    ],
  },
  {
    kind: "story",
    slug: "license-engine-v1",
    published: "2026-09-29",
    sourceDate: "2026-09-28",
    platform: "License Platform",
    category: "Licensing",
    title: { en: "Building the License Platform v1 engine without collapsing commercial and technical state", fa: "ساخت موتور v1 لایسنس بدون یکی‌کردن state تجاری و فنی" },
    summary: {
      en: "Phase 4 connected subscription and entitlement state to a versioned signed credential while retaining explicit license lifecycle, activation and online/offline validation boundaries.",
      fa: "Phase 4 وضعیت Subscription و Entitlement را به credential امضاشده و نسخه‌دار متصل کرد، در حالی که lifecycle لایسنس، activation و مرزهای validation آنلاین/آفلاین صریح باقی ماندند.",
    },
    tags: ["Licensing", "Entitlements", "Validation", "Phase 4"],
    sections: [
      {
        heading: { en: "Problem", fa: "مسئله" },
        body: {
          en: "Subscription is a commercial relationship, Entitlement is the effective right, and License is the signed technical credential. Treating them as one model would make history, policy and enforcement harder to reason about.",
          fa: "Subscription رابطه تجاری است، Entitlement حق مؤثر و License credential فنی امضاشده. یکی‌کردن این سه مدل، تاریخچه، policy و enforcement را مبهم می‌کرد.",
        },
      },
      {
        heading: { en: "Implementation", fa: "پیاده‌سازی" },
        body: {
          en: "The completed phase introduced a versioned license format, policy-aware issuance, activation records, heartbeat leases, versioned signing keys, explicit lifecycle history and online/offline validation behavior.",
          fa: "فاز تکمیل‌شده format نسخه‌دار لایسنس، صدور policy-aware، رکوردهای activation، heartbeat lease، signing key نسخه‌دار، تاریخچه lifecycle و رفتار validation آنلاین/آفلاین را اضافه کرد.",
        },
      },
      {
        heading: { en: "Outcome", fa: "نتیجه" },
        body: {
          en: "Phase 4 closed as COMPLETE on 2026-09-28. The report also records defects found by new integration coverage and fixed before closure rather than hidden from the public engineering story.",
          fa: "Phase 4 در 2026-09-28 با وضعیت COMPLETE بسته شد. گزارش فاز همچنین defectهایی را که تست‌های integration جدید پیدا کردند و پیش از closure اصلاح شدند ثبت کرده است؛ این بخش از روایت مهندسی حذف نشده است.",
        },
      },
    ],
  },
  {
    kind: "story",
    slug: "foxpay-multi-tenant-core",
    published: "2026-09-29",
    sourceDate: "2026-09-28",
    platform: "Fox Pay",
    category: "Platform",
    title: { en: "Establishing Fox Pay's multi-tenant core before payment routing", fa: "ساخت هسته چندمستاجری Fox Pay پیش از مسیریابی پرداخت" },
    summary: {
      en: "Fox Pay Phase 1 deliberately built organization/project boundaries, scoped data access, append-only audit and operational validation before implementing provider flows.",
      fa: "Fox Pay در Phase 1 عمداً پیش از جریان‌های provider، مرز Organization/Project، دسترسی scope‌شده، audit append-only و اعتبارسنجی عملیاتی را ساخت.",
    },
    tags: ["Fox Pay", "Multi-tenancy", "Audit", "Phase 1"],
    sections: [
      {
        heading: { en: "Why foundation first", fa: "چرا ابتدا foundation" },
        body: {
          en: "Routing and provider integrations would be unsafe foundations if project ownership and tenant isolation were still implicit. Phase 1 therefore established organization/project identity and environment context first.",
          fa: "اگر مالکیت Project و جداسازی tenant هنوز ضمنی بود، routing و provider integration روی foundation قابل اتکایی ساخته نمی‌شدند. Phase 1 ابتدا Organization/Project و context محیط را تثبیت کرد.",
        },
      },
      {
        heading: { en: "What shipped", fa: "چه چیزی تحویل شد" },
        body: {
          en: "The phase delivered scoped organization/project APIs, structural tenant keys, 404 behavior for foreign IDs, append-only audit events, reversible migrations and architecture tests.",
          fa: "این فاز APIهای scope‌شده Organization/Project، کلیدهای ساختاری tenant، رفتار 404 برای شناسه خارجی، audit eventهای append-only، migrationهای برگشت‌پذیر و architecture test را تحویل داد.",
        },
      },
      {
        heading: { en: "Validation", fa: "اعتبارسنجی" },
        body: {
          en: "The final Phase 1 validation recorded 31/31 checks passing on 2026-09-28. Payment flows and provider behavior were explicitly listed as not tested because they did not exist in that phase.",
          fa: "اعتبارسنجی نهایی Phase 1 در 2026-09-28 نتیجه 31/31 PASS را ثبت کرد. Payment flow و رفتار provider صریحاً در بخش «آزمون‌نشده» آمده‌اند، چون هنوز در scope آن فاز وجود نداشتند.",
        },
      },
    ],
  },
];

export const changelog = [
  {
    date: "2026-09-29",
    type: "Package",
    title: { en: "SFAS 0.2.0-alpha.12 published to GitHub Packages", fa: "SFAS 0.2.0-alpha.12 در GitHub Packages منتشر شد" },
    body: {
      en: "Seven @silverfoxcloud SFAS packages were published on the next channel. The controlled publication and real-registry clean install/import both passed.",
      fa: "هفت پکیج SFAS با scope برابر @silverfoxcloud روی کانال next منتشر شدند. انتشار کنترل‌شده و clean install/import از رجیستری واقعی هر دو PASS شدند.",
    },
    href: "/packages/",
  },
  {
    date: "2026-09-29",
    type: "Engineering",
    title: { en: "Silver Fox Engineering adds a verified public package directory", fa: "دایرکتوری عمومی و تأییدشده پکیج‌ها به Silver Fox Engineering اضافه شد" },
    body: {
      en: "The engineering portal now exposes real package versions, lifecycle, dependencies and installation guidance without representing private prerelease packages as stable public artifacts.",
      fa: "پرتال مهندسی اکنون نسخه، lifecycle، وابستگی و راهنمای نصب پکیج‌های واقعی را نمایش می‌دهد، بدون اینکه prerelease خصوصی را Stable یا عمومی معرفی کند.",
    },
    href: "/packages/",
  },
  {
    date: "2026-09-28",
    type: "Engineering",
    title: { en: "License Platform Phase 4 licensing engine completed", fa: "موتور لایسنس Phase 4 در License Platform تکمیل شد" },
    body: {
      en: "The completed phase delivered the versioned v1 licensing engine, policy-aware issuance, activations, heartbeat leases, key versioning and online/offline validation boundaries.",
      fa: "این فاز موتور نسخه‌دار v1، صدور policy-aware، activation، heartbeat lease، key versioning و مرزهای validation آنلاین/آفلاین را تکمیل کرد.",
    },
    href: "/platforms/license-platform/",
  },
  {
    date: "2026-09-28",
    type: "Engineering",
    title: { en: "Fox Pay Phase 1 multi-tenant core reached M1", fa: "هسته چندمستاجری Fox Pay در Phase 1 به M1 رسید" },
    body: {
      en: "Organization/project tenancy, scoped APIs, append-only audit and reversible migration foundations completed with 31/31 final validation checks passing.",
      fa: "زیرساخت tenancy برای Organization/Project، APIهای scope‌شده، audit append-only و migration برگشت‌پذیر تکمیل شد و اعتبارسنجی نهایی 31/31 PASS ثبت کرد.",
    },
    href: "/platforms/fox-pay/",
  },
] as const;
