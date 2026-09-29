import type { MetadataRoute } from "next";
import { engineeringSlugs, platformSlugs } from "@/data/engineering-pages";
import { packageSlugs } from "@/data/packages";
import {
  engineeringNotes,
  architectureDecisions,
  buildStories,
} from "@/data/publications";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://engineering.silverfoxcloud.com";
  const entry = (path: string, priority: number) => ({
    url: base + path,
    priority,
  });

  return [
    entry("/", 1),
    ...engineeringSlugs.map((slug) => entry("/" + slug + "/", 0.85)),
    ...platformSlugs.map((slug) => entry("/platforms/" + slug + "/", 0.75)),
    entry("/packages/", 0.82),
    ...packageSlugs.map((slug) => entry("/packages/" + slug + "/", 0.72)),
    entry("/engineering/", 0.78),
    ...engineeringNotes.map((record) =>
      entry("/engineering/" + record.slug + "/", 0.68),
    ),
    entry("/architecture-decisions/", 0.78),
    ...architectureDecisions.map((record) =>
      entry("/architecture-decisions/" + record.slug + "/", 0.68),
    ),
    entry("/build-stories/", 0.78),
    ...buildStories.map((record) =>
      entry("/build-stories/" + record.slug + "/", 0.68),
    ),
    entry("/changelog/", 0.8),
  ];
}
