"use client";

import Reveal from "./Reveal";
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
      <Reveal>
        <h2 className="text-3xl font-bold mb-10 text-center">
          Check out my latest work
        </h2>

        {/* MANUAL PROJECTS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelected(p)}
              className="cursor-pointer group border border-black/30 dark:border-white/40 rounded-xl overflow-hidden
                         hover:border-black dark:hover:border-white
                         hover:-translate-y-1
                         hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]
                         dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                         transition duration-300"
            >
              {p.image && (
                <div className="w-full h-64 overflow-hidden bg-black">
                  <img
                    src={p.image}
                    alt={p.title}
                    className={`w-full h-full ${p.fit === "contain"
                        ? "object-contain"
                        : "object-cover"
                      }`}
                  />
                </div>
              )}

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* GITHUB PROJECTS */}
        <h3 className="text-2xl font-bold mb-6 text-center">
          More Projects on GitHub
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {githubRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              className="border border-black/30 dark:border-white/40 rounded-xl p-6
                         hover:border-black dark:hover:border-white
                         hover:-translate-y-1
                         hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]
                         dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                         transition duration-300"
            >
              <h4 className="font-semibold text-lg">
                {repo.name}
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                {repo.description || "No description provided."}
              </p>

              <div className="mt-4 text-sm opacity-70">
                ⭐ {repo.stargazers_count} • 🍴 {repo.forks_count}
              </div>
            </a>
          ))}
        </div>
      </Reveal>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
