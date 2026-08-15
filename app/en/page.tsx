import type { Metadata } from "next";
import { AcademicHomepage } from "../components/AcademicHomepage";
import { enContent } from "../homepage-data";

export const metadata: Metadata = {
  title: { absolute: "Caicheng Wang | Embodied AI" },
  description:
    "Ph.D. candidate at Zhejiang University working on VLA post-training, robot data infrastructure, and real-world deployment.",
  alternates: {
    canonical: "/en/",
    languages: {
      "zh-CN": "/",
      en: "/en/",
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

export default function EnglishHome() {
  return <AcademicHomepage content={enContent} />;
}
