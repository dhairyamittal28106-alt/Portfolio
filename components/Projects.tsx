"use client";
import Reveal from "./Reveal";

import { useState } from "react";
import { projects, Project } from "@/data/content";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <Reveal>
        <h2 className="text-3xl font-bold mb-10 text-center">
          Check out my latest work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelected(p)}
              className="cursor-pointer group border border-black/30 dark:border-white/40 rounded-xl overflow-hidden hover:border-black dark:hover:border-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition duration-300"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className={`w-full h-full ${p.fit === "contain" ? "object-contain" : "object-cover"
                    }`}

                />
              </div>


              <div className="p-5">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {p.description}
                </p>
              </div>
            </div>
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
