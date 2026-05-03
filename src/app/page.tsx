import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process";
import InteractiveDemo from "../components/InteractiveDemo";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-center max-w-3xl leading-tight">
          I help ambitious companies build{" "}
          <span className="text-neutral-400">digital products</span> that feel
          premium.
        </h1>

        <p className="mt-8 text-neutral-500 text-lg">
          Previously worked with{" "}
          <span className="text-neutral-800">
            Stripe, Linear, and funded startups.
          </span>
        </p>

        <nav className="mt-16 flex gap-8 text-sm text-neutral-500">
          <a href="#work" className="hover:text-neutral-800 transition-colors">
            Work
          </a>
          <a
            href="#process"
            className="hover:text-neutral-800 transition-colors"
          >
            Process
          </a>
          <a
            href="#contact"
            className="hover:text-neutral-800 transition-colors"
          >
            Contact
          </a>
        </nav>
      </section>

      {/* Work */}
      <section id="work" className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-light text-neutral-400 mb-16 text-center">
          Selected Work
        </h2>

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Process */}
      <Process />
       <InteractiveDemo />
             <ContactForm />

    </main>
  );
}