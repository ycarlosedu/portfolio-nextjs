import { Metadata } from "next";

import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import { TransitionContainer } from "@/components/ui/TransitionContainer";
import { Pages } from "@/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

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

const projects = [
  {
    title: "PERSONAL_WEBSITE.TITLE",
    href: "FIGMA",
    internal_href: "/designs/personal-website" as Pages,
    image: "/images/logo/full.svg",
    alt: "PERSONAL_WEBSITE.ALT"
  },
  {
    title: "PERSONAL_WEBSITE.TITLE",
    href: "FIGMA",
    internal_href: "/designs/personal-website" as Pages,
    image: "/images/logo/full.svg",
    alt: "PERSONAL_WEBSITE.ALT"
  },
  {
    title: "PERSONAL_WEBSITE.TITLE",
    href: "FIGMA",
    internal_href: "/designs/personal-website" as Pages,
    image: "/images/logo/full.svg",
    alt: "PERSONAL_WEBSITE.ALT"
  }
];

export default async function Designs({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <TransitionContainer>
      <Projects projects={projects} translations={"DESIGNS"} />
      <Contact />
    </TransitionContainer>
  );
}
