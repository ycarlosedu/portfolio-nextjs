"use client";

import { useTranslations } from "next-intl";

import { ProjectCard, ProjectInfos } from "@/components/ui/ProjectCard";
import { Typography } from "@/components/ui/Typography";

type ProjectsProps = {
  projects: ProjectInfos[];
  translations: "CODES" | "DESIGNS";
};

export function Projects({ projects, translations }: ProjectsProps) {
  const t = useTranslations(translations);

  return (
    <section className="px-default md:min-h-screen max-w-default w-full flex flex-col items-center gap-4 md:pt-32 pb-20">
      <Typography.H1 className="text-center">
        {t.rich("TITLE", {
          span: (chunks) => <span className="text-primary">{chunks}</span>
        })}
      </Typography.H1>
      <Typography.H2 className="text-gray-accent text-2xl font-semibold text-center">
        {t("DESCRIPTION")}
      </Typography.H2>

      <div className="w-full flex flex-wrap justify-between gap-4 pt-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            translations={translations}
          />
        ))}
      </div>
    </section>
  );
}
