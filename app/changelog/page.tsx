import type { Metadata } from "next";
import { LocalizedChangelog } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Engineering Changelog",
  description:
    "Verified Silver Fox engineering changes from package releases, completed phase reports and portal work.",
  alternates: { canonical: "/changelog/" },
};

export default function Page() {
  return <LocalizedChangelog />;
}
