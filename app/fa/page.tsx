import type { Metadata } from "next";
import PortalPage from "@/components/PortalPage";

export const metadata: Metadata = {
  title: "مهندسی پردازش ابری روباه نقره‌ای",
  description:
    "پرتال عمومی مهندسی شرکت پردازش ابری روباه نقره‌ای؛ معماری، پلتفرم ابری، امنیت، داده، قابلیت اتکا و تصمیم‌های فناوری.",
  alternates: {
    canonical: "/fa/",
    languages: {
      en: "/",
      fa: "/fa/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "مهندسی پردازش ابری روباه نقره‌ای",
    description:
      "معماری، پلتفرم ابری و تصمیم‌های مهندسی در اکوسیستم پردازش ابری روباه نقره‌ای.",
    url: "/fa/",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
  },
};

export default function PersianHome() {
  return <PortalPage locale="fa" />;
}
