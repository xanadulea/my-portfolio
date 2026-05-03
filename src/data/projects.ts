export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  video: string;
  link: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "aurora",
    title: "Aurora",
    tagline: "SaaS Platform Redesign — 40% faster onboarding",
    description:
      "Redesigned the entire patient onboarding experience. Built a multi-step animated interface with real-time validation. Integrated with an existing Ruby on Rails backend.",
    video: "/aurora.mp4",
    link: "https://example.com",
    tags: ["Next.js", "Framer Motion", "REST API Integration"],
  },
  {
    id: "meridian",
    title: "Meridian",
    tagline: "Fintech Brand Launch — from zero to live in 6 weeks",
    description:
      "Developed the full marketing site and interactive product demo. Collaborated directly with the design team to ensure pixel-perfect execution and smooth scroll-driven animations.",
    video: "/meridian.mp4",
    link: "https://example.com",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Headless CMS"],
  },
];