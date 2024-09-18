import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { OverTheYears } from "@/components/overTheYears";
import { SeeMyWork } from "@/components/seeMyWork";
import { SendMeAMessage } from "@/components/sendMeAMessage";
import { TransitionContainer } from "@/components/ui/TransitionContainer";
import { WhatIDo } from "@/components/whatIDo";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "METADATA.HOME" });

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
    alternates: {
      canonical: "https://carlossilva.vercel.app/pt-br/",
      languages: {
        "en-US": "https://carlossilva.vercel.app/en-us/",
        "pt-BR": "https://carlossilva.vercel.app/pt-br/"
      }
    }
  };
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <TransitionContainer>
      <Hero />
      <WhatIDo />
      <OverTheYears />
      <SeeMyWork />
      <SendMeAMessage />
      <Contact />
    </TransitionContainer>
  );
}
