import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SITE_DESCRIPTION, SITE_URL } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased dark:bg-zinc-950 dark:text-zinc-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sebastien Kempf",
              jobTitle: "Software Engineer",
              description: SITE_DESCRIPTION,
              url: SITE_URL,
              image: `${SITE_URL}/android-chrome-512x512.png`,
              sameAs: [
                "https://www.linkedin.com/in/sebastienkempf/",
                "https://github.com/skmpf",
                "https://bsky.app/profile/skempf.com",
                "https://blog.skempf.com/",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Web Development",
                "Mobile Development",
                "Frontend Development",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Deezer",
                url: "https://www.deezer.com/",
              },
              makesOffer: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Web Development Services",
                  description: "Web development and consulting services",
                },
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
