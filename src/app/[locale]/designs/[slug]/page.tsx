import { Metadata } from "next";

import { Contact } from "@/components/contact";
import { ProjectAbout } from "@/components/projectAbout";
import { ProjectImages } from "@/components/projectImages";
import { TransitionContainer } from "@/components/ui/TransitionContainer";
import { DESIGN_PROJECTS, PROJECT_TYPE } from "@/constants";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import { designProjects } from "../projects";

export function generateStaticParams() {
  return Object.values(DESIGN_PROJECTS).map((slug) => ({ slug }));
}

type Props = {
  params: {
    locale: string;
    slug: DESIGN_PROJECTS;
  };
};

export async function generateMetadata({
  params: { locale, slug }
}: Props): Promise<Metadata> {
  const project = designProjects.find((project) => project.slug === slug);

  if (!project) {
    redirect("/404");
  }

  const t = await getTranslations({ locale, namespace: "METADATA.DESIGNS" });

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
    alternates: {
      canonical: `https://carlossilva.vercel.app/pt-br/designs/${slug}`,
      languages: {
        "en-US": `https://carlossilva.vercel.app/en-us/designs/${slug}`,
        "pt-BR": `https://carlossilva.vercel.app/pt-br/designs/${slug}`
      }
    }
  };
}

export default async function CodeProject({ params: { locale, slug } }: Props) {
  const project = designProjects.find((project) => project.slug === slug);

  if (!project) {
    redirect("/404");
  }

  unstable_setRequestLocale(locale);

  return (
    <TransitionContainer>
      <ProjectImages project={project} projectType={PROJECT_TYPE.DESIGNS} />
      <ProjectAbout
        projectName={project.name}
        projectType={PROJECT_TYPE.DESIGNS}
      />
      <Contact />
    </TransitionContainer>
  );
}
