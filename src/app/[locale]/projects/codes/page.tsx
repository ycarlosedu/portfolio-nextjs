import { Metadata } from "next";

import { Contact } from "@/components/contact";
import { TransitionContainer } from "@/components/ui/TransitionContainer";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

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
      canonical: "https://carlossilva.vercel.app/pt-br/projects/codes/",
      languages: {
        "en-US": "https://carlossilva.vercel.app/en-us/projects/codes/",
        "pt-BR": "https://carlossilva.vercel.app/pt-br/projects/codes/"
      }
    }
  };
}

export default async function Codes({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("NOT_FOUND");

  return (
    <TransitionContainer>
      <Contact />
    </TransitionContainer>
  );
}
