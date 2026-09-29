"use client";

import { useLocale } from "@/components/LocaleProvider";
import PortalPage from "@/components/PortalPage";
import EngineeringDetailPage from "@/components/EngineeringDetailPage";
import PlatformDetailPage from "@/components/PlatformDetailPage";
import { PackageDirectoryPage, PackageDetailPage } from "@/components/PackagePages";
import {
  ChangelogPage,
  PublicationDetailPage,
  PublicationIndexPage,
} from "@/components/PublicationPages";
import type { EngineeringSlug, PlatformSlug } from "@/data/engineering-pages";
import { getPackage, type PackageSlug } from "@/data/packages";
import {
  architectureDecisions,
  buildStories,
  engineeringNotes,
  type PublicationKind,
} from "@/data/publications";

export function LocalizedHome() {
  const { locale } = useLocale();
  return <PortalPage locale={locale} />;
}

export function LocalizedEngineeringPage({ slug }: { slug: EngineeringSlug }) {
  const { locale } = useLocale();
  return <EngineeringDetailPage slug={slug} locale={locale} />;
}

export function LocalizedPlatformPage({ slug }: { slug: PlatformSlug }) {
  const { locale } = useLocale();
  return <PlatformDetailPage slug={slug} locale={locale} />;
}

export function LocalizedPackageDirectory() {
  const { locale } = useLocale();
  return <PackageDirectoryPage locale={locale} />;
}

export function LocalizedPackageDetail({ slug }: { slug: PackageSlug }) {
  const { locale } = useLocale();
  const pkg = getPackage(slug);
  if (!pkg) return null;
  return <PackageDetailPage locale={locale} pkg={pkg} />;
}

const publicationSets = {
  note: engineeringNotes,
  decision: architectureDecisions,
  story: buildStories,
} as const;

export function LocalizedPublicationIndex({ kind }: { kind: PublicationKind }) {
  const { locale } = useLocale();
  return <PublicationIndexPage locale={locale} kind={kind} />;
}

export function LocalizedPublicationDetail({
  kind,
  slug,
}: {
  kind: PublicationKind;
  slug: string;
}) {
  const { locale } = useLocale();
  const record = publicationSets[kind].find((item) => item.slug === slug);
  if (!record) return null;
  return <PublicationDetailPage locale={locale} record={record} />;
}

export function LocalizedChangelog() {
  const { locale } = useLocale();
  return <ChangelogPage locale={locale} />;
}
