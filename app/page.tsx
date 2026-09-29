import type { Metadata } from "next";
import PortalPage from "@/components/PortalPage";

export const metadata: Metadata = {
  title: "Silver Fox Engineering",
  description:
    "Public engineering portal for Silver Fox architecture, cloud platform, security, data, reliability and technology decisions.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fa: "/fa/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Silver Fox Engineering",
    description:
      "Architecture, cloud platform and engineering decisions across the Silver Fox ecosystem.",
    url: "/",
    locale: "en_US",
    alternateLocale: ["fa_IR"],
  },
};

export default function Home() {
  return <PortalPage locale="en" />;
}
