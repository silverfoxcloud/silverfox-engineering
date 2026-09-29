import type { Metadata } from "next";
import { PackageDirectoryPage } from "@/components/PackagePages";

export const metadata: Metadata = {
  title: "Packages",
  description: "Verified Silver Fox engineering packages, versions, lifecycle, compatibility and installation guidance.",
  alternates: {
    canonical: "/packages/",
    languages: { en: "/packages/", fa: "/fa/packages/", "x-default": "/packages/" },
  },
  openGraph: {
    title: "Silver Fox Engineering Packages",
    description: "Verified package lifecycle, versions and installation guidance across the Silver Fox engineering ecosystem.",
    url: "/packages/",
    locale: "en_US",
    alternateLocale: ["fa_IR"],
  },
};

export default function PackagesPage() {
  return <PackageDirectoryPage locale="en" />;
}
