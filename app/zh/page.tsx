import type { Metadata } from "next";
import { AcademicHomepage } from "../components/AcademicHomepage";
import { zhContent } from "../homepage-data";

export const metadata: Metadata = {
  title: { absolute: "王才城｜具身智能算法" },
  description:
    "浙江大学机械工程博士，专注 VLA 真机策略后训练、机器人数据采集基础设施与真机部署。",
  alternates: {
    canonical: "/zh/",
    languages: {
      "zh-CN": "/zh/",
      en: "/",
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

export default function ChineseHome() {
  return <AcademicHomepage content={zhContent} />;
}
