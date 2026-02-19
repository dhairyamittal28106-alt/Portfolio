"use client";

import { profile } from "@/data/content";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
          Let’s Build Something 🕵️
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 mb-10 text-xl">
          Open to internships, freelance work, and collaborations.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${profile.email}`}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold 
                       hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            Email Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={profile.github}
            target="_blank"
            className="px-8 py-3 rounded-full border-[1.5px] border-amber-500/30 dark:border-blue-500/30 text-neutral-900 dark:text-white font-medium 
                       hover:bg-amber-500/5 dark:hover:bg-blue-500/10 hover:border-amber-500/50 dark:hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
          >
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={profile.linkedin}
            target="_blank"
            className="px-8 py-3 rounded-full border-[1.5px] border-amber-500/30 dark:border-blue-500/30 text-neutral-900 dark:text-white font-medium 
                       hover:bg-amber-500/5 dark:hover:bg-blue-500/10 hover:border-amber-500/50 dark:hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
