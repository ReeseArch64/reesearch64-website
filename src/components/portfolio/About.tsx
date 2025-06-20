"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const SECTION_STYLE = "max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8";
const TEXT_STYLE = "text-lg leading-relaxed text-gray-800 dark:text-gray-200";

const formatAboutText = (text: string, t: (key: string) => string) => {
  if (!text) return text;

  const keywords = [
    t("about.keywords.developer"),
    t("about.keywords.engineer"),
    t("about.keywords.specialist"),
    t("about.keywords.technology"),
    t("about.keywords.experience"),
    t("about.keywords.skills"),
    t("about.keywords.projects"),
    t("about.keywords.professional"),
  ];

  return text.split(" ").map((word, i) => {
    const cleanWord = word.replace(/[.,!?;:]/g, "");
    return keywords.includes(cleanWord.toLowerCase()) ? (
      <b key={i}>{word} </b>
    ) : (
      <span key={i}>{word} </span>
    );
  });
};

interface IProps {
  about: string;
}

export default function About({ about }: IProps) {
  const { t } = useTranslation();
  const data = about?.trim();

  const formattedAbout = about ? formatAboutText(data, t) : null;

  return (
    <section
      className={SECTION_STYLE}
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="flex justify-between items-center mb-8">
        <h2
          className="text-3xl font-bold text-gray-900 dark:text-white"
          id="about-heading"
        >
          {t("about.title")}
        </h2>
        <Button asChild variant="outline">
          <a
            href="/alanguerra.pdf"
            download="alan_guerra_dev.pdf"
            className="flex items-center gap-2"
          >
            <Download size={18} />
            {t("about.downloadCV")}
          </a>
        </Button>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <p className={TEXT_STYLE}>
          {formattedAbout || t("about.emptyMessage")}
        </p>
      </div>
    </section>
  );
}
