"use client";

import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";
import { motion } from "framer-motion";

const SECTION_STYLE = "max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8";
const CARD_ANIMATION = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function EducationSection({
  data,
}: {
  data: ApiDataInterface["education"];
}) {
  return (
    <section
      className={SECTION_STYLE}
      id="education"
      aria-labelledby="education-heading"
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        id="education-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <div className="space-y-8">
        {data.length > 0 ? (
          <motion.ul
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {data.map((edu, index) => (
              <motion.li
                key={`${edu.institution}-${index}`}
                variants={CARD_ANIMATION}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
                whileHover={{ scale: 1.02 }}
              >
                <article>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.course}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {edu.institution}
                  </p>
                  <time className="text-sm text-gray-500 dark:text-gray-400 mt-1 block">
                    {edu.startDate} - {edu.endDate}
                  </time>
                  {edu.description && (
                    <p className="mt-3 text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {edu.description}
                    </p>
                  )}
                </article>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-8"
          >
            <p className="text-gray-500 dark:text-gray-400">
              No education information available at the moment.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
