import type { Metadata } from "next";
import { PublicationIndexPage } from "@/components/PublicationPages";

export const metadata: Metadata = {
  title: "تصمیم‌های معماری",
  description: "ADRهای عمومی Silver Fox با زمینه، محدودیت و trade-off.",
  alternates: {
    canonical: "/fa/architecture-decisions/",
    languages: { en: "/architecture-decisions/", fa: "/fa/architecture-decisions/", "x-default": "/architecture-decisions/" },
  },
};

export default function Page() {
  return <PublicationIndexPage locale="fa" kind="decision" />;
}
