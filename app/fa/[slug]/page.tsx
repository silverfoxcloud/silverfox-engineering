import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EngineeringDetailPage from "@/components/EngineeringDetailPage";
import {
  engineeringPages,
  engineeringSlugs,
  type EngineeringSlug,
} from "@/data/engineering-pages";

export function generateStaticParams() {
  return engineeringSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!engineeringSlugs.includes(slug as EngineeringSlug)) return {};

  const page = engineeringPages[slug as EngineeringSlug].fa;
  return {
    title: page.title,
    description: page.lead,
    alternates: {
      canonical: "/fa/" + slug + "/",
      languages: {
        en: "/" + slug + "/",
        fa: "/fa/" + slug + "/",
        "x-default": "/" + slug + "/",
      },
    },
    openGraph: {
      title: page.title,
      description: page.lead,
      url: "/fa/" + slug + "/",
      locale: "fa_IR",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function PersianEngineeringPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!engineeringSlugs.includes(slug as EngineeringSlug)) notFound();

  return <EngineeringDetailPage slug={slug as EngineeringSlug} locale="fa" />;
}
