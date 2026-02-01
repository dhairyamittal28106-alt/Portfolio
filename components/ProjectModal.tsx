"use client";

import { Project } from "@/data/content";

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 max-w-lg w-full p-6 rounded-xl relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400"
        >
          ✕
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-gray-400 mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="text-xs bg-white/10 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <a href={project.live} className="underline">Live</a>
          <a href={project.github} className="underline">GitHub</a>
        </div>

      </div>
    </div>
  );
}
