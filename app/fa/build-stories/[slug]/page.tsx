import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicationDetailPage } from "@/components/PublicationPages";
import { buildStories } from "@/data/publications";

export function generateStaticParams() {
  return buildStories.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const record = buildStories.find((item) => item.slug === slug);
  if (!record) return {};
  return {
    title: record.title.fa,
    description: record.summary.fa,
    alternates: {
      canonical: "/fa/build-stories/" + slug + "/",
      languages: {
        en: "/build-stories/" + slug + "/",
        fa: "/fa/build-stories/" + slug + "/",
        "x-default": "/build-stories/" + slug + "/",
      },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const record = buildStories.find((item) => item.slug === slug);
  if (!record) notFound();
  return <PublicationDetailPage locale="fa" record={record} />;
}
