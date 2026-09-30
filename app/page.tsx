import type { Metadata } from "next";
import { LocalizedHome } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Silver Fox Engineering",
  description:
    "Public engineering portal for Silver Fox architecture, cloud platform, security, data, reliability and technology decisions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Silver Fox Engineering",
    description:
      "Architecture, cloud platform and engineering decisions across the Silver Fox ecosystem.",
    url: "/",
    locale: "en_US",
  },
};

export default function Home() {
  return <LocalizedHome />;
}
