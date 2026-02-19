"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";
import Image from "next/image";

const letterContainerVariants = {
  hidden: { transition: { staggerChildren: 0.05 } },
  visible: { transition: { staggerChildren: 0.03, staggerDirection: 1 } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Hero() {
  const characters = profile.name.split("");

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-36">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 text-center max-w-4xl px-6 relative">

        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold text-neutral-800 dark:text-neutral-300 uppercase tracking-widest">Available for work</span>
        </motion.div>

        {/* Main Title - Robotic Reveal */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6"
          variants={letterContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-block whitespace-nowrap">
            {characters.map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block text-neutral-900 dark:text-white">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {profile.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">View Projects</span>
            <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          <a
            href="mailto:dhairyamittal28106@gmail.com"
            className="px-8 py-4 rounded-full border border-neutral-300 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors text-neutral-800 dark:text-white font-medium backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Profile Image - Restored & Styled */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -15, 0] // Floating effect
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            type: "spring",
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }
          }}
          className="relative w-48 h-48 md:w-64 md:h-64 mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-50 animate-pulse" />
          <Image
            src="/assets/avatar.jpg"
            alt={profile.name}
            fill
            className="rounded-full object-cover border-4 border-white/10 relative z-10"
          />
        </motion.div>

      </div>
    </section>
  );
}
