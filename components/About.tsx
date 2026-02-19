"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 text-center max-w-3xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg"
        >
          I’m a Computer Science undergraduate specializing in Data Structures &
          Algorithms, Object-Oriented Programming, and backend engineering. I enjoy
          building scalable applications and real-time AI systems using C++, Python,
          and modern web technologies.
          <br /><br />
          I actively participate in hackathons and competitive programming, and I
          love turning ideas into practical products.
        </motion.p>
      </motion.div>
    </section>
  );
}
