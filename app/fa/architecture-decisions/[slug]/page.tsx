import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicationDetailPage } from "@/components/PublicationPages";
import { architectureDecisions } from "@/data/publications";

export function generateStaticParams() {
  return architectureDecisions.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const record = architectureDecisions.find((item) => item.slug === slug);
  if (!record) return {};
  return {
    title: record.title.fa,
    description: record.summary.fa,
    alternates: {
      canonical: "/fa/architecture-decisions/" + slug + "/",
      languages: {
        en: "/architecture-decisions/" + slug + "/",
        fa: "/fa/architecture-decisions/" + slug + "/",
        "x-default": "/architecture-decisions/" + slug + "/",
      },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const record = architectureDecisions.find((item) => item.slug === slug);
  if (!record) notFound();
  return <PublicationDetailPage locale="fa" record={record} />;
}
