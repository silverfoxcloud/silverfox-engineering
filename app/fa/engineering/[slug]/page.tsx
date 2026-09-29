import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";
import { engineeringNotes } from "@/data/publications";

export function generateStaticParams() {
  return engineeringNotes.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!engineeringNotes.some((item) => item.slug === slug)) return {};
  return {
    alternates: { canonical: "/engineering/" + slug + "/" },
    robots: { index: false, follow: true },
  };
}

export default async function PersianLegacyEngineeringDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!engineeringNotes.some((item) => item.slug === slug)) notFound();
  return <LegacyLocaleRedirect cleanPath={"/engineering/" + slug + "/"} />;
}
