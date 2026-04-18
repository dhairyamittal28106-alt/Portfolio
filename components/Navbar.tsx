"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Sun, Moon, Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/content";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    document.documentElement.classList.toggle("dark", nextDark);
    setDark(nextDark);
  };

  const socialLinks = [
    { icon: Github, link: profile.github, label: "GitHub" },
    { icon: Linkedin, link: profile.linkedin, label: "LinkedIn" },
    { icon: Mail, link: `mailto:${profile.email}`, label: "Email" },
  ];

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-[9998] h-32 w-full bg-gradient-to-b from-white via-white/85 to-transparent dark:from-[#030712] dark:via-[#030712]/90 dark:to-transparent" />

      <nav className="fixed left-1/2 top-3 z-[9999] w-[calc(100%-1rem)] max-w-6xl -translate-x-1/2 rounded-full border border-black/5 bg-white/70 shadow-[0_16px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-[#030712]/78 dark:shadow-none sm:top-5 sm:w-[95%]">
        <div className="flex items-center justify-between px-3 py-2.5 md:px-5 md:py-3">
          <Link
            href="#"
            className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/75 px-3 py-2 text-sm font-semibold tracking-tight text-neutral-950 shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:shadow-none"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-950 text-xs font-bold text-white dark:bg-white dark:text-neutral-950">
              DM
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-black/5 bg-white/65 px-3 py-2 text-sm font-medium text-neutral-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-black/[0.04] hover:text-red-600 dark:hover:bg-white/8 dark:hover:text-sky-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-black/5 bg-white/65 p-1 dark:border-white/10 dark:bg-white/[0.04]">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-neutral-600 transition-colors hover:bg-black/5 hover:text-red-600 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-sky-300"
                  aria-label={item.label}
                >
                  <item.icon size={17} />
                </a>
              ))}
            </div>

            <a
              href="/resume.pdf"
              download="Dhairya_Mittal_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
            >
              <Download size={16} />
              Resume
            </a>

            <button
              onClick={toggleTheme}
              className="rounded-full border border-black/5 bg-white/70 p-2.5 text-neutral-600 transition-colors hover:bg-black/5 hover:text-red-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-sky-300"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-black/5 bg-white/70 p-2.5 text-neutral-700 transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-200 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-50 rounded-full border border-black/5 bg-white/70 p-2.5 text-neutral-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="absolute left-0 top-full mt-3 w-full overflow-hidden rounded-[2rem] border border-black/5 bg-white/95 p-5 shadow-[0_16px_60px_rgba(15,23,42,0.12)] md:hidden dark:border-white/10 dark:bg-[#050b16]/95 sm:p-6"
            >
              <div className="flex flex-col items-center gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-neutral-900 dark:text-neutral-100"
                  >
                    {link.name}
                  </Link>
                ))}

                <a
                  href="/resume.pdf"
                  download="Dhairya_Mittal_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-neutral-950"
                >
                  <Download size={16} />
                  Download Resume
                </a>

                <div className="flex gap-3 border-t border-black/5 pt-5 dark:border-white/10">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-neutral-100 p-3 text-neutral-800 dark:bg-white/10 dark:text-white"
                      aria-label={item.label}
                    >
                      <item.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
