export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Strategy Call",
      description:
        "We talk. I listen. You get a precise proposal with fixed scope and price. No surprises.",
    },
    {
      number: "02",
      title: "Weekly Builds",
      description:
        "Every Friday, you get a live staging link. You see real progress. No black boxes.",
    },
    {
      number: "03",
      title: "Obsessive Polish",
      description:
        "The last 20% — animations, edge cases, loading states — is where I spend the most time.",
    },
    {
      number: "04",
      title: "Clean Handoff",
      description:
        "You own the code. It's documented. Your team can fork it on day one. I stick around if needed.",
    },
  ];

  return (
    <section id="process" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-light text-neutral-400 mb-16 text-center">
        How We Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-neutral-200" />

        {steps.map((step, i) => (
          <div key={i} className="relative text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 text-sm font-medium">
              {step.number}
            </div>
            <h3 className="text-sm font-medium text-neutral-800 mb-2">
              {step.title}
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}