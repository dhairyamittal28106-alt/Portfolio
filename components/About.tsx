import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="py-20 text-center max-w-3xl mx-auto">
      <Reveal>
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-text-muted leading-relaxed">
          I’m a Computer Science undergraduate specializing in Data Structures &
          Algorithms, Object-Oriented Programming, and backend engineering. I enjoy
          building scalable applications and real-time AI systems using C++, Python,
          and modern web technologies.
          <br /><br />
          I actively participate in hackathons and competitive programming, and I
          love turning ideas into practical products.
        </p>
      </Reveal>
    </section>
  );
}
