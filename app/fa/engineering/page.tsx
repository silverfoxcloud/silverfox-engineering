import type { Metadata } from "next";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";

export const metadata: Metadata = {
  alternates: { canonical: "/engineering/" },
  robots: { index: false, follow: true },
};

export default function PersianLegacyEngineeringIndex() {
  return <LegacyLocaleRedirect cleanPath="/engineering/" />;
}
