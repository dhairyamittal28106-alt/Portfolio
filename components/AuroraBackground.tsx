"use client";
import { motion } from "framer-motion";
import React from "react";

export const AuroraBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-slate-950 dark:text-neutral-200 transition-colors duration-300">
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="
            pointer-events-none absolute -inset-[10px] opacity-100 dark:opacity-90 blur-[60px] invert-0
          "
                >
                    {/* Top Orange Gradient (Sarvam Style) - Intensified for Light Mode */}
                    <motion.div
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.1, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[10%] left-0 w-full h-[60vh] bg-gradient-to-b from-orange-500/80 via-orange-200/50 to-transparent dark:from-blue-800/70 dark:via-blue-900/20 dark:to-transparent rounded-[100%]"
                    />

                    {/* Floating Orbs for extra depth */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.6, 0.3], x: [-50, 50, -50] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[20%] right-0 w-[50vw] h-[50vh] bg-amber-300/40 dark:bg-blue-700/30 rounded-full blur-[80px]"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.3, 0.1], y: [0, -50, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 left-[20%] w-[60vw] h-[40vh] bg-orange-200/30 dark:bg-indigo-800/30 rounded-full blur-[80px]"
                    />
                </div>
            </div>
            <div className="relative z-10 w-full">{children}</div>
        </div>
    );
};
