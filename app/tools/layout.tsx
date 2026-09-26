import type { Metadata } from "next";
import tools from "../../database/tools.json";

const title = "AI tools";
const description = "Explore curated AI tools for making, testing, and shipping.";
const canonical = "https://aifusion.maurya.ie/tools/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tools/" },
  openGraph: { title, description, url: canonical },
  twitter: { title, description },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: canonical,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: tools.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tool.title,
        ...(tool.url ? { url: tool.url } : {}),
      })),
    },
  };

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}