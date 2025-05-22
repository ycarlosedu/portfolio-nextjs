import { TransitionLink } from "@/components/ui/TransitionLink";
import { Typography } from "@/components/ui/Typography";
import { CODE_PROJECTS, DESIGN_PROJECTS, PROJECT_TYPE } from "@/constants";
import { Pages } from "@/i18n/routing";
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

  const disabled = !project.internal_href;

  return (
    <TransitionLink
      href={project.internal_href}
      data-disabled={disabled}
      className="w-full max-w-[368px] flex flex-col gap-4 p-4 border border-gray-light dark:border-black rounded-lg data-[disabled=false]:hover:scale-[1.05] transition-all data-[disabled=false]:hover:bg-gray-light/20 data-[disabled=false]:dark:hover:bg-black/20 data-[disabled=true]:pointer-events-none"
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
        {disabled && <p>{t("ABOUT")}</p>}
        <span
          className="font-semibold flex items-center gap-1 w-fit"
          onClick={(e) => e.stopPropagation()}
        >
          {project.href}
        </span>
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
