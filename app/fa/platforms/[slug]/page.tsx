import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlatformDetailPage from "@/components/PlatformDetailPage";
import {
  platformPages,
  platformSlugs,
  type PlatformSlug,
} from "@/data/engineering-pages";

export function generateStaticParams() {
  return platformSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!platformSlugs.includes(slug as PlatformSlug)) return {};

  const page = platformPages[slug as PlatformSlug].fa;
  return {
    title: page.name + " | مهندسی پردازش ابری روباه نقره‌ای",
    description: page.lead,
    alternates: {
      canonical: "/fa/platforms/" + slug + "/",
      languages: {
        en: "/platforms/" + slug + "/",
        fa: "/fa/platforms/" + slug + "/",
        "x-default": "/platforms/" + slug + "/",
      },
    },
    openGraph: {
      title: page.name,
      description: page.lead,
      url: "/fa/platforms/" + slug + "/",
      locale: "fa_IR",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function PersianPlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!platformSlugs.includes(slug as PlatformSlug)) notFound();

  return <PlatformDetailPage slug={slug as PlatformSlug} locale="fa" />;
}
