import { notFound } from "next/navigation";
import EngineeringDetailPage from "@/components/EngineeringDetailPage";
import { engineeringPages, engineeringSlugs, type EngineeringSlug } from "@/data/engineering-pages";

export function generateStaticParams() {
  return engineeringSlugs.map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    if (!engineeringSlugs.includes(slug as EngineeringSlug)) return {};
    const page = engineeringPages[slug as EngineeringSlug].fa;
    return {
      title: page.title,
      description: page.lead,
      openGraph: { title: page.title, description: page.lead, url: `/fa/${slug}/` },
      alternates: {
        canonical: `/fa/${slug}/`,
        languages: { en: `/${slug}/`, "fa-IR": `/fa/${slug}/` },
      },
    };
  });
}

export default async function EngineeringPageFa({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!engineeringSlugs.includes(slug as EngineeringSlug)) notFound();
  return <EngineeringDetailPage slug={slug as EngineeringSlug} locale="fa" />;
}
