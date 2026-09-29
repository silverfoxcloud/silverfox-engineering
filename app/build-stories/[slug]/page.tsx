import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedPublicationDetail } from "@/components/LocalizedPages";
import { buildStories } from "@/data/publications";

export function generateStaticParams() {
  return buildStories.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const record = buildStories.find((item) => item.slug === slug);
  if (!record) return {};
  return {
    title: record.title.en,
    description: record.summary.en,
    alternates: { canonical: "/build-stories/" + slug + "/" },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!buildStories.some((item) => item.slug === slug)) notFound();
  return <LocalizedPublicationDetail kind="story" slug={slug} />;
}
