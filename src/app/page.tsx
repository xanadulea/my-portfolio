export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-light tracking-tight text-center max-w-3xl leading-tight">
        I help ambitious companies build{" "}
        <span className="text-neutral-400">digital products</span> that feel
        premium.
      </h1>

      <p className="mt-8 text-neutral-500 text-lg">
        Previously worked with{" "}
        <span className="text-neutral-800">Stripe, Linear, and funded startups.</span>
      </p>

      <nav className="mt-16 flex gap-8 text-sm text-neutral-500">
        <a href="#work" className="hover:text-neutral-800 transition-colors">
          Work
        </a>
        <a href="#process" className="hover:text-neutral-800 transition-colors">
          Process
        </a>
        <a href="#contact" className="hover:text-neutral-800 transition-colors">
          Contact
        </a>
      </nav>
    </main>
  );
}