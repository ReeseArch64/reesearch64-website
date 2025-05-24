"use client";

import { Button } from "@/components/ui/button";
import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";
import { motion } from "framer-motion";
import type {JSX} from "react";
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

interface SocialIconsType {
  [key: string]: {
    icon: JSX.Element;
    label: string;
    color: string;
  };
}

const SOCIAL_ICONS: SocialIconsType = {
  linkedin: {
    icon: <FaLinkedin className="w-5 h-5" />,
    label: "LinkedIn",
    color: "hover:text-[#0A66C2]",
  },
  github: {
    icon: <FaGithub className="w-5 h-5" />,
    label: "GitHub",
    color: "hover:text-[#333] dark:hover:text-[#f5f5f5]",
  },
  twitter: {
    icon: <FaTwitter className="w-5 h-5" />,
    label: "Twitter",
    color: "hover:text-[#1DA1F2]",
  },
  instagram: {
    icon: <FaInstagram className="w-5 h-5" />,
    label: "Instagram",
    color: "hover:text-[#E1306C]",
  },
  facebook: {
    icon: <FaFacebook className="w-5 h-5" />,
    label: "Facebook",
    color: "hover:text-[#1877F2]",
  },
  youtube: {
    icon: <FaYoutube className="w-5 h-5" />,
    label: "YouTube",
    color: "hover:text-[#FF0000]",
  },
  tiktok: {
    icon: <FaTiktok className="w-5 h-5" />,
    label: "TikTok",
    color: "hover:text-[#000000] dark:hover:text-[#69C9D0]",
  },
};

export default function Contact({ data }: { data: ApiDataInterface }) {
  const contact = data.contact || {};
  const social = data.socialMedia || {};

  const hasContact = contact.email || contact.phone;
  const hasSocial = Object.values(social).some(Boolean);

  const MotionButton = motion(Button);

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contato
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Interessado em trabalhar juntos? Entre em contato!
          </motion.p>

          {hasContact ? (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {contact.email && (
                <div className="flex items-center gap-4">
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
              {contact.phone && (
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <FaPhone className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              )}
            </motion.div>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Nenhuma informação de contato disponível no momento.
            </p>
          )}

          <motion.div
            className="mt-12 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Redes Sociais
            </h3>
            {hasSocial ? (
              <div className="flex flex-wrap gap-4">
                {Object.entries(SOCIAL_ICONS).map(([key, config]) => {
                  const url = social[key as keyof typeof social];

                  if (url) {
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
                  }
                  return null;
                })}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Nenhuma rede social cadastrada no momento.
              </p>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="space-y-3">
              <label
                htmlFor="name"
                className="block font-medium text-gray-700 dark:text-gray-300"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="message"
                className="block font-medium text-gray-700 dark:text-gray-300"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                placeholder="Sua mensagem..."
                required
              ></textarea>
            </div>
            <MotionButton
              type="submit"
              className="w-full py-3 text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensagem
            </MotionButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
