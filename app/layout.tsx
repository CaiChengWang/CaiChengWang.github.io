import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "王才城｜具身智能算法",
    template: "%s｜王才城",
  },
  description:
    "浙江大学机械工程博士，专注 VLA 真机策略后训练、机器人数据采集基础设施与真机部署。",
  keywords: [
    "王才城",
    "具身智能",
    "VLA",
    "机器人学习",
    "策略后训练",
    "Human-in-the-Loop",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      en: "/en/",
    },
  },
  openGraph: {
    title: "王才城｜具身智能算法",
    description:
      "VLA 策略后训练、机器人数据采集基础设施与真机部署。",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "王才城具身智能算法个人主页",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "王才城｜具身智能算法",
    description:
      "VLA 策略后训练、机器人数据采集基础设施与真机部署。",
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
    <html lang="zh-CN">
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
