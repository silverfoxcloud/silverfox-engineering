import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedPackageDetail } from "@/components/LocalizedPages";
import { getPackage, packageSlugs, type PackageSlug } from "@/data/packages";

export function generateStaticParams() {
  return packageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};
  return {
    title: pkg.displayName,
    description: pkg.description.en,
    alternates: { canonical: "/packages/" + slug + "/" },
    openGraph: {
      title: pkg.displayName,
      description: pkg.description.en,
      url: "/packages/" + slug + "/",
      locale: "en_US",
    },
  };
}

export default async function PackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!packageSlugs.includes(slug as PackageSlug)) notFound();
  if (!getPackage(slug)) notFound();
  return <LocalizedPackageDetail slug={slug as PackageSlug} />;
}
