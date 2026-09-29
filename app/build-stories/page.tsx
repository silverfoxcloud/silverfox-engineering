import type { Metadata } from "next";
import { PublicationIndexPage } from "@/components/PublicationPages";

export const metadata: Metadata = {
  title: "Engineering Build Stories",
  description: "Source-grounded stories about building Silver Fox systems and platform foundations.",
  alternates: {
    canonical: "/build-stories/",
    languages: { en: "/build-stories/", fa: "/fa/build-stories/", "x-default": "/build-stories/" },
  },
};

export default function Page() {
  return <PublicationIndexPage locale="en" kind="story" />;
}
