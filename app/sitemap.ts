import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://engineering.silverfoxcloud.com/", priority: 1 },
    { url: "https://engineering.silverfoxcloud.com/fa/", priority: 0.9 },
  ];
}
