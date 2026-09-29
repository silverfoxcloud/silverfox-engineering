import type { Metadata } from "next";
import { PublicationIndexPage } from "@/components/PublicationPages";

export const metadata: Metadata = {
  title: "یادداشت‌های مهندسی",
  description: "یادداشت‌های مهندسی Silver Fox بر پایه تصمیم‌ها و پیاده‌سازی‌های واقعی.",
  alternates: {
    canonical: "/fa/engineering/",
    languages: { en: "/engineering/", fa: "/fa/engineering/", "x-default": "/engineering/" },
  },
};

export default function Page() {
  return <PublicationIndexPage locale="fa" kind="note" />;
}
