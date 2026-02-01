import { skills } from "@/data/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Reveal>
        <h2 className="text-3xl font-bold mb-6">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
    px-4 py-1.5
    bg-black text-white
    dark:bg-black dark:text-white
    rounded-full
    text-sm
    font-medium
    border border-black/30 dark:border-white/40
    hover:border-black dark:hover:border-white
    hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]
    transition
  "

            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
