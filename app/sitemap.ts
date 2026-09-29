import type { MetadataRoute } from "next";
import { engineeringSlugs, platformSlugs } from "@/data/engineering-pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://engineering.silverfoxcloud.com";

  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/fa/`, priority: 0.9 },
    ...engineeringSlugs.flatMap(slug => [
      { url: `${base}/${slug}/`, priority: 0.85 },
      { url: `${base}/fa/${slug}/`, priority: 0.8 },
    ]),
    ...platformSlugs.flatMap(slug => [
      { url: `${base}/platforms/${slug}/`, priority: 0.75 },
      { url: `${base}/fa/platforms/${slug}/`, priority: 0.7 },
    ]),
  ];
}
