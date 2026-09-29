import type { Metadata } from "next";
import { LocalizedPackageDirectory } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Verified Silver Fox engineering packages, versions, lifecycle, compatibility and installation guidance.",
  alternates: { canonical: "/packages/" },
  openGraph: {
    title: "Silver Fox Engineering Packages",
    description:
      "Verified package lifecycle, versions and installation guidance across the Silver Fox engineering ecosystem.",
    url: "/packages/",
    locale: "en_US",
  },
};

export default function PackagesPage() {
  return <LocalizedPackageDirectory />;
}
