import React from "react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Oday Tanan | Software Engineer & Web Developer",
  description: "Portfolio of Oday Tanan - Specialized in React.js, Next.js, Laravel and Modern Fullstack Development. 2+ years of experience building interactive web applications.",
  keywords: ["React", "Next.js", "TypeScript", "Frontend Developer", "Software Engineer", "Web Developer", "Portfolio", "Laravel", "Full Stack Developer"],
  authors: [{ name: "Oday Tanan" }],
  creator: "Oday Tanan",
  publisher: "Oday Tanan",
  metadataBase: new URL("https://oday-tanan.tech"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "ar": "/ar",
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/logo.png",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.png",
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Oday Tanan | Software Engineer & Web Developer",
    description: "Portfolio of Oday Tanan - Specialized in React.js, Next.js, and Modern Frontend Development",
    type: "website",
    locale: "en_US",
    url: "https://oday-tanan.tech",
    siteName: "Oday Tanan Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Oday Tanan - Software Engineer & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oday Tanan | Software Engineer & Web Developer",
    description: "Portfolio of Oday Tanan - Specialized in React.js and Modern Frontend Development",
    images: ["/logo.png"],
    creator: "@odaytanan",
  },
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
