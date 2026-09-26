import type { Metadata } from "next";
import datasets from "../../database/datasets.json";

const title = "AI datasets";
const description = "Find public datasets for AI research, experiments, and model development.";
const canonical = "https://aifusion.maurya.ie/datasets/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/datasets/" },
  openGraph: { title, description, url: canonical },
  twitter: { title, description },
};

export default function DatasetsLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: canonical,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: datasets.map((dataset, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: dataset.title,
        url: dataset.url,
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