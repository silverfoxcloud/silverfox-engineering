import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";
import { packageSlugs, type PackageSlug } from "@/data/packages";

export function generateStaticParams() {
  return packageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!packageSlugs.includes(slug as PackageSlug)) return {};
  return {
    alternates: { canonical: "/packages/" + slug + "/" },
    robots: { index: false, follow: true },
  };
}

export default async function PersianLegacyPackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!packageSlugs.includes(slug as PackageSlug)) notFound();
  return <LegacyLocaleRedirect cleanPath={"/packages/" + slug + "/"} />;
}
