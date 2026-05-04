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
    description: "Redesigned the entire patient onboarding experience.",
    video: "/aurora.mp4",
    link: "https://aurora-demo-l75f.vercel.app",
    tags: ["Next.js", "Framer Motion", "REST API Integration"],
  },
  {
    id: "meridian",
    title: "Meridian",
    tagline: "Fintech Brand Launch — from zero to live in 6 weeks",
    description: "Developed the full marketing site and interactive product demo.",
    video: "/meridian.mp4",
    link: "https://example.com",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Headless CMS"],
  },
];