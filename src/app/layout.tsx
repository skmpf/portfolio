import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import {
  siteUrl,
  siteTitleDefault,
  siteDescriptionShared,
} from "./metadata-constants";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: siteTitleDefault,
    template: `%s | ${siteTitleDefault}`,
  },
  description: siteDescriptionShared,
  authors: [{ name: "Sebastien Kempf", url: siteUrl }],
  creator: "Sebastien Kempf",
  publisher: "Sebastien Kempf",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteTitleDefault,
    description: siteDescriptionShared,
    url: siteUrl,
    siteName: siteTitleDefault,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteTitleDefault,
    description: siteDescriptionShared,
    creator: "@sebastienkempf",
  },
  keywords: [
    "sebastien kempf",
    "frontend developer",
    "senior frontend engineer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "javascript developer",
    "web developer",
    "mobile developer",
    "react native developer",
    "deezer",
    "freelance developer",
    "paris",
    "france",
    "portfolio",
    "full stack developer",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sebastien Kempf",
    url: siteUrl,
    jobTitle: "Frontend Developer",
    sameAs: [
      "https://www.linkedin.com/in/sebastienkempf/",
      "https://github.com/skmpf",
      "https://bsky.app/profile/skempf.com",
    ],
    knowsAbout: ["React.js", "Next.js", "TypeScript", "JavaScript", "Web Development", "Mobile Development"],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`bg-white text-gray-900 antialiased dark:bg-zinc-950 dark:text-zinc-200`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
