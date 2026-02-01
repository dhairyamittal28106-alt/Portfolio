import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import FloatingBar from "@/components/FloatingBar";


export default function Home() {
  return (
    <>
      <FloatingBar />
      <Navbar />

      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
