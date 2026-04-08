import React from "react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Oday Tanan | Software Engineer & Web Developer",
  description: "Portfolio of Oday Tanan - Specialized in React.js, Next.js, and Modern Frontend Development. 2+ years of experience building interactive web applications.",
  keywords: ["React", "Next.js", "TypeScript", "Frontend Developer", "Software Engineer", "Web Developer", "Portfolio"],
  authors: [{ name: "Oday Tanan" }],
  openGraph: {
    title: "Oday Tanan | Software Engineer & Web Developer",
    description: "Portfolio of Oday Tanan - Specialized in React.js and Modern Frontend Development",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oday Tanan | Software Engineer & Web Developer",
    description: "Portfolio of Oday Tanan - Specialized in React.js and Modern Frontend Development",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "preconnect": "https://cdn.jsdelivr.net",
    "dns-prefetch": "https://cdn.jsdelivr.net",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
