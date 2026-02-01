import Link from "next/link";
import Reveal from "./Reveal";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-nav-bg border-b border-black/10 dark:border-white/10 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-nav-text">

        </span>

        <div className="flex gap-6 text-text-muted">
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
