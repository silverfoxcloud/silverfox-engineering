import { notFound } from "next/navigation";
import { LocalizedPlatformPage } from "@/components/LocalizedPages";
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
}) {
  const { slug } = await params;
  if (!platformSlugs.includes(slug as PlatformSlug)) return {};

  const page = platformPages[slug as PlatformSlug].en;
  return {
    title: page.name,
    description: page.lead,
    alternates: { canonical: "/platforms/" + slug + "/" },
    openGraph: {
      title: page.name,
      description: page.lead,
      url: "/platforms/" + slug + "/",
      locale: "en_US",
    },
  };
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!platformSlugs.includes(slug as PlatformSlug)) notFound();

  return <LocalizedPlatformPage slug={slug as PlatformSlug} />;
}
