import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedPublicationDetail } from "@/components/LocalizedPages";
import { architectureDecisions } from "@/data/publications";

export function generateStaticParams() {
  return architectureDecisions.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const record = architectureDecisions.find((item) => item.slug === slug);
  if (!record) return {};
  return {
    title: record.title.en,
    description: record.summary.en,
    alternates: { canonical: "/architecture-decisions/" + slug + "/" },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!architectureDecisions.some((item) => item.slug === slug)) notFound();
  return <LocalizedPublicationDetail kind="decision" slug={slug} />;
}
