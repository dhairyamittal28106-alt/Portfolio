"use client";

import { motion } from "framer-motion";
import { achievements, certifications } from "@/data/content";
import { Award, BadgeCheck, Trophy } from "lucide-react";

const blocks = [
  {
    title: "Hackathons & Competitions",
    items: achievements,
    icon: Trophy,
  },
  {
    title: "Competitive Programming",
    text: "Regularly practice DSA and problem-solving, with strong comfort in arrays, strings, recursion, linked lists, stacks, queues, trees, sorting, and searching. I am especially interested in backend systems, cloud computing, and AI-powered products.",
    icon: Award,
  },
  {
    title: "Certifications",
    items: certifications,
    icon: BadgeCheck,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(239,68,68,0.08))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300">
            <Trophy className="h-3.5 w-3.5" />
            Experience
          </div>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl md:text-5xl">
            Competitive work, learning, and achievements that sharpen execution.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="card-sheen hover-lift rounded-[1.5rem] border border-black/5 bg-white/80 p-5 shadow-[0_18px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:rounded-[1.8rem] sm:p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-black/5 text-red-600 dark:border-white/10 dark:bg-white/5 dark:text-sky-300">
                <block.icon className="h-5 w-5" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                {block.title}
              </h3>

              {block.items ? (
                <ul className="mt-5 space-y-3">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-black/5 bg-black/[0.02] px-4 py-3 text-sm leading-6 text-neutral-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                  {block.text}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
