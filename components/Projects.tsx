"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects, Project } from "@/data/content";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [githubRepos, setGithubRepos] = useState<any[]>([]);

  // Fetch GitHub repos
  useEffect(() => {
    fetch(
      "https://api.github.com/users/dhairyamittal28106-alt/repos?per_page=100"
    )
      .then((res) => res.json())
      .then((data: any[]) => {

        // Get repo names from manual projects
        const manualRepoNames = projects
          .map((p) => p.github)
          .filter(Boolean)
          .map((url) => url.split("/").pop());

        // Keep only starred repos NOT already in manual projects
        const filtered = data.filter(
          (repo: any) =>
            repo.stargazers_count > 0 &&
            !manualRepoNames.includes(repo.name)
        );

        setGithubRepos(filtered);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-neutral-900 dark:text-white"
        >
          Check out my latest work
        </motion.h2>

        {/* MANUAL PROJECTS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              onClick={() => setSelected(p)}
              className="cursor-pointer group relative rounded-xl overflow-hidden backdrop-blur-sm
                         border-[1.5px] border-amber-500/30 dark:border-blue-500/30 bg-white/40 dark:bg-white/5
                         hover:border-amber-500/50 dark:hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                         transition-all duration-500 ease-out
                         hover:-translate-y-2"
            >
              {p.image && (
                <div className="w-full h-64 overflow-hidden bg-black">
                  <img
                    src={p.image}
                    alt={p.title}
                    className={`w-full h-full ${p.fit === "contain"
                      ? "object-contain"
                      : "object-cover"
                      } transform group-hover:scale-105 transition-transform duration-700`}
                  />
                </div>
              )}

              <div className="p-5">
                <h3 className="font-semibold text-lg text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GITHUB PROJECTS */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-6 text-center text-neutral-900 dark:text-white"
        >
          More Projects on GitHub
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-2 gap-8"
        >
          {githubRepos.map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="relative p-6 rounded-xl overflow-hidden backdrop-blur-sm
                         border-[1.5px] border-amber-500/30 dark:border-purple-500/30 bg-white/40 dark:bg-white/5
                         hover:border-amber-500/50 dark:hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
                         transition-all duration-500 ease-out
                         hover:-translate-y-2 group"
            >
              <h4 className="font-semibold text-lg text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {repo.name}
              </h4>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">
                {repo.description || "No description provided."}
              </p>

              <div className="mt-4 text-sm text-neutral-500">
                ⭐ {repo.stargazers_count} • 🍴 {repo.forks_count}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
