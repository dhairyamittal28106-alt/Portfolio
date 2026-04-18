"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { startTransition, useEffect, useState } from "react";
import { ArrowUpRight, FolderGit2, Github } from "lucide-react";
import { projects, Project } from "@/data/content";
import ProjectModal from "./ProjectModal";

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
}

const featuredProjects = projects.slice(0, 3);

function normalizeProjectKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getProjectKeys(project: Project) {
  const keys = new Set<string>();
  keys.add(normalizeProjectKey(project.title));

  if (project.github) {
    const repoName = project.github.split("/").pop();
    if (repoName) {
      keys.add(normalizeProjectKey(repoName));
    }
  }

  return keys;
}

function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (project.image) {
    return (
      <div
        className={`relative h-full w-full overflow-hidden ${
          priority
            ? "bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(248,113,113,0.08),transparent_32%),linear-gradient(180deg,#101828_0%,#0b1220_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0b1220_0%,#111827_100%)]"
            : "bg-[#07111f]"
        }`}
      >
        {priority && (
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%,transparent_72%,rgba(255,255,255,0.03))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_28%,transparent_72%,rgba(255,255,255,0.04))]" />
        )}
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          className={`${
            project.fit === "contain"
              ? priority
                ? "object-contain p-2 sm:p-3 md:p-4"
                : "object-contain p-4 sm:p-6"
              : "object-cover"
          } transition-transform duration-700 group-hover:scale-105`}
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full items-end overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.28),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.35),transparent_35%),linear-gradient(135deg,#0b1220_0%,#111827_48%,#1f2937_100%)] p-6">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_28%,transparent_72%,rgba(255,255,255,0.05))]" />
      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-[0_12px_40px_rgba(15,23,42,0.4)]">
          <FolderGit2 className="h-6 w-6" />
        </div>
        <p className="max-w-[16rem] text-xl font-semibold tracking-tight text-white">
          {project.title}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    const excludedKeys = new Set<string>();
    projects.forEach((project) => {
      getProjectKeys(project).forEach((key) => excludedKeys.add(key));
    });

    fetch(
      "https://api.github.com/users/dhairyamittal28106-alt/repos?per_page=100"
    )
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => {
        const filtered = data
          .filter(
            (repo) =>
              repo.stargazers_count > 0 &&
              !excludedKeys.has(normalizeProjectKey(repo.name))
          )
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        startTransition(() => {
          setGithubRepos(filtered);
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(239,68,68,0.08))] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300">
              Featured Work
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-5xl">
              Latest work, presented with more clarity.
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400 md:text-lg">
              A focused selection of projects that best represent my backend,
              cloud, and AI work.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55 }}
            onClick={() => setSelected(featuredProjects[0])}
            className="card-sheen group relative overflow-hidden rounded-[2rem] border border-black/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,244,239,0.92))] text-left shadow-[0_20px_80px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] dark:shadow-none dark:hover:border-sky-400/40 dark:hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))]"
          >
            <div className="grid min-h-[420px] md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[260px]">
                <ProjectVisual project={featuredProjects[0]} priority />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-7 md:p-8">
                <div>
                  <div className="mb-5 inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white dark:bg-white dark:text-neutral-900">
                    Featured Project
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-[2rem]">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400 md:text-base">
                    {featuredProjects[0].description}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {featuredProjects[0].tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-medium text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white">
                    View project details
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.button>

          <div className="grid gap-6">
            {featuredProjects.slice(1).map((project, index) => (
              <motion.button
                key={project.title}
                type="button"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onClick={() => setSelected(project)}
                className="card-sheen group overflow-hidden rounded-[1.75rem] border border-black/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,244,239,0.92))] text-left shadow-[0_16px_60px_rgba(15,23,42,0.1)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] dark:shadow-none dark:hover:border-sky-400/35 dark:hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))]"
              >
                <div className="grid min-h-[220px] sm:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[220px] bg-neutral-950">
                    <ProjectVisual project={project} />
                  </div>

                  <div className="flex flex-col justify-between p-5 sm:p-6">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                        Latest Work 0{index + 2}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-medium text-neutral-700 dark:bg-white/5 dark:text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-neutral-300" />
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-3xl">
                More Projects on GitHub
              </h3>
            </div>

            <a
              href="https://github.com/dhairyamittal28106-alt?tab=repositories"
              target="_blank"
              className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              View all repositories
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {githubRepos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="card-sheen group rounded-[1.5rem] border border-black/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,244,239,0.96))] p-6 shadow-[0_14px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_18px_55px_rgba(239,68,68,0.12)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] dark:shadow-none dark:hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-black/5 bg-black/5 p-3 text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-white">
                    <FolderGit2 className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-neutral-500" />
                </div>

                <h4 className="mt-5 text-lg font-semibold tracking-tight text-neutral-950 dark:text-white">
                  {repo.name}
                </h4>

                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 md:min-h-[72px]">
                  {repo.description || "Repository on GitHub with code and implementation details."}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
