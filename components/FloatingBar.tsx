"use client";
import Reveal from "./Reveal";

import { Home, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingBar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Hide while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScroll);
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Toggle theme
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div
      className={`
        fixed top-6 left-1/2 -translate-x-1/2
        bg-white text-black
        dark:bg-black dark:text-white
        px-6 py-3 rounded-full
        flex gap-6 shadow-xl
        transition-all duration-300
       border border-black/30 dark:border-white/40

        ${visible ? "opacity-100" : "opacity-0 -translate-y-10"}
        z-[9999]
      `}
    >
      <a href="#"><Home size={18} /></a>
      <a href="https://github.com/dhairyamittal28106-alt" target="_blank">
        <Github size={18} />
      </a>
      <a href="https://linkedin.com/in/dhairyamittal" target="_blank">
        <Linkedin size={18} />
      </a>
      <a href="mailto:dhairyamittal28106@gmail.com">
        <Mail size={18} />
      </a>

      <button onClick={toggleTheme}>
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}
