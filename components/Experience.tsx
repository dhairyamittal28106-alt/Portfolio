"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-neutral-900 dark:text-white"
        >
          Experience & Activities
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >

          <motion.div
            variants={itemVariants}
            className="border-[1.5px] border-amber-500/30 dark:border-blue-500/30 bg-white/40 dark:bg-white/5 p-6 rounded-xl backdrop-blur-sm
                          hover:border-amber-500/50 dark:hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500
                          hover:-translate-y-1"
          >
            <h3 className="font-semibold text-neutral-900 dark:text-white">Hackathons & Competitions</h3>
            <ul className="mt-2 text-neutral-600 dark:text-neutral-400 list-disc list-inside space-y-1">
              <li>Smart India Hackathon (SIH)</li>
              <li>Zennovatio 3.0 – GenZ Hackathon</li>
              <li>Google AdMob App Development Challenge (IIT Bombay)</li>
              <li>Code Slayers 2K25 – NIT Delhi</li>
              <li>Microsoft Learn Student Ambassador Makeathon 8 – Thapar University, Patiala (24hr Hackathon)</li>
              <li>Technex IIT BHU Pre-Zonal Hackathon – Rank 4, Selected in Top 37 out of 350+ Teams</li>
              <li>Vibe with Singularity – GGSIPU, Delhi (24hr Hackathon)</li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border-[1.5px] border-amber-500/30 dark:border-purple-500/30 bg-white/40 dark:bg-white/5 p-6 rounded-xl backdrop-blur-sm
                          hover:border-amber-500/50 dark:hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-500
                          hover:-translate-y-1"
          >
            <h3 className="font-semibold text-neutral-900 dark:text-white">Competitive Programming</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Regularly practice DSA on LeetCode. Strong with arrays, strings,
              recursion, linked lists, stacks, queues, trees, sorting, and searching.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
