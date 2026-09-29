import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";
import {
  engineeringSlugs,
  type EngineeringSlug,
} from "@/data/engineering-pages";

export function generateStaticParams() {
  return engineeringSlugs.map((slug) => ({ slug }));
}

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default async function LegacyPersianEngineeringPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!engineeringSlugs.includes(slug as EngineeringSlug)) notFound();

  return <LegacyLocaleRedirect target={"/" + slug + "/"} locale="fa" />;
}
