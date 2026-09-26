import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AI Fusion | Curated AI Tools, Prompts & Datasets",
    template: "%s | AI Fusion",
  },
  description:
    "Explore a curated directory of AI tools, reusable prompts, and public datasets for builders, researchers, and curious creators.",
  metadataBase: new URL("https://aifusion.maurya.ie"),
  applicationName: "AI Fusion",
  creator: "AI Fusion",
  publisher: "AI Fusion",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "AI Fusion",
    title: "AI Fusion | Curated AI Tools, Prompts & Datasets",
    description:
      "A curated collection of useful AI tools, prompts, and datasets for curious builders.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fusion | Curated AI Tools, Prompts & Datasets",
    description:
      "A curated collection of useful AI tools, prompts, and datasets for curious builders.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-[--light-bg] text-[--ink] dark:bg-[--dark-bg]`}
      >
        <div className="flex-1 md:mx-10">
          <Navbar />
          {children}
        </div>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://aifusion.maurya.ie/#organization",
                  name: "AI Fusion",
                  url: "https://aifusion.maurya.ie/",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://aifusion.maurya.ie/#website",
                  name: "AI Fusion",
                  url: "https://aifusion.maurya.ie/",
                  publisher: {
                    "@id": "https://aifusion.maurya.ie/#organization",
                  },
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

