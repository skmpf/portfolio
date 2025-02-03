import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ variable: "--font-inter-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sebastien Kempf",
  description: "Frontend developer and tech enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased `}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
