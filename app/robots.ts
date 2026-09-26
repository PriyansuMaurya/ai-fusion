import type { MetadataRoute } from "next";

const siteUrl = "https://aifusion.maurya.ie";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}