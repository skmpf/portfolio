import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import {
  siteUrl,
  siteTitleDefault,
  siteDescriptionShared,
} from "./metadata-constants";

const inter = Inter({ variable: "--font-inter-sans", subsets: ["latin"] });

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-white text-gray-900 antialiased dark:bg-zinc-950 dark:text-zinc-200`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
