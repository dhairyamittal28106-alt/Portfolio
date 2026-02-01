import Image from "next/image";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center">

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* LEFT */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-5xl md:text-6xl font-bold">
              Hi, I'm {profile.name} 👋
            </h1>

            <p className="mt-4 text-xl text-gray-400">
              {profile.role}
            </p>

            {/* Available Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-white/30">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm">
                Available – Open to internships & freelance
              </span>
            </div>

            <p className="mt-6 max-w-xl text-gray-500">
              {profile.tagline}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
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
          <div className="flex-shrink-0">
            <Image
              src="/assets/avatar.jpg"
              alt="Dhairya Mittal"
              width={200}
              height={200}
              className="rounded-full border border-white/40"
            />
          </div>

        </div>
      </div>

    </section>
  );
}
