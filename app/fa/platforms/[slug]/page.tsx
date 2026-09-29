import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";
import { platformSlugs, type PlatformSlug } from "@/data/engineering-pages";

export function generateStaticParams() {
  return platformSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!platformSlugs.includes(slug as PlatformSlug)) return {};
  return {
    alternates: { canonical: "/platforms/" + slug + "/" },
    robots: { index: false, follow: true },
  };
}

export default async function PersianLegacyPlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!platformSlugs.includes(slug as PlatformSlug)) notFound();
  return <LegacyLocaleRedirect cleanPath={"/platforms/" + slug + "/"} />;
}
