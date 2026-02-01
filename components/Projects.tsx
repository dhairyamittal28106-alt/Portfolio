"use client";

import { useState } from "react";
import { projects, Project } from "@/data/content";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Check out my latest work
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(p)}
            className="cursor-pointer group border border-border rounded-xl overflow-hidden hover:border-border-hover transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-48 w-full object-cover group-hover:scale-105 transition"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
