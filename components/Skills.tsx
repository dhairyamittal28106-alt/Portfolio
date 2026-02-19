"use client";

import { skills } from "@/data/content";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white text-center"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                cursor-default
                px-5 py-2
                bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-white
                rounded-full
                text-sm
                font-medium
                border-[1.5px] border-amber-500/30 dark:border-blue-500/30
                hover:border-amber-500/50 dark:hover:border-blue-500/50
                hover:bg-amber-500/5 dark:hover:bg-blue-500/10
                hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                transition-colors duration-300
              "
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
