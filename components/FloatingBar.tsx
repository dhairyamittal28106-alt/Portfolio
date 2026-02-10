"use client";

import { Home, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingBar() {
  const [visible, setVisible] = useState(true);
  const [dark, setDark] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  // Detect system theme on first load
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Hide while scrolling, show when scroll stops
  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setVisible(true);
      }, 200); // show after 200ms of scroll stop
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div
      className={`
        fixed z-[9999]
        left-1/2 -translate-x-1/2
        bottom-4 md:top-6 md:bottom-auto

        bg-white/90 dark:bg-black/80
        backdrop-blur-lg
        text-black dark:text-white

        border border-black/30 dark:border-white/40
        rounded-full
        px-6 py-3

        flex gap-6
        shadow-xl

        transition-all duration-300 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <a href="#">
        <Home size={18} />
      </a>

      <a
        href="https://github.com/dhairyamittal28106-alt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={18} />
      </a>

      <a
        href="https://linkedin.com/in/dhairyamittal"
        target="_blank"
        rel="noopener noreferrer"
      >
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
