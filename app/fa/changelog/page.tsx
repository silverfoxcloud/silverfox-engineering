import type { Metadata } from "next";
import { ChangelogPage } from "@/components/PublicationPages";

export const metadata: Metadata = {
  title: "تغییرات مهندسی",
  description: "تغییرات تأییدشده مهندسی Silver Fox بر پایه انتشارها، گزارش فازها و تغییرات واقعی پرتال.",
  alternates: {
    canonical: "/fa/changelog/",
    languages: { en: "/changelog/", fa: "/fa/changelog/", "x-default": "/changelog/" },
  },
};

export default function Page() {
  return <ChangelogPage locale="fa" />;
}
