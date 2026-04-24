"use client";

import { motion } from "framer-motion";
import React from "react";

export const AuroraBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-white text-slate-950 transition-colors duration-300 dark:bg-black dark:text-neutral-200">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -inset-[10px] opacity-100 blur-[60px] invert-0 dark:opacity-90">
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] left-0 h-[60vh] w-full rounded-[100%] bg-gradient-to-b from-orange-500/80 via-orange-200/50 to-transparent dark:from-blue-800/70 dark:via-blue-900/20 dark:to-transparent"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3], x: [-50, 50, -50] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute right-0 top-[20%] h-[50vh] w-[50vw] rounded-full bg-amber-300/40 blur-[80px] dark:bg-blue-700/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1], y: [0, -50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-[20%] h-[40vh] w-[60vw] rounded-full bg-orange-200/30 blur-[80px] dark:bg-indigo-800/30"
          />
        </div>
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
