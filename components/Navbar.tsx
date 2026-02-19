"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Sun, Moon, Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Detect system theme on first load
  useEffect(() => {
    document.documentElement.classList.add("dark");
    setDark(true);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  };

  const socialLinks = [
    { icon: Github, link: "https://github.com/dhairyamittal28106-alt" },
    { icon: Linkedin, link: "https://linkedin.com/in/dhairyamittal" },
    { icon: Mail, link: "mailto:dhairyamittal28106@gmail.com" },
  ];

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-32 z-[9998] pointer-events-none bg-gradient-to-b from-orange-100 via-white/80 to-transparent dark:from-black dark:via-black/90 dark:to-transparent" />

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[95%] md:w-[90%] max-w-5xl rounded-full border-[1.5px] border-amber-500/60 dark:border-blue-500/50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg shadow-amber-500/20 dark:shadow-blue-500/20 transition-all duration-300">
        <div className="px-4 md:px-6 py-3 flex justify-between items-center">
          <Link href="#" className="font-extrabold text-lg text-black dark:text-white tracking-tight z-50">
            Dhairya Mittal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 text-sm font-bold text-black dark:text-neutral-400">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-amber-600 dark:hover:text-blue-500 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 md:gap-2 border-r border-neutral-300 dark:border-white/10 pr-3 mr-1">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-black dark:text-neutral-400 hover:text-amber-600 dark:hover:text-blue-500 hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                >
                  <item.icon size={18} />
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Dhairya_Mittal_Resume.pdf"
                className="p-2 rounded-full text-black dark:text-neutral-400 hover:text-amber-600 dark:hover:text-blue-500 hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                aria-label="Download Resume"
              >
                <Download size={18} />
              </a>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-black dark:text-neutral-400 hover:text-amber-600 dark:hover:text-blue-500 hover:bg-black/5 dark:hover:bg-white/10 transition-all"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-black dark:text-neutral-400 hover:bg-black/5 dark:hover:bg-white/10 transition-all"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black dark:text-white z-50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-black border border-amber-500/30 dark:border-blue-500/30 rounded-3xl mt-2 p-6 flex flex-col items-center gap-6 shadow-xl md:hidden overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-black dark:text-neutral-300 hover:text-amber-600 dark:hover:text-blue-500"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 mt-2 border-t border-neutral-200 dark:border-white/10 pt-6 w-full justify-center">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-100 dark:bg-white/10 rounded-full text-black dark:text-white"
                  >
                    <item.icon size={20} />
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download="Dhairya_Mittal_Resume.pdf"
                  className="p-3 bg-neutral-100 dark:bg-white/10 rounded-full text-black dark:text-white"
                >
                  <Download size={20} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
