import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyLocaleRedirect from "@/components/LegacyLocaleRedirect";
import {
  platformSlugs,
  type PlatformSlug,
} from "@/data/engineering-pages";

export function generateStaticParams() {
  return platformSlugs.map((slug) => ({ slug }));
}

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default async function LegacyPersianPlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!platformSlugs.includes(slug as PlatformSlug)) notFound();

  return <LegacyLocaleRedirect target={"/platforms/" + slug + "/"} locale="fa" />;
}
