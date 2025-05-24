"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

const CATEGORY_CONFIG = {
  langs: { color: "text-blue-600", icon: "💻", label: "Languages" },
  frameworks: { color: "text-green-600", icon: "🛠️", label: "Frameworks" },
  orms: { color: "text-purple-600", icon: "🗄️", label: "ORMs" },
  tools: { color: "text-yellow-600", icon: "🧰", label: "Tools" },
  cloud: { color: "text-cyan-600", icon: "☁️", label: "Cloud" },
  databases: { color: "text-pink-600", icon: "💾", label: "Databases" },
  devops: { color: "text-red-600", icon: "🚀", label: "DevOps" },
} as const;

type TechCategory = keyof typeof CATEGORY_CONFIG;

interface TechItem {
  name: string;
  category: TechCategory;
  subcategory?: string;
}

interface FrameworkSubcategories {
  [subcategory: string]: string[];
}

interface FrameworkCategories {
  [frameworkType: string]: FrameworkSubcategories;
}

interface TechStack {
  langs?: string[];
  frameworks?: FrameworkCategories;
  orms?: string[];
  tools?: string[];
  cloud?: string[];
  databases?: string[];
  devops?: string[];
}

export default function TechStackSearch({
  techs,
}: {
  techs: TechStack | undefined;
}) {
  const [search, setSearch] = useState("");

  const allTechs: TechItem[] = Object.entries(techs ?? {}).flatMap(
    ([category, items]) => {
      if (category === "frameworks" && typeof items === "object") {
        const frameworkItems = items as FrameworkCategories;
        return Object.entries(frameworkItems).flatMap(([sub, techArr]) =>
          Object.entries(techArr).flatMap(([subName, techList]) =>
            techList.map((tech) => ({
              name: tech,
              category: category as TechCategory,
              subcategory: `${sub} - ${subName}`,
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
            const { color, icon, label } = CATEGORY_CONFIG[category] ?? {
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
                <div className={`text-2xl ${color}`}>{icon}</div>
                <div className="text-lg font-semibold text-gray-800">
                  {name}
                </div>
                <div className="text-sm text-gray-500">
                  {label}
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
