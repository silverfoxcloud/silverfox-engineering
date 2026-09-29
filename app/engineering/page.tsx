import type { Metadata } from "next";
import { PublicationIndexPage } from "@/components/PublicationPages";

export const metadata: Metadata = {
  title: "Engineering Notes",
  description: "Public engineering notes grounded in real Silver Fox architecture and implementation evidence.",
  alternates: {
    canonical: "/engineering/",
    languages: { en: "/engineering/", fa: "/fa/engineering/", "x-default": "/engineering/" },
  },
};

export default function Page() {
  return <PublicationIndexPage locale="en" kind="note" />;
}
