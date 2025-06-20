import type {
  ContactInterface,
  SocialMediaInterface,
} from "@/interfaces/ApiDataInterface";
import { motion } from "framer-motion";
import type { JSX } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface SocialIconsType {
  [key: string]: {
    icon: JSX.Element;
    label: string;
    color: string;
  };
}

interface IProps {
  social: SocialMediaInterface;
  contact: ContactInterface;
}

const formatPhoneNumber = (phone: string) => {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

export default function Contact({ social, contact }: IProps) {
  const { t } = useTranslation();

  const SOCIAL_ICONS: SocialIconsType = {
    linkedin: {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: t("contact.social.linkedin"),
      color: "hover:text-[#0A66C2]",
    },
    github: {
      icon: <FaGithub className="w-5 h-5" />,
      label: t("contact.social.github"),
      color: "hover:text-[#333] dark:hover:text-[#f5f5f5]",
    },
    twitter: {
      icon: <FaTwitter className="w-5 h-5" />,
      label: t("contact.social.twitter"),
      color: "hover:text-[#1DA1F2]",
    },
    instagram: {
      icon: <FaInstagram className="w-5 h-5" />,
      label: t("contact.social.instagram"),
      color: "hover:text-[#E1306C]",
    },
    facebook: {
      icon: <FaFacebook className="w-5 h-5" />,
      label: t("contact.social.facebook"),
      color: "hover:text-[#1877F2]",
    },
    youtube: {
      icon: <FaYoutube className="w-5 h-5" />,
      label: t("contact.social.youtube"),
      color: "hover:text-[#FF0000]",
    },
    tiktok: {
      icon: <FaTiktok className="w-5 h-5" />,
      label: t("contact.social.tiktok"),
      color: "hover:text-[#000000] dark:hover:text-[#69C9D0]",
    },
  };

  const hasContact = contact.email || contact.whatsapp;
  const hasSocial = Object.values(social).some(Boolean);

  return (
    <section id="contact" className="max-w-2xl mx-auto py-12 px-4 text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("contact.title")}
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {t("contact.subtitle")}
      </motion.p>

      {hasContact ? (
        <motion.div
          className="space-y-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {contact.email && (
            <div className="flex justify-center items-center gap-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                <FaEnvelope className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              >
                {contact.email}
              </a>
            </div>
          )}
          {contact.whatsapp && (
            <div className="flex justify-center items-center gap-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                <FaPhone className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </div>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              >
                {formatPhoneNumber(contact.whatsapp)}
              </a>
            </div>
          )}
        </motion.div>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
          {t("contact.noContactInfo")}
        </p>
      )}

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
          {t("contact.socialTitle")}
        </h3>
        {hasSocial ? (
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(SOCIAL_ICONS).map(([key, config]) => {
              const url = social[key as keyof typeof social];
              if (!url) return null;

              return (
                <motion.a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 ${config.color} transition-all`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {config.icon}
                  <span className="text-gray-700 dark:text-gray-300">
                    {config.label}
                  </span>
                </motion.a>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("contact.noSocialInfo")}
          </p>
        )}
      </motion.div>
    </section>
  );
}
