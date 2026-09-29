import type { Metadata } from "next";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";

export const metadata: Metadata = {
  alternates: { canonical: "/architecture-decisions/" },
  robots: { index: false, follow: true },
};

export default function PersianLegacyArchitectureDecisionIndex() {
  return <LegacyLocaleRedirect cleanPath="/architecture-decisions/" />;
}
