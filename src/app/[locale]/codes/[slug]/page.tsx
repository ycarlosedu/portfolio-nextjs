import { Metadata } from "next";

import { Contact } from "@/components/contact";
import { ProjectAbout } from "@/components/projectAbout";
import { ProjectImages } from "@/components/projectImages";

import { FloatingButton } from "@/components/ui/FloatingButton";
import { TransitionContainer } from "@/components/ui/TransitionContainer";
import { CODE_PROJECTS, PROJECT_TYPE } from "@/constants";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import { codeProjects } from "../projects";

export function generateStaticParams() {
  return Object.values(CODE_PROJECTS).map((slug) => ({ slug }));
}

type Props = {
  params: {
    locale: string;
    slug: CODE_PROJECTS;
  };
};

export async function generateMetadata({
  params: { locale, slug }
}: Props): Promise<Metadata> {
  const project = codeProjects.find((project) => project.slug === slug);

  if (!project) {
    redirect("/404");
  }

  const t = await getTranslations({ locale, namespace: "METADATA.CODES" });

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
    alternates: {
      canonical: `https://carlossilva.vercel.app/pt-br/codes/${slug}`,
      languages: {
        "en-US": `https://carlossilva.vercel.app/en-us/codes/${slug}`,
        "pt-BR": `https://carlossilva.vercel.app/pt-br/codes/${slug}`
      }
    }
  };
}

export default async function CodeProject({ params: { locale, slug } }: Props) {
  unstable_setRequestLocale(locale);
  const project = codeProjects.find((project) => project.slug === slug);

  if (!project) {
    redirect("/404");
  }

  const t = await getTranslations({ locale, namespace: "CODES" });

  return (
    <>
      <FloatingButton name={t("BACK_BUTTON")} href="/codes" />
      <TransitionContainer>
        <ProjectImages project={project} projectType={PROJECT_TYPE.CODES} />
        <ProjectAbout
          projectName={project.name}
          projectType={PROJECT_TYPE.CODES}
        />
        <Contact />
      </TransitionContainer>
    </>
  );
}
