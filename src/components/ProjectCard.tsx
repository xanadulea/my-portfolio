"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  video: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px", once: true });
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-32"
    >
      <div className="relative w-full rounded-xl overflow-hidden bg-neutral-100 shadow-lg shadow-neutral-200/50 border border-neutral-200/50">
        <div className="relative w-full aspect-video bg-neutral-200 flex items-center justify-center">
          <p className="text-neutral-400 text-sm">Demo video placeholder</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row md:items-start justify-between gap-2">
        <div>
          <h3 className="text-xl font-medium text-neutral-900">
            {project.title}
          </h3>
          <p className="text-neutral-500 mt-1 max-w-lg">{project.tagline}</p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm text-neutral-600 hover:text-neutral-900 underline underline-offset-4 transition-colors"
        >
          Visit live site ↗
        </a>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-neutral-200/70 text-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}