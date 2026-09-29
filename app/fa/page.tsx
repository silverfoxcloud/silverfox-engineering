import type { Metadata } from "next";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function LegacyPersianHome() {
  return <LegacyLocaleRedirect target="/" locale="fa" />;
}
