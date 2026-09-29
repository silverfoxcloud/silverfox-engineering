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

  return <PlatformDetailPage slug={slug as PlatformSlug} />;
}
