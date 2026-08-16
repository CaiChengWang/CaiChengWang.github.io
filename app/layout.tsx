import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Caicheng Wang | Embodied AI",
    template: "%s | Caicheng Wang",
  },
  description:
    "Ph.D. candidate at Zhejiang University working on VLA post-training, robot data infrastructure, and real-world deployment.",
  keywords: [
    "Caicheng Wang",
    "embodied AI",
    "VLA",
    "robot learning",
    "policy post-training",
    "Human-in-the-Loop",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/zh/",
      en: "/",
    },
  },
  openGraph: {
    title: "Caicheng Wang | Embodied AI",
    description:
      "VLA post-training, robot data infrastructure, and real-world deployment.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Caicheng Wang — Embodied AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caicheng Wang | Embodied AI",
    description:
      "VLA post-training, robot data infrastructure, and real-world deployment.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/fa-solid-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/fa-brands-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
