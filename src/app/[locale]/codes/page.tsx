import { Metadata } from "next";

import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import { TransitionContainer } from "@/components/ui/TransitionContainer";
import { PROJECT_TYPE } from "@/constants";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { codeProjects } from "./projects";

type Props = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "METADATA.CODES" });

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
    alternates: {
      canonical: "https://carlossilva.vercel.app/pt-br/codes/",
      languages: {
        "en-US": "https://carlossilva.vercel.app/en-us/codes/",
        "pt-BR": "https://carlossilva.vercel.app/pt-br/codes/"
      }
    }
  };
}

export default async function Codes({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <TransitionContainer>
      <Projects projects={codeProjects} translations={PROJECT_TYPE.CODES} />
      <Contact />
    </TransitionContainer>
  );
}
