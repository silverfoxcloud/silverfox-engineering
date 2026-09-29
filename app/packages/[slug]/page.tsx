import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PackageDetailPage } from "@/components/PackagePages";
import { getPackage, packageSlugs, type PackageSlug } from "@/data/packages";

export function generateStaticParams() {
  return packageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};
  return {
    title: pkg.displayName,
    description: pkg.description.en,
    alternates: {
      canonical: "/packages/" + slug + "/",
      languages: {
        en: "/packages/" + slug + "/",
        fa: "/fa/packages/" + slug + "/",
        "x-default": "/packages/" + slug + "/",
      },
    },
    openGraph: {
      title: pkg.displayName,
      description: pkg.description.en,
      url: "/packages/" + slug + "/",
      locale: "en_US",
      alternateLocale: ["fa_IR"],
    },
  };
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!packageSlugs.includes(slug as PackageSlug)) notFound();
  const pkg = getPackage(slug);
  if (!pkg) notFound();
  return <PackageDetailPage locale="en" pkg={pkg} />;
}
