"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Code2 } from "lucide-react";
import { profile } from "@/data/content";

const pillars = [
  {
    title: "Backend Engineering",
    description: "Reliable APIs, system thinking, and clean implementation.",
    icon: Code2,
  },
  {
    title: "Cloud & Scale",
    description: "Practical cloud workflows focused on speed and maintainability.",
    icon: Cloud,
  },
  {
    title: "AI Products",
    description: "Computer vision and AI-driven experiences built for real use.",
    icon: BrainCircuit,
  },
];

export default function About() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5 }}
            className="card-sheen rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:rounded-[2rem] sm:p-8 md:p-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(239,68,68,0.08))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300">
              About
            </div>

            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl md:text-5xl">
              Building software with depth, clarity, and real-world intent.
            </h2>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-8 md:text-lg">
              I&apos;m a {profile.role.toLowerCase()} with strong foundations in
              Data Structures and Algorithms, Object-Oriented Programming, and
              systems thinking. I enjoy building practical products across
              backend engineering, cloud computing, and AI-driven applications.
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-8 md:text-lg">
              I actively participate in hackathons and competitive programming,
              and I love turning ambitious ideas into reliable, scalable
              software that people can actually use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="grid gap-5"
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="card-sheen hover-lift rounded-[1.5rem] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,245,240,0.94))] p-5 shadow-[0_14px_50px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] dark:shadow-none sm:rounded-[1.75rem] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-black/5 bg-black/5 p-3 text-red-600 dark:border-white/10 dark:bg-white/5 dark:text-sky-300">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
