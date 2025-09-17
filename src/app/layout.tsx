import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased dark:bg-zinc-950 dark:text-zinc-200">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
