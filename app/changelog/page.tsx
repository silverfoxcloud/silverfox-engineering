import type { Metadata } from "next";
import { ChangelogPage } from "@/components/PublicationPages";

export const metadata: Metadata = {
  title: "Engineering Changelog",
  description: "Verified Silver Fox engineering changes from package releases, completed phase reports and portal work.",
  alternates: {
    canonical: "/changelog/",
    languages: { en: "/changelog/", fa: "/fa/changelog/", "x-default": "/changelog/" },
  },
};

export default function Page() {
  return <ChangelogPage locale="en" />;
}
