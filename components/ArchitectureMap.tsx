"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/data/content";

const nodes = [
  {
    en: "Identity & Access",
    fa: "هویت و دسترسی",
    path: "security",
    infoEn: "Identity, authorization and least-privilege rules are treated as platform boundaries rather than page-level concerns.",
    infoFa: "هویت، مجوزدهی و کمترین سطح دسترسی در مرزهای پلتفرم اعمال می‌شوند؛ نه فقط در لایه رابط کاربری.",
  },
  {
    en: "Multi-tenancy",
    fa: "چندمستاجری",
    path: "architecture",
    infoEn: "Tenant context shapes authorization, data access and operational behavior across product boundaries.",
    infoFa: "زمینه هر مستأجر در مجوزدهی، دسترسی داده و رفتار عملیاتی تا مرزهای محصول همراه می‌شود.",
  },
  {
    en: "License Platform",
    fa: "پلتفرم لایسنس",
    path: "platforms/license-platform",
    infoEn: "Licensing and entitlements are exposed through explicit contracts instead of being duplicated inside each product.",
    infoFa: "لایسنس و entitlement از طریق قراردادهای صریح ارائه می‌شوند تا این منطق در هر محصول دوباره ساخته نشود.",
  },
  {
    en: "Fox Pay",
    fa: "Fox Pay",
    path: "platforms/fox-pay",
    infoEn: "Payment orchestration isolates provider-specific behavior behind routing, verification and reconciliation contracts.",
    infoFa: "ارکستریشن پرداخت، تفاوت درگاه‌ها را پشت قراردادهای مسیریابی، تأیید و تطبیق تراکنش نگه می‌دارد.",
  },
  {
    en: "SFAS",
    fa: "SFAS",
    path: "platforms/sfas",
    infoEn: "Shared administration and design foundations provide consistent accessibility and equal RTL/LTR support.",
    infoFa: "زیرساخت مشترک مدیریت و طراحی، دسترس‌پذیری و پشتیبانی هم‌ارز RTL/LTR را در سطح اکوسیستم هماهنگ می‌کند.",
  },
  {
    en: "Product Domains",
    fa: "دامنه‌های محصول",
    path: "platforms/exotravel",
    infoEn: "Business workflows, product data and release decisions stay owned by the product domain.",
    infoFa: "گردش‌کار کسب‌وکار، داده محصول و تصمیم‌های انتشار در مالکیت همان دامنه محصول باقی می‌مانند.",
  },
  {
    en: "Security",
    fa: "امنیت",
    path: "security",
    infoEn: "Security controls are layered across identity, secrets, delivery, tenancy and auditable operations.",
    infoFa: "کنترل‌های امنیتی میان هویت، اطلاعات محرمانه، تحویل نرم‌افزار، چندمستاجری و عملیات قابل ممیزی توزیع می‌شوند.",
  },
  {
    en: "Observability",
    fa: "مشاهده‌پذیری",
    path: "devops-sre",
    infoEn: "Telemetry and operational signals make failures explainable and support measurable reliability work.",
    infoFa: "Telemetry و سیگنال‌های عملیاتی کمک می‌کنند خطا قابل توضیح باشد و قابلیت اتکا با داده واقعی سنجیده شود.",
  },
] as const;

export default function ArchitectureMap({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const fa = locale === "fa";
  const selected = nodes[active];

  return (
    <div
      className="architectureMap"
      aria-label={fa ? "نمای تعاملی معماری Silver Fox" : "Interactive Silver Fox architecture view"}
    >
      <div className="architectureStage">
        <div className="mapCore">
          <img src="/silver-fox-logo.svg" alt="" />
          <strong>Silver Fox</strong>
          <span>{fa ? "زیرساخت مشترک" : "Shared foundations"}</span>
        </div>

        <div className="mapNodes" role="group" aria-label={fa ? "حوزه‌های معماری" : "Architecture domains"}>
          {nodes.map((node, index) => (
            <button
              type="button"
              key={node.en}
              className={"mapNode " + (active === index ? "active" : "")}
              aria-pressed={active === index}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span className="mapNodeIndex">{fa ? "۰۱۲۳۴۵۶۷۸۹"[index + 1] : String(index + 1).padStart(2, "0")}</span>
              <strong>{fa ? node.fa : node.en}</strong>
            </button>
          ))}
        </div>
      </div>

      <aside className="mapDetail" aria-live="polite">
        <span>{fa ? "مرز مسئولیت" : "RESPONSIBILITY BOUNDARY"}</span>
        <h3>{fa ? selected.fa : selected.en}</h3>
        <p>{fa ? selected.infoFa : selected.infoEn}</p>
        <Link href={"/" + selected.path + "/"}>
          {fa ? "مشاهده جزئیات" : "Explore this domain"}
          <span aria-hidden="true"> ↗</span>
        </Link>
      </aside>
    </div>
  );
}
