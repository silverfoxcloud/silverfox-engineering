import type { MetadataRoute } from "next";
import { engineeringSlugs, platformSlugs } from "@/data/engineering-pages";
import { packageSlugs } from "@/data/packages";
import { engineeringNotes, architectureDecisions, buildStories } from "@/data/publications";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://engineering.silverfoxcloud.com";

  const entry = (enPath: string, faPath: string, priority: number) => [
    {
      url: base + enPath,
      priority,
      alternates: {
        languages: {
          en: base + enPath,
          fa: base + faPath,
        },
      },
    },
    {
      url: base + faPath,
      priority,
      alternates: {
        languages: {
          en: base + enPath,
          fa: base + faPath,
        },
      },
    },
  ];

  return [
    ...entry("/", "/fa/", 1),
    ...engineeringSlugs.flatMap((slug) =>
      entry("/" + slug + "/", "/fa/" + slug + "/", 0.85),
    ),
    ...platformSlugs.flatMap((slug) =>
      entry(
        "/platforms/" + slug + "/",
        "/fa/platforms/" + slug + "/",
        0.75,
      ),
    ),
    ...entry("/packages/", "/fa/packages/", 0.82),
    ...packageSlugs.flatMap((slug) =>
      entry(
        "/packages/" + slug + "/",
        "/fa/packages/" + slug + "/",
        0.72,
      ),
    ),
    ...entry("/engineering/", "/fa/engineering/", 0.78),
    ...engineeringNotes.flatMap((record) =>
      entry("/engineering/" + record.slug + "/", "/fa/engineering/" + record.slug + "/", 0.68),
    ),
    ...entry("/architecture-decisions/", "/fa/architecture-decisions/", 0.78),
    ...architectureDecisions.flatMap((record) =>
      entry("/architecture-decisions/" + record.slug + "/", "/fa/architecture-decisions/" + record.slug + "/", 0.68),
    ),
    ...entry("/build-stories/", "/fa/build-stories/", 0.78),
    ...buildStories.flatMap((record) =>
      entry("/build-stories/" + record.slug + "/", "/fa/build-stories/" + record.slug + "/", 0.68),
    ),
    ...entry("/changelog/", "/fa/changelog/", 0.8),
  ];
}
