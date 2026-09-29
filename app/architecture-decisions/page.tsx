import type { Metadata } from "next";
import { LocalizedPublicationIndex } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Architecture Decisions",
  description:
    "Public architecture decisions with context, constraints and trade-offs.",
  alternates: { canonical: "/architecture-decisions/" },
};

export default function Page() {
  return <LocalizedPublicationIndex kind="decision" />;
}
