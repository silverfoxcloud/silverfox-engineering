import type { Locale } from "./content";

export const engineeringStories = {
  en: [
    {
      eyebrow: "PLATFORM ARCHITECTURE",
      title: "Shared where it creates leverage. Independent where it protects velocity.",
      body: "Silver Fox is not designed as one giant application. Identity, tenancy, licensing, payments and shared experience capabilities form a reusable platform layer. Product domains stay bounded, own their data and evolve on their own lifecycle. The result is a connected ecosystem without turning every product into the same codebase.",
      points: ["Explicit domain ownership", "Multi-tenant foundations", "Stable integration contracts", "Independent product lifecycles"],
      image: "/visual-platform.svg"
    },
    {
      eyebrow: "CLOUD & OPERATIONS",
      title: "Built for repeatable delivery and observable operation.",
      body: "Infrastructure is treated as part of product engineering. Cloud and edge capabilities, automated validation, repeatable deployments, structured telemetry and service-level thinking are designed together so teams can explain what a system is doing before they need to debug an incident.",
      points: ["Cloud-managed infrastructure", "CI/CD and deployment gates", "Metrics, logs and traces", "Capacity and reliability signals"],
      image: "/visual-cloud.svg"
    },
    {
      eyebrow: "SECURITY ENGINEERING",
      title: "Trust is designed into boundaries, not added at the perimeter.",
      body: "Identity, authorization, tenant isolation, audit evidence, secret handling and secure delivery are architectural concerns. Public documentation explains the model; implementation details that would weaken the defensive boundary remain private.",
      points: ["Least privilege", "Tenant isolation", "Auditable actions", "Secure software lifecycle"],
      image: "/visual-security.svg"
    },
    {
      eyebrow: "AI-ASSISTED ENGINEERING",
      title: "Automation accelerates the work. Human ownership keeps it accountable.",
      body: "Artificial intelligence is used to accelerate implementation, review, documentation and analysis, but it does not replace engineering ownership. Changes still pass through source control, tests, security checks and explicit human acceptance so speed does not come at the cost of traceability.",
      points: ["Human-owned decisions", "Automated validation", "Traceable changes", "Security-aware workflows"],
      image: "/visual-ai.svg"
    }
  ],
  fa: [
    {
      eyebrow: "معماری پلتفرم",
      title: "اشتراک در جایی که ارزش می‌سازد؛ استقلال در جایی که سرعت را حفظ می‌کند.",
      body: "Silver Fox یک نرم‌افزار بزرگ و یکپارچه نیست. هویت، چندمستاجری، لایسنس، پرداخت و تجربه‌های مشترک در یک لایه پلتفرمی قابل استفاده مجدد قرار می‌گیرند؛ در مقابل، هر دامنه محصول مالک داده، منطق کسب‌وکار و چرخه توسعه خودش باقی می‌ماند. این ساختار، اکوسیستم را به هم متصل می‌کند بدون اینکه همه محصولات را به یک کدبیس وابسته کند.",
      points: ["مالکیت روشن هر دامنه", "زیرساخت چندمستاجری", "قراردادهای پایدار برای یکپارچگی", "چرخه توسعه مستقل محصولات"],
      image: "/visual-platform.svg"
    },
    {
      eyebrow: "زیرساخت ابری و عملیات",
      title: "استقرار تکرارپذیر، عملیات قابل مشاهده و تصمیم‌گیری بر پایه داده.",
      body: "زیرساخت در Silver Fox بخشی از مهندسی محصول است، نه کاری جداگانه پس از توسعه. قابلیت‌های ابری و لبه شبکه، اعتبارسنجی خودکار، استقرارهای قابل تکرار، ثبت رخدادهای ساختاریافته و سنجش سطح سرویس در کنار هم طراحی می‌شوند تا رفتار سیستم در محیط عملیاتی قابل توضیح و قابل اندازه‌گیری باشد.",
      points: ["زیرساخت مدیریت‌شده ابری", "یکپارچه‌سازی و استقرار پیوسته", "سنجه، لاگ و ردیابی توزیع‌شده", "پایش ظرفیت و قابلیت اتکا"],
      image: "/visual-cloud.svg"
    },
    {
      eyebrow: "مهندسی امنیت",
      title: "اعتماد از درون معماری ساخته می‌شود، نه فقط در مرز شبکه.",
      body: "هویت، مجوزدهی، جداسازی مستأجرها، ثبت رویدادهای قابل ممیزی، مدیریت اطلاعات محرمانه و تحویل امن از ابتدا در معماری دیده می‌شوند. در مستندات عمومی، اصول و مدل‌های امنیتی توضیح داده می‌شوند؛ اما جزئیاتی که می‌توانند مرز دفاعی سیستم را تضعیف کنند عمومی نمی‌شوند.",
      points: ["اصل کمترین سطح دسترسی", "جداسازی مستأجرها", "رویدادهای قابل ممیزی", "چرخه توسعه امن"],
      image: "/visual-security.svg"
    },
    {
      eyebrow: "مهندسی با کمک هوش مصنوعی",
      title: "خودکارسازی سرعت می‌دهد؛ مالکیت انسانی پاسخ‌گویی را حفظ می‌کند.",
      body: "از هوش مصنوعی برای افزایش سرعت توسعه، بازبینی، مستندسازی و تحلیل استفاده می‌کنیم؛ اما تصمیم فنی و مسئولیت نهایی همچنان انسانی است. هر تغییر باید از کنترل نسخه، آزمون، بررسی امنیتی و تأیید مشخص عبور کند تا سرعت، جای ردیابی‌پذیری و کیفیت را نگیرد.",
      points: ["تصمیم‌گیری با مالکیت انسانی", "اعتبارسنجی خودکار", "تغییرات ردیابی‌پذیر", "گردش‌کار آگاه به امنیت"],
      image: "/visual-ai.svg"
    }
  ]
} satisfies Record<Locale, Array<{eyebrow:string;title:string;body:string;points:string[];image:string}>>;
