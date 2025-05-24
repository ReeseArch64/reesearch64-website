/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import type {
  TechsInterface,
  FrameworksInterface,
} from "@/interfaces/ApiDataInterface";
import { CATEGORY_CONFIG } from "../constants/categories";

type TechCategory = keyof typeof CATEGORY_CONFIG;

interface TechItem {
  name: string;
  category: TechCategory;
  subcategory?: string;
}

export default function TechStackSearch({
  techs,
}: {
  techs: TechsInterface | undefined;
}) {
  const [search, setSearch] = useState("");

  const allTechs: TechItem[] = Object.entries(techs ?? {}).flatMap(
    ([category, items]) => {
      if (category === "frameworks" && typeof items === "object") {
        const frameworkItems = items as FrameworksInterface;
        return Object.entries(frameworkItems).flatMap(
          ([frameworkType, subcategories]) =>
            Object.entries(subcategories).flatMap(([subcategory, techList]) =>
              //@ts-ignore
              techList.map((tech) => ({
                name: tech,
                category: "frameworks" as TechCategory,
                subcategory: `${frameworkType} - ${subcategory}`,
              }))
            )
        );
      }

      return Array.isArray(items)
        ? items.map((tech) => ({
            name: tech,
            category: category as TechCategory,
          }))
        : [];
    }
  );

  const filtered =
    search.trim() === ""
      ? []
      : allTechs.filter((t) => {
          const terms = search.toLowerCase().split(" ").filter(Boolean);
          return terms.every((term) => t.name.toLowerCase().includes(term));
        });

  return (
    <section className="py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold mb-6 text-center text-gray-800"
      >
        Tech Stack
      </motion.h2>

      <div className="max-w-xl mx-auto mb-8">
        <Input
          placeholder="Search technologies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-xl px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {search.trim() === "" ? (
        <p className="text-center text-gray-500">
          Type something to search for technologies.
        </p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500">No technologies found.</p>
      ) : (
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map(({ name, category, subcategory }) => {
            const config = CATEGORY_CONFIG[category] ?? {
              color: "text-gray-600",
              icon: "❓",
              label: "Other",
            };

            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-2 border border-gray-100"
              >
                <div className={`text-2xl ${config.color}`}>{config.icon}</div>
                <div className="text-lg font-semibold text-gray-800">
                  {name}
                </div>
                <div className="text-sm text-gray-500">
                  {config.label}
                  {subcategory ? ` • ${subcategory}` : ""}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
