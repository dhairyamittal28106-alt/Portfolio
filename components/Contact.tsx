"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/content";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  LoaderCircle,
  Mail,
  Send,
} from "lucide-react";

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

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const defaultErrorMessage = "Unable to send message right now.";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.error || defaultErrorMessage);
      }

      setSubmitSuccess(data.message || "Your message has been sent successfully.");
      setForm(initialFormState);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : defaultErrorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

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

            <div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,1fr)_380px] xl:items-start">
              <div>
                <h2 className="max-w-5xl text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl md:text-6xl md:leading-[1.02]">
                  Let&apos;s build something thoughtful, modern, and useful.
                </h2>

                <p className="mt-5 max-w-4xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-8 md:text-lg">
                  I&apos;m open to internships, collaborations, and product-focused
                  work where strong engineering and practical execution matter.
                  This portfolio now includes a backend-powered contact flow, so
                  messages can be collected through a real API and stored in a
                  database-ready setup.
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

            <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_340px]">
              <form
                onSubmit={handleSubmit}
                className="rounded-[1.8rem] border border-black/5 bg-white/75 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:p-6"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                    Contact Form
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-neutral-950 dark:text-white">
                    Send a message directly
                  </h3>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                      Name
                    </span>
                    <input
                      required
                      value={form.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      placeholder="Your name"
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm text-neutral-950 outline-none transition focus:border-orange-400 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-sky-400"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder="name@example.com"
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm text-neutral-950 outline-none transition focus:border-orange-400 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-sky-400"
                    />
                  </label>
                </div>

                <div className="mt-4">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                      Company or Role
                    </span>
                    <input
                      value={form.company}
                      onChange={(event) => updateField("company", event.target.value)}
                      placeholder="Startup, team, or opportunity"
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm text-neutral-950 outline-none transition focus:border-orange-400 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-sky-400"
                    />
                  </label>
                </div>

                <div className="mt-4">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                      Message
                    </span>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      placeholder="Tell me a bit about your project, role, or collaboration idea."
                      className="mt-2 w-full rounded-3xl border border-black/10 bg-white/90 px-4 py-3 text-sm text-neutral-950 outline-none transition focus:border-orange-400 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-sky-400"
                    />
                  </label>
                </div>

                {submitError ? (
                  <p className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
                    {submitError}
                  </p>
                ) : null}

                {submitSuccess ? (
                  <p className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
                    {submitSuccess}
                  </p>
                ) : null}

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                  >
                    {isSubmitting ? (
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>

              <div className="rounded-[1.8rem] border border-black/5 bg-white/75 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Connect
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                  Prefer a direct route? You can still email me, explore my work,
                  or download my resume while the backend form handles structured
                  outreach.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
