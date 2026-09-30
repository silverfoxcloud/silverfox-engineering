import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";
import { architectureDecisions } from "@/data/publications";

export function generateStaticParams() {
  return architectureDecisions.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!architectureDecisions.some((item) => item.slug === slug)) return {};
  return {
    alternates: { canonical: "/architecture-decisions/" + slug + "/" },
    robots: { index: false, follow: true },
  };
}

export default async function PersianLegacyArchitectureDecisionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!architectureDecisions.some((item) => item.slug === slug)) notFound();
  return <LegacyLocaleRedirect cleanPath={"/architecture-decisions/" + slug + "/"} />;
}
