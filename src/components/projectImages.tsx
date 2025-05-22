import { ProjectInfos } from "@/components/ui/ProjectCard";
import { Typography } from "@/components/ui/Typography";
import { PROJECT_TYPE } from "@/constants";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  FigmaLogo,
  GithubLogo,
  Globe,
  Lock
} from "@phosphor-icons/react/dist/ssr";
import { cva } from "class-variance-authority";
import { getTranslations } from "next-intl/server";
import { Button } from "./ui/Button";
import Carousel from "./ui/Carousel";

const imagesVariants = cva("rounded-xl mx-4", {
  variants: {
    isMobile: {
      true: "h-[650px] w-auto",
      false: "w-full h-auto"
    }
  }
});

type ProjectsProps = {
  project: ProjectInfos;
  projectType: PROJECT_TYPE;
};

export async function ProjectImages({ project, projectType }: ProjectsProps) {
  const t = await getTranslations(`${projectType}.PROJECTS.${project.name}`);

  const imagesTranslated = project.images.map((image) => ({
    name: t(`IMAGES.${image.name}`),
    image: image.image
  }));

  return (
    <section className="px-default md:min-h-screen max-w-default w-full flex flex-col items-center gap-8 md:pt-32 pb-10">
      <Typography.H1 className="text-center">{t("TITLE")}</Typography.H1>
      <Carousel
        list={imagesTranslated}
        imageClassName={cn(imagesVariants({ isMobile: project.isMobile }))}
        showImageDescription
      />

      <div className="flex flex-wrap gap-2.5 items-center justify-center w-full">
        <Button asChild disabled={project.isWebsitePrivate} effect="shine">
          <a href={project.websiteHref} target="_blank">
            <Globe size={16} />
            WEBSITE
            {project.isWebsitePrivate ? (
              <Lock size={16} />
            ) : (
              <ArrowRight size={16} />
            )}
          </a>
        </Button>

        {projectType === PROJECT_TYPE.CODES && (
          <Button asChild disabled={project.isRepositoryPrivate} effect="shine">
            <a href={project.repositoryHref} target="_blank">
              <GithubLogo size={16} />
              GITHUB
              {project.isRepositoryPrivate ? (
                <Lock size={16} />
              ) : (
                <ArrowRight size={16} />
              )}
            </a>
          </Button>
        )}

        {projectType === PROJECT_TYPE.DESIGNS && (
          <Button asChild disabled={project.isDesignPrivate} effect="shine">
            <a href={project.designHref} target="_blank">
              <FigmaLogo size={16} />
              FIGMA
              {project.isDesignPrivate ? (
                <Lock size={16} />
              ) : (
                <ArrowRight size={16} />
              )}
            </a>
          </Button>
        )}
      </div>
    </section>
  );
}
