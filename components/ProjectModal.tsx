"use client";
import Reveal from "./Reveal";

import { Project } from "@/data/content";

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-900 border border-white/10 max-w-lg w-full p-6 rounded-2xl relative shadow-2xl shadow-purple-900/20">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-xl mb-6"
          />
        )}

        <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-neutral-400 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-white/10 text-white px-3 py-1 rounded-full border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="px-6 py-2 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
