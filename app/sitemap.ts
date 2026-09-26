import type { MetadataRoute } from "next";

const siteUrl = "https://aifusion.maurya.ie";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/tools/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/prompts/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/datasets/`, changeFrequency: "weekly", priority: 0.8 },
  ];
}