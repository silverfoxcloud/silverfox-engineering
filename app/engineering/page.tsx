import type { Metadata } from "next";
import { LocalizedPublicationIndex } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Engineering Notes",
  description:
    "Public engineering notes grounded in real Silver Fox architecture and implementation evidence.",
  alternates: { canonical: "/engineering/" },
};

export default function Page() {
  return <LocalizedPublicationIndex kind="note" />;
}
