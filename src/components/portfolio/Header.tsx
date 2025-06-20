"use client";

import { useTranslation } from "react-i18next";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import type { PersonInterface } from "@/interfaces/ApiDataInterface";
import i18n from "@/i18n";

interface IProps {
  data: PersonInterface;
  avatar: string;
}

export default function Header({ avatar, data }: IProps) {
  const { t } = useTranslation();
  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: "pt", name: "Português" },
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
  ];

  return (
    <header
      className="max-w-6xl mx-auto py-8 flex flex-col md:flex-row items-center gap-8"
      role="banner"
      aria-label={t("header.ariaLabel")}
    >
      <div
        className="rounded-full p-[3px]"
        style={{
          background: `conic-gradient(
            from 180deg at top left,
            red,
            orange,
            yellow,
            lime,
            green,
            turquoise,
            cyan,
            blue,
            indigo,
            violet,
            pink,
            red
          )`,
        }}
        aria-hidden="true"
      >
        <Avatar className="h-32 w-32 border-4 border-background">
          <AvatarImage
            src={avatar}
            alt={t("header.avatarAlt", { name: data.name })}
          />
          <AvatarFallback aria-hidden="true">{initials}</AvatarFallback>
        </Avatar>
      </div>

      <div className="text-center md:text-left flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h1
              className="text-4xl font-bold tracking-tight"
              tabIndex={0}
              aria-label={t("header.nameAriaLabel", { name: data.name })}
            >
              {data.name}
            </h1>

            <p
              className="text-xl text-muted-foreground mt-2"
              tabIndex={0}
              aria-label={t("header.roleAriaLabel", {
                role: data.role,
                level: data.level,
              })}
            >
              {data.role} - {data.level}
            </p>

            <p
              className="text-muted-foreground mt-1"
              tabIndex={0}
              aria-label={t("header.locationAriaLabel", {
                location: data.location,
              })}
            >
              {data.location}
            </p>

            <p
              className="text-muted-foreground mt-2"
              tabIndex={0}
              aria-label={t("header.languagesAriaLabel", {
                languages: data.languages.join(", "),
              })}
            >
              <strong>{t("header.languages")}:</strong>{" "}
              {data.languages.join(", ")}
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="ml-4">
                <Globe className="h-4 w-4" />
                <span className="sr-only">{t("header.changeLanguage")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <nav
          className="flex gap-4 mt-6 justify-center md:justify-start"
          aria-label={t("header.navAriaLabel")}
        >
          <Button asChild>
            <a href="#contact" aria-label={t("header.contactButtonAriaLabel")}>
              {t("header.contactButton")}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="#projects"
              aria-label={t("header.projectsButtonAriaLabel")}
            >
              {t("header.projectsButton")}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
