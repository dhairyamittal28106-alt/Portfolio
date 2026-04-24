"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/content";

const quickLinks = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
];

const highlights = [
  "Backend systems",
  "Cloud-native builds",
  "AI product development",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="aurora-drift absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(248,113,113,0.096),transparent_22%),radial-gradient(circle_at_bottom,rgba(253,164,175,0.048),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.04))] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_22%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.035))]" />
      <div className="ambient-pulse absolute left-1/2 top-32 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-orange-400/10 blur-[120px] dark:bg-sky-500/10" />
      <div className="float-soft absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-rose-300/6 blur-[140px] dark:bg-cyan-500/8" />
      <div className="float-soft absolute right-0 top-12 -z-10 h-72 w-72 rounded-full bg-red-300/6 blur-[140px] dark:bg-blue-500/8" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(248,113,113,0.048))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300">
            Available for work
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-5xl md:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-4 max-w-2xl text-base font-medium text-orange-700 dark:text-sky-300 sm:text-lg md:text-xl">
            {profile.role}
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-8 md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="hover-lift rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:shadow-none"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="/resume.pdf"
              download="Dhairya_Mittal_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-neutral-950"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/75 px-6 py-3.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              View Projects
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </div>

            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-neutral-800 transition-colors hover:text-orange-600 dark:text-neutral-300 dark:hover:text-sky-300"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(248,113,113,0.108),transparent_32%)] dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_32%)] blur-3xl" />

          <div className="card-sheen relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/80 p-4 shadow-[0_20px_100px_rgba(15,23,42,0.14)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
            <div className="rounded-[1.6rem] border border-black/5 bg-[linear-gradient(180deg,rgba(244,247,251,0.95),rgba(255,255,255,0.8))] p-3 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
              <div className="relative aspect-square overflow-hidden rounded-[1.35rem] bg-[#07111f]">
                <Image
                  src="/assets/avatar.png"
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-[1.4rem] border border-black/5 bg-white/90 px-4 py-4 dark:border-white/10 dark:bg-white/[0.04]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">
                  Backend, cloud, and AI systems
                </p>
              </div>
              <div className="rounded-full border border-orange-500/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(248,113,113,0.048))] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                Active
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
