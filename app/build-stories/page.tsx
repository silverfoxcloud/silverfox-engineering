import type { Metadata } from "next";
import { LocalizedPublicationIndex } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Engineering Build Stories",
  description:
    "Source-grounded stories about building Silver Fox systems and platform foundations.",
  alternates: { canonical: "/build-stories/" },
};

export default function Page() {
  return <LocalizedPublicationIndex kind="story" />;
}
