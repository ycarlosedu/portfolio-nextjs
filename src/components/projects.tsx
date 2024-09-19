"use client";

import { useTranslations } from "next-intl";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { Typography } from "@/components/ui/Typography";

const projects = [
  {
    title: "Personal Website",
    href: "https://carlossilva.vercel.app",
    image: "/images/logo/full.svg",
    alt: "Carlos Silva Logo"
  },
  {
    title: "Personal Website",
    href: "https://carlossilva.vercel.app",
    image: "/images/logo/full.svg",
    alt: "Carlos Silva Logo"
  },
  {
    title: "Personal Website",
    href: "https://carlossilva.vercel.app",
    image: "/images/logo/full.svg",
    alt: "Carlos Silva Logo"
  }
];

export function Projects() {
  const t = useTranslations("CODES");

  return (
    <section className="px-default md:min-h-screen max-w-default w-full flex flex-col items-center gap-4 md:pt-32 pb-20">
      <Typography.H1>
        <span className="text-primary text-center">Code</span> Projets
      </Typography.H1>
      <Typography.H2 className="text-gray-accent text-2xl font-semibold text-center">
        Some work I-ve done in the past.
      </Typography.H2>

      <div className="w-full flex flex-wrap justify-between gap-4 pt-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
