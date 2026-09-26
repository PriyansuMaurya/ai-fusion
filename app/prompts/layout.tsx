import type { Metadata } from "next";
import prompts from "../../database/prompts.json";

const title = "AI prompts";
const description = "Browse reusable AI prompts for clearer, more useful conversations.";
const canonical = "https://aifusion.maurya.ie/prompts/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/prompts/" },
  openGraph: { title, description, url: canonical },
  twitter: { title, description },
};

export default function PromptsLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: canonical,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: prompts.map((prompt, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: prompt.title,
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