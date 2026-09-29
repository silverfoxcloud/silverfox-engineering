import type { Metadata } from "next";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";

export const metadata: Metadata = {
  alternates: { canonical: "/changelog/" },
  robots: { index: false, follow: true },
};

export default function PersianLegacyChangelog() {
  return <LegacyLocaleRedirect cleanPath="/changelog/" />;
}
