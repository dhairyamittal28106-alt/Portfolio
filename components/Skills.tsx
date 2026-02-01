import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-6">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
  px-4 py-1.5
  bg-black
  text-white
  rounded-full
  text-sm
  font-medium
  border border-border
  hover:border-white
  transition
  border border-white/40
  hover:border-white
  transition
"

          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
