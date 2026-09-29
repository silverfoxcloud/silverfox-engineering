import type { MetadataRoute } from "next";
import { engineeringSlugs, platformSlugs } from "@/data/engineering-pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://engineering.silverfoxcloud.com";

  return [
    { url: base + "/", priority: 1 },
    ...engineeringSlugs.map((slug) => ({
      url: base + "/" + slug + "/",
      priority: 0.85,
    })),
    ...platformSlugs.map((slug) => ({
      url: base + "/platforms/" + slug + "/",
      priority: 0.75,
    })),
  ];
}
