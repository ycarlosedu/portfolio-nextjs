import { TransitionLink } from "@/components/ui/TransitionLink";
import { Typography } from "@/components/ui/Typography";
import { Pages } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CarouselList } from "../Carousel";

export type ProjectInfos = {
  title: string;
  href: string;
  internal_href: Pages;
  image: string;
  alt: string;
  images: CarouselList;
};

type ProjectCardProps = {
  project: ProjectInfos;
  translations: "CODES" | "DESIGNS";
};

export function ProjectCard({ project, translations }: ProjectCardProps) {
  const t = useTranslations(`${translations}.PROJECTS`);

  return (
    <TransitionLink
      href={project.internal_href}
      className="w-full max-w-[368px] flex flex-col gap-4 p-4 border border-gray-light dark:border-black rounded-lg hover:scale-[1.05] transition-all hover:bg-gray-light/20 dark:hover:bg-black/20"
    >
      <div className="flex items-center min-h-[247px] p-8 justify-center bg-gray-light dark:bg-black">
        <Image
          src={project.image}
          alt={t(project.alt)}
          width={192}
          height={183}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Typography.H3 className="text-primary text-base font-normal">
          {t(project.title)}
        </Typography.H3>
        <span className="font-semibold">{project.href}</span>
      </div>
    </TransitionLink>
  );
}
