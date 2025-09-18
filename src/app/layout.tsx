import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cal.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="theme-color"
          content="#09090b"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          property="twitter:image"
          content="https://skempf.com/android-chrome-512x512.png"
        />
        <meta property="og:image" content="https://skempf.com/android-chrome-512x512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body className="bg-white text-gray-900 antialiased dark:bg-zinc-950 dark:text-zinc-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sebastien Kempf",
              jobTitle: "Frontend Engineer",
              description:
                "Senior frontend developer specializing in React.js, Next.js, and modern web technologies",
              url: "https://skempf.com",
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
              alumniOf: "Deezer",
              workLocation: "Remote",
              offers: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Web Development Services",
                  description: "Frontend development and consulting services",
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
