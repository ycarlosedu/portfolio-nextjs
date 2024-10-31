import { Metadata } from "next";

import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import { FloatingButton } from "@/components/ui/FloatingButton";
import { TransitionContainer } from "@/components/ui/TransitionContainer";
import { PROJECT_TYPE } from "@/constants";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { designProjects } from "./projects";

type Props = {
  params: {
    locale: string;
  };
};
export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "METADATA.DESIGNS" });

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
    alternates: {
      canonical: "https://carlossilva.vercel.app/pt-br/designs/",
      languages: {
        "en-US": "https://carlossilva.vercel.app/en-us/designs/",
        "pt-BR": "https://carlossilva.vercel.app/pt-br/designs/"
      }
    }
  };
}

export default async function Designs({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "DESIGNS" });

  return (
    <>
      <FloatingButton name={t("BACK_BUTTON")} href="/" />
      <TransitionContainer>
        <Projects
          projects={designProjects}
          translations={PROJECT_TYPE.DESIGNS}
        />
        <Contact />
      </TransitionContainer>
    </>
  );
}
