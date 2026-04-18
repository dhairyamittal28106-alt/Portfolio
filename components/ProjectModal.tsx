"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, FolderGit2, Github, X } from "lucide-react";
import { Project } from "@/data/content";

function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative h-56 w-full overflow-hidden rounded-[1.5rem] bg-neutral-950">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`${
            project.fit === "contain" ? "object-contain p-6" : "object-cover"
          }`}
        />
      </div>
    );
  }

  return (
    <div className="flex h-56 w-full items-end rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.3),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.35),transparent_34%),linear-gradient(135deg,#0b1220_0%,#111827_48%,#1f2937_100%)] p-6">
      <div className="rounded-2xl border border-white/15 bg-white/10 p-3 text-white">
        <FolderGit2 className="h-6 w-6" />
      </div>
    </div>
  );
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [showProgressNotice, setShowProgressNotice] = useState(false);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  if (!project) return null;
  if (typeof document === "undefined") return null;

  const hasLiveDemo = Boolean(project.live);
  const liveDemoInProgress = project.live === "#";

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-4">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b1220] shadow-[0_30px_120px_rgba(2,6,23,0.75)] sm:rounded-[2rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative max-h-[90vh] overflow-y-auto p-4 sm:p-5 md:p-7">
          <ProjectPreview project={project} />

          <div className="mt-7">
            <div className="mb-3 inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
              Project Overview
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {project.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {hasLiveDemo && (
                liveDemoInProgress ? (
                  <button
                    type="button"
                    onClick={() => setShowProgressNotice(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-slate-200"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-slate-200"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>

            {showProgressNotice && (
              <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm font-medium text-amber-100">
                Project in progress
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
