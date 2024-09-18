import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { OverTheYears } from "@/components/overTheYears";
import { SeeMyWork } from "@/components/seeMyWork";
import { SendMeAMessage } from "@/components/sendMeAMessage";
import { FloatingMenu } from "@/components/ui/FloatingMenu";
import { TransitionContainer } from "@/components/ui/TransitionContainer";
import { WhatIDo } from "@/components/whatIDo";
import { SECTIONS, URL_SOCIALS } from "@/constants";
import {
  AddressBook,
  ChatCircleText,
  CirclesThreePlus,
  Code,
  EnvelopeSimple,
  GithubLogo,
  House,
  LinkedinLogo,
  Path
} from "@phosphor-icons/react/dist/ssr";
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

const socials = [
  {
    name: "Outlook",
    icon: <EnvelopeSimple size={20} />,
    href: URL_SOCIALS.OUTLOOK.FULL,
    target: "_blank"
  },
  {
    name: "GitHub",
    icon: <GithubLogo size={20} />,
    href: URL_SOCIALS.GITHUB.FULL,
    target: "_blank"
  },
  {
    name: "LinkedIn",
    icon: <LinkedinLogo size={20} />,
    href: URL_SOCIALS.LINKEDIN.FULL,
    target: "_blank"
  }
];

const sections = [
  { icon: <House size={20} />, href: `#${SECTIONS.HERO}`, name: "Hero" },
  {
    icon: <Code size={20} />,
    href: `#${SECTIONS.WHAT_I_DO}`,
    name: "What I Do"
  },
  {
    icon: <Path size={20} />,
    href: `#${SECTIONS.OVER_THE_YEARS}`,
    name: "Over The Years"
  },
  {
    icon: <CirclesThreePlus size={20} />,
    href: `#${SECTIONS.SEE_MY_WORK}`,
    name: "See My Work"
  },
  {
    icon: <ChatCircleText size={20} />,
    href: `#${SECTIONS.SEND_ME_A_MESSAGE}`,
    name: "Send Me A Message"
  },
  {
    icon: <AddressBook size={20} />,
    href: `#${SECTIONS.CONTACT}`,
    name: "Contact"
  }
];

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <FloatingMenu links={socials} side="left" className="hidden 2xl:flex" />
      <TransitionContainer>
        <Hero />
        <WhatIDo />
        <OverTheYears />
        <SeeMyWork />
        <SendMeAMessage />
        <Contact />
      </TransitionContainer>
      <FloatingMenu links={sections} className="hidden md:flex" />
    </>
  );
}
