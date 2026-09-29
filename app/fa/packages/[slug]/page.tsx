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
    description: pkg.description.fa,
    alternates: {
      canonical: "/fa/packages/" + slug + "/",
      languages: {
        en: "/packages/" + slug + "/",
        fa: "/fa/packages/" + slug + "/",
        "x-default": "/packages/" + slug + "/",
      },
    },
    openGraph: {
      title: pkg.displayName,
      description: pkg.description.fa,
      url: "/fa/packages/" + slug + "/",
      locale: "fa_IR",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function PersianPackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!packageSlugs.includes(slug as PackageSlug)) notFound();
  const pkg = getPackage(slug);
  if (!pkg) notFound();
  return <PackageDetailPage locale="fa" pkg={pkg} />;
}
