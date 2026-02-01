import Image from "next/image";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex items-start justify-between">

          {/* LEFT */}
          <div className="max-w-2xl">

            {/* NAME LINE */}
            <h1 className="text-6xl font-bold leading-tight">
              Hi, I'm {profile.name} <span className="inline-block">👋</span>
            </h1>

            <p className="mt-4 text-xl text-gray-400">
              {profile.role}
            </p>

            {/* AVAILABLE */}
            <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-white/30">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm">
                Available – Open to internships & freelance
              </span>
            </div>

            <p className="mt-6 text-gray-500">
              {profile.tagline}
            </p>

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

          {/* RIGHT */}
          <div className="ml-10">
            <Image
              src="/assets/avatar.jpg"
              alt="Dhairya Mittal"
              width={170}
              height={170}
              className="rounded-full border border-white/40"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
