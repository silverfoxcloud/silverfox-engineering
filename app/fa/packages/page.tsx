import type { Metadata } from "next";
import { PackageDirectoryPage } from "@/components/PackagePages";

export const metadata: Metadata = {
  title: "پکیج‌های مهندسی",
  description: "دایرکتوری پکیج‌های واقعی Silver Fox با نسخه، وضعیت انتشار، سازگاری و راهنمای نصب.",
  alternates: {
    canonical: "/fa/packages/",
    languages: { en: "/packages/", fa: "/fa/packages/", "x-default": "/packages/" },
  },
  openGraph: {
    title: "پکیج‌های مهندسی Silver Fox",
    description: "نسخه، چرخه انتشار و راهنمای نصب پکیج‌های تأییدشده Silver Fox.",
    url: "/fa/packages/",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
  },
};

export default function PersianPackagesPage() {
  return <PackageDirectoryPage locale="fa" />;
}
