import type { Metadata } from "next";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";

export const metadata: Metadata = {
  alternates: { canonical: "/build-stories/" },
  robots: { index: false, follow: true },
};

export default function PersianLegacyBuildStoryIndex() {
  return <LegacyLocaleRedirect cleanPath="/build-stories/" />;
}
