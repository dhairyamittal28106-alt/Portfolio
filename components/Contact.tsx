import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Let’s Build Something 🕵️
      </h2>

      <p className="text-text-muted mb-10">
        Open to internships, freelance work, and collaborations.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="px-6 py-3 rounded-lg bg-foreground text-background font-medium"
        >
          Email Me
        </a>

        <a
          href={profile.github}
          target="_blank"
          className="px-6 py-3 rounded-lg border border-border"
        >
          GitHub
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          className="px-6 py-3 rounded-lg border border-border"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
