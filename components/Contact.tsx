"use client";

import { profile } from "@/data/content";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    primary: true,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
  },
];

const contactNotes = [
  "Open to internships, collaborations, and product-focused work.",
  "Interested in backend engineering, cloud systems, and AI applications.",
  "Available for remote-friendly opportunities and technical collaborations.",
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5 }}
          className="card-sheen relative overflow-hidden rounded-[2rem] border border-black/5 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,242,238,0.92))] p-6 shadow-[0_24px_90px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] dark:shadow-none sm:rounded-[2.25rem] sm:p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,113,113,0.06),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_30%)]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(248,113,113,0.048))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300">
              <Mail className="h-3.5 w-3.5" />
              Contact
            </div>

            <div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_340px] xl:items-start">
              <div>
                <h2 className="max-w-5xl text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl md:text-6xl md:leading-[1.02]">
                  Let&apos;s build something thoughtful, modern, and useful.
                </h2>

                <p className="mt-5 max-w-4xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-8 md:text-lg">
                  I&apos;m open to internships, collaborations, and product-focused
                  work where strong engineering and practical execution matter.
                  Whether it&apos;s backend systems, cloud infrastructure, or AI-led
                  product building, I enjoy working on ideas that turn into real,
                  reliable software.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-black/5 bg-white/75 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Quick Reach
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-3 inline-flex max-w-full items-center gap-2 break-all text-base font-semibold text-neutral-950 transition-colors hover:text-orange-600 dark:text-white dark:hover:text-sky-300 sm:text-lg"
                >
                  {profile.email}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                  Based in {profile.location} and available for remote-friendly
                  opportunities, freelance collaborations, and product builds.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {contactNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-black/5 bg-white/70 px-4 py-4 text-sm leading-7 text-neutral-600 shadow-[0_10px_30px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-400 dark:shadow-none"
                >
                  {note}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.primary ? undefined : "_blank"}
                  rel={link.primary ? undefined : "noopener noreferrer"}
                  className={
                    link.primary
                      ? "inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                      : "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  }
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                download="Dhairya_Mittal_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(248,113,113,0.048))] px-5 py-3 text-sm font-semibold text-orange-800 transition-colors hover:bg-[linear-gradient(135deg,rgba(249,115,22,0.16),rgba(248,113,113,0.06))] dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-200"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
