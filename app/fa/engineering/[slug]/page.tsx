import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicationDetailPage } from "@/components/PublicationPages";
import { engineeringNotes } from "@/data/publications";

export function generateStaticParams() {
  return engineeringNotes.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const record = engineeringNotes.find((item) => item.slug === slug);
  if (!record) return {};
  return {
    title: record.title.fa,
    description: record.summary.fa,
    alternates: {
      canonical: "/fa/engineering/" + slug + "/",
      languages: {
        en: "/engineering/" + slug + "/",
        fa: "/fa/engineering/" + slug + "/",
        "x-default": "/engineering/" + slug + "/",
      },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const record = engineeringNotes.find((item) => item.slug === slug);
  if (!record) notFound();
  return <PublicationDetailPage locale="fa" record={record} />;
}
