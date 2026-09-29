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
}) {
  const { slug } = await params;
  if (!engineeringSlugs.includes(slug as EngineeringSlug)) return {};

  const page = engineeringPages[slug as EngineeringSlug].en;
  return {
    title: page.title,
    description: page.lead,
    alternates: {
      canonical: "/" + slug + "/",
      languages: {
        en: "/" + slug + "/",
        fa: "/fa/" + slug + "/",
        "x-default": "/" + slug + "/",
      },
    },
    openGraph: {
      title: page.title,
      description: page.lead,
      url: "/" + slug + "/",
      locale: "en_US",
      alternateLocale: ["fa_IR"],
    },
  };
}

export default async function EngineeringPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!engineeringSlugs.includes(slug as EngineeringSlug)) notFound();

  return <EngineeringDetailPage slug={slug as EngineeringSlug} locale="en" />;
}
