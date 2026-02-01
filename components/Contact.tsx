import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <Reveal>
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Something 🕵️
        </h2>

        <p className="text-text-muted mb-10">
          Open to internships, freelance work, and collaborations.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition"
          >
            Email Me
          </a>

          <a
            href={profile.github}
            target="_blank"
            className="px-6 py-3 rounded-lg border border-black/30 dark:border-white/40 hover:border-black dark:hover:border-white hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            className="px-6 py-3 rounded-lg border border-black/30 dark:border-white/40 hover:border-black dark:hover:border-white hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
