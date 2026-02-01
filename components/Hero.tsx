import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-5xl font-bold">
        Hi, I&apos;m {profile.name} 👋
      </h1>

      <p className="mt-4 text-xl text-text-muted">
        {profile.role}
      </p>

      <p className="mt-6 max-w-xl mx-auto text-text-muted">
        {profile.tagline}
      </p>
    </section>
  );
}
