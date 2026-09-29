import type { MetadataRoute } from "next";
import { engineeringSlugs, platformSlugs } from "@/data/engineering-pages";

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
  ];
}
