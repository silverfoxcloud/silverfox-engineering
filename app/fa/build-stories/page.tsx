import type { Metadata } from "next";
import { PublicationIndexPage } from "@/components/PublicationPages";

export const metadata: Metadata = {
  title: "روایت‌های ساخت مهندسی",
  description: "روایت‌های واقعی از ساخت سامانه‌ها و زیرساخت‌های Silver Fox.",
  alternates: {
    canonical: "/fa/build-stories/",
    languages: { en: "/build-stories/", fa: "/fa/build-stories/", "x-default": "/build-stories/" },
  },
};

export default function Page() {
  return <PublicationIndexPage locale="fa" kind="story" />;
}
