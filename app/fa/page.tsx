import type { Metadata } from "next";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";

export const metadata: Metadata = {
  title: "Silver Fox Engineering",
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
};

export default function PersianLegacyHome() {
  return <LegacyLocaleRedirect cleanPath="/" />;
}
