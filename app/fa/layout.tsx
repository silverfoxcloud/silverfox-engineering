import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مهندسی پردازش ابری روباه نقره‌ای",
  description: "پرتال عمومی مهندسی شرکت پردازش ابری روباه نقره‌ای؛ محصولات، معماری، استانداردها، پرداخت، لایسنس، مدیریت و فناوری سفر.",
  alternates: {
    canonical: "/fa/",
    languages: { en: "/", "fa-IR": "/fa/" },
  },
};

export default function PersianLayout({ children }: { children: React.ReactNode }) {
  return <div lang="fa" dir="rtl">{children}</div>;
}
