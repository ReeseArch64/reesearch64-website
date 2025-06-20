"use client";

import { useTranslation } from "react-i18next";

interface IProps {
  github: string;
  name: string;
}

export default function Footer({ github, name }: IProps) {
  const { t } = useTranslation();

  return (
    <footer className="max-w-6xl mx-auto py-8 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()}{" "}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {name}
        </a>
        . {t("footer.rightsReserved")}
      </p>
    </footer>
  );
}
