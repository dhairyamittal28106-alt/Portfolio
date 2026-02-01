export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Experience & Activities
      </h2>

      <div className="space-y-6 max-w-3xl mx-auto">

        <div className="border border-border bg-bg-card p-6 rounded-xl">
          <h3 className="font-semibold">Hackathons & Competitions</h3>
          <ul className="mt-2 text-text-muted list-disc list-inside">
            <li>Smart India Hackathon (SIH)</li>
            <li>Zennovatio 3.0 – GenZ Hackathon</li>
            <li>Google AdMob App Development Challenge (IIT Bombay)</li>
            <li>Code Slayers 2K25 – NIT Delhi</li>
          </ul>
        </div>

        <div className="border border-border bg-bg-card p-6 rounded-xl">
          <h3 className="font-semibold">Competitive Programming</h3>
          <p className="mt-2 text-text-muted">
            Regularly practice DSA on LeetCode. Strong with arrays, strings,
            recursion, linked lists, stacks, queues, trees, sorting, and searching.
          </p>
        </div>

      </div>
    </section>
  );
}
