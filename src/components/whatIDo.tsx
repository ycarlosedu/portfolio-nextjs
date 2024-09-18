import { Typography } from "@/components/ui/Typography";
import { useTranslations } from "next-intl";
import Carousel from "./ui/Carousel";

const technologies = [
  {
    name: "HTML5",
    image: "/images/technologies/html5.svg"
  },
  {
    name: "CSS3",
    image: "/images/technologies/css3.svg"
  },
  {
    name: "JavaScript",
    image: "/images/technologies/javascript.svg"
  },
  {
    name: "TypeScript",
    image: "/images/technologies/typescript.svg"
  },
  {
    name: "React",
    image: "/images/technologies/react.svg"
  },
  {
    name: "ViteJS",
    image: "/images/technologies/vitejs.svg"
  },
  {
    name: "Next.js",
    image: "/images/technologies/nextjs.svg"
  },
  {
    name: "NodeJS",
    image: "/images/technologies/nodejs.svg"
  },
  {
    name: "Tailwind CSS",
    image: "/images/technologies/tailwindcss.svg"
  },
  {
    name: "Bootstrap",
    image: "/images/technologies/bootstrap.svg"
  },
  {
    name: "Jest",
    image: "/images/technologies/jest.svg"
  },
  {
    name: "Cypress",
    image: "/images/technologies/cypress.svg"
  },
  {
    name: "Storybook",
    image: "/images/technologies/storybook.svg"
  },
  {
    name: "Git",
    image: "/images/technologies/git.svg"
  },
  {
    name: "Docker",
    image: "/images/technologies/docker.svg"
  },
  {
    name: "Jenkins",
    image: "/images/technologies/jenkins.svg"
  },
  {
    name: "MySQL",
    image: "/images/technologies/mysql.svg"
  }
];

const tools = [
  {
    name: "Figma",
    image: "/images/tools/figma.svg"
  },
  {
    name: "Canva",
    image: "/images/tools/canva.svg"
  },
  {
    name: "Photoshop",
    image: "/images/tools/photoshop.svg"
  },
  {
    name: "Illustrator",
    image: "/images/tools/illustrator.svg"
  },
  {
    name: "Whimsical",
    image: "/images/tools/whimsical.svg"
  },
  {
    name: "Miro",
    image: "/images/tools/miro.svg"
  }
];

export function WhatIDo() {
  const t = useTranslations("HOME.WHAT_I_DO");

  return (
    <section
      id="what-i-do"
      className="px-default w-full md:h-screen bg-gray-light dark:bg-black flex items-center justify-center"
    >
      <div className="max-w-default w-full flex flex-col md:flex-row md:justify-between gap-20 py-32">
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="flex flex-col gap-3">
            <Typography.H2>{t("DEVELOPMENT")}</Typography.H2>
            <Typography.P className="h-40 lg:text-xl">
              {t("DEVELOPMENT_DESCRIPTION")}
            </Typography.P>
          </div>
          <div className="flex flex-col gap-3">
            <Typography.H2>{t("TECHNOLOGIES")}</Typography.H2>
            <Carousel list={technologies} />
          </div>
        </div>

        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="flex flex-col gap-3">
            <Typography.H2>{t("DESIGN")}</Typography.H2>
            <Typography.P className="h-40 lg:text-xl leading-6">
              {t("DESIGN_DESCRIPTION")}
            </Typography.P>
          </div>
          <div className="flex flex-col gap-3">
            <Typography.H2>{t("TOOLS")}</Typography.H2>
            <Carousel list={tools} />
          </div>
        </div>
      </div>
    </section>
  );
}
