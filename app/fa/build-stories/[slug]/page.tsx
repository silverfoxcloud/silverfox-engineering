import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";
import { buildStories } from "@/data/publications";

export function generateStaticParams() {
  return buildStories.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!buildStories.some((item) => item.slug === slug)) return {};
  return {
    alternates: { canonical: "/build-stories/" + slug + "/" },
    robots: { index: false, follow: true },
  };
}

export default async function PersianLegacyBuildStoryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!buildStories.some((item) => item.slug === slug)) notFound();
  return <LegacyLocaleRedirect cleanPath={"/build-stories/" + slug + "/"} />;
}
