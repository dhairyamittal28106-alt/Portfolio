import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import VisitorCount from "@/components/VisitorCount";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden">
        <div className="aurora-drift absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.13),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(248,113,113,0.06),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(253,164,175,0.054),transparent_24%),linear-gradient(180deg,rgba(255,247,242,0.9),rgba(255,255,255,0.96))] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 hidden w-screen -translate-x-1/2 xl:block">
          <div className="ambient-pulse absolute left-0 top-28 h-[34rem] w-[22rem] bg-[radial-gradient(circle_at_left,rgba(253,164,175,0.066),transparent_62%)] blur-[60px] dark:bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.08),transparent_62%)]" />
          <div className="aurora-drift absolute right-0 top-24 h-[34rem] w-[22rem] bg-[radial-gradient(circle_at_right,rgba(249,115,22,0.11),transparent_62%)] blur-[60px] dark:bg-[radial-gradient(circle_at_right,rgba(56,189,248,0.08),transparent_62%)]" />
          <div className="float-soft absolute left-0 bottom-32 h-[28rem] w-[18rem] bg-[radial-gradient(circle_at_left,rgba(248,113,113,0.048),transparent_65%)] blur-[80px] dark:bg-[radial-gradient(circle_at_left,rgba(14,165,233,0.06),transparent_65%)]" />
          <div className="ambient-pulse absolute right-0 bottom-28 h-[28rem] w-[18rem] bg-[radial-gradient(circle_at_right,rgba(249,115,22,0.08),transparent_65%)] blur-[80px] dark:bg-[radial-gradient(circle_at_right,rgba(45,212,191,0.06),transparent_65%)]" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <VisitorCount />
        </div>
      </main>
    </>
  );
}
