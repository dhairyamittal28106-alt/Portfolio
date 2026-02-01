import Image from "next/image";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="py-24">

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left max-w-xl">

          <h1 className="text-5xl font-bold">
            Hi, I'm {profile.name} 👋
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            {profile.role}
          </p>

          {/* Available Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm">
              Available – Open to internships & freelance
            </span>
          </div>

          <p className="mt-6 text-gray-500">
            {profile.tagline}
          </p>

          {/* Resume Button */}
          <div className="mt-8">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg border border-white/40 hover:border-white transition"
            >
              Download Resume
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - AVATAR */}
        <div>
          <Image
            src="/avatar.jpg"
            alt="Dhairya Mittal"
            width={220}
            height={220}
            className="rounded-full border border-white/40"
          />
        </div>

      </div>

    </section>
  );
}
