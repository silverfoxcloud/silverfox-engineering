import { notFound } from "next/navigation";
import PlatformDetailPage from "@/components/PlatformDetailPage";
import { platformPages, platformSlugs, type PlatformSlug } from "@/data/engineering-pages";

export function generateStaticParams() {
  return platformSlugs.map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    if (!platformSlugs.includes(slug as PlatformSlug)) return {};
    const page = platformPages[slug as PlatformSlug].en;
    return { title: page.name, description: page.lead };
  });
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!platformSlugs.includes(slug as PlatformSlug)) notFound();
  return <PlatformDetailPage slug={slug as PlatformSlug} locale="en" />;
}
