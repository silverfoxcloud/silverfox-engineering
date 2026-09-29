import type { Metadata } from "next";
import { PublicationIndexPage } from "@/components/PublicationPages";

export const metadata: Metadata = {
  title: "Architecture Decisions",
  description: "Public architecture decisions with context, constraints and trade-offs.",
  alternates: {
    canonical: "/architecture-decisions/",
    languages: { en: "/architecture-decisions/", fa: "/fa/architecture-decisions/", "x-default": "/architecture-decisions/" },
  },
};

export default function Page() {
  return <PublicationIndexPage locale="en" kind="decision" />;
}
