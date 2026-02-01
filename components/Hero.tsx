"use client";

import Image from "next/image";
import { profile } from "@/data/content";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex items-start justify-between">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >

            {/* NAME LINE */}
            <h1 className="text-6xl font-bold leading-tight">
              Hi, I'm {profile.name} <span className="inline-block">👋</span>
            </h1>

            <p className="mt-4 text-xl text-gray-400">
              {profile.role}
            </p>

            {/* AVAILABLE */}
            <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-black/30 dark:border-white/40">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm">
                Available – Open to internships & freelance
              </span>
            </div>

            <p className="mt-6 text-gray-500">
              {profile.tagline}
            </p>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-lg border border-black/30 dark:border-white/40 hover:border-black dark:hover:border-white hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition"
              >
                Download Resume
              </a>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="ml-10"
          >
            <Image
              src="/assets/avatar.jpg"
              alt="Dhairya Mittal"
              width={170}
              height={170}
              className="rounded-full border border-black/30 dark:border-white/40"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
