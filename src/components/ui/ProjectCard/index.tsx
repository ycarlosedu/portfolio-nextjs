import { TransitionLink } from "@/components/ui/TransitionLink";
import { Typography } from "@/components/ui/Typography";
import { CODE_PROJECTS, DESIGN_PROJECTS, PROJECT_TYPE } from "@/constants";
import { Pages } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Badge from "../Badge";
import { CarouselList } from "../Carousel";

export type ProjectInfos = {
  slug: CODE_PROJECTS | DESIGN_PROJECTS;
  name: string;
  href: string;
  internal_href: Pages;
  image: string;
  images: CarouselList;
  isWebsitePrivate?: boolean;
  websiteHref?: string;
  isRepositoryPrivate?: boolean;
  repositoryHref?: string;
  isDesignPrivate?: boolean;
  designHref?: string;
  isMobile?: boolean;
  technologies?: string[];
};

type ProjectCardProps = {
  project: ProjectInfos;
  translations: PROJECT_TYPE;
};

export function ProjectCard({ project, translations }: ProjectCardProps) {
  const t = useTranslations(`${translations}.PROJECTS.${project.name}`);

  return (
    <TransitionLink
      href={project.internal_href}
      className="w-full max-w-[368px] flex flex-col gap-4 p-4 border border-gray-light dark:border-black rounded-lg hover:scale-[1.05] transition-all hover:bg-gray-light/20 dark:hover:bg-black/20"
    >
      <div className="flex items-center h-[247px] p-8 justify-center bg-gray-light dark:bg-black">
        <Image
          src={project.image}
          alt={t("ALT")}
          width={192}
          height={183}
          className="h-full w-auto rounded-3xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Typography.H3 className="text-primary text-base font-normal">
          {t("TITLE")}
        </Typography.H3>
        <a
          href={project.websiteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline flex items-center gap-1 w-fit"
          onClick={(e) => e.stopPropagation()}
        >
          {project.href}
        </a>
        {Boolean(project.technologies?.length) && (
          <div className="flex gap-2 items-center flex-wrap w-full">
            {project.technologies
              ?.slice(0, 3)
              .map((tech) => <Badge key={tech}>{tech}</Badge>)}
          </div>
        )}
      </div>
    </TransitionLink>
  );
}
