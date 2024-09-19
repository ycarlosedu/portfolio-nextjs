"use client";

import { useTranslations } from "next-intl";

import { ProjectInfos } from "@/components/ui/ProjectCard";
import { Typography } from "@/components/ui/Typography";
import { PROJECT_TYPE } from "@/constants";
import {
  ArrowRight,
  FigmaLogo,
  GithubLogo,
  Globe
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/Button";
import Carousel from "./ui/Carousel";

type ProjectsProps = {
  project: ProjectInfos;
  projectType: PROJECT_TYPE;
};

export function ProjectImages({ project, projectType }: ProjectsProps) {
  const t = useTranslations(`${projectType}.PROJECTS`);

  return (
    <section className="px-default md:min-h-screen max-w-default w-full flex flex-col items-center gap-8 md:pt-32 pb-20">
      <Typography.H1 className="text-center">{t(project.title)}</Typography.H1>
      <Carousel
        list={project.images}
        imageClassName="w-full h-[400px] xl:w-full xl:h-[500px] xl:max-w-[700px]"
      />

      <div className="flex flex-wrap gap-2.5 items-center justify-center w-full">
        <Button asChild>
          <a href="#" target="_blank">
            <Globe size={16} />
            WEBSITE
            <ArrowRight size={16} />
          </a>
        </Button>

        {projectType === PROJECT_TYPE.CODES && (
          <Button asChild>
            <a href="#" target="_blank">
              <GithubLogo size={16} />
              GITHUB
              <ArrowRight size={16} />
            </a>
          </Button>
        )}

        {projectType === PROJECT_TYPE.DESIGNS && (
          <Button asChild>
            <a href="#" target="_blank">
              <FigmaLogo size={16} />
              FIGMA
              <ArrowRight size={16} />
            </a>
          </Button>
        )}
      </div>
    </section>
  );
}
