"use client";

import { skills } from "@/data/content";
import { motion } from "framer-motion";
import { Layers3 } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5 }}
          className="card-sheen rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_70px_rgba(15,23,42,0.07)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none md:p-10"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(239,68,68,0.08))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300">
                <Layers3 className="h-3.5 w-3.5" />
                Skills
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-5xl">
                A stack shaped around backend, cloud, and applied AI work.
              </h2>
            </div>

            <div className="max-w-xl rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,244,239,0.92))] px-5 py-4 shadow-[0_12px_32px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] dark:shadow-none">
              <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400 md:text-base">
                Tools and technologies I use to build production-ready systems and
                practical developer workflows.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ y: -2 }}
                className="hover-lift rounded-full border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,244,239,0.96))] px-4 py-2.5 text-sm font-medium text-neutral-700 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-red-500/30 hover:text-red-600 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] dark:text-neutral-300 dark:shadow-none dark:hover:border-sky-400/30 dark:hover:text-sky-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
