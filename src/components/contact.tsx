"use client";

import { Typography } from "@/components/ui/Typography";
import { SECTIONS, URL_SOCIALS } from "@/constants";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo
} from "@phosphor-icons/react/dist/ssr";
import Logo from "images/logo/full.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { TransitionLink } from "./ui/TransitionLink";

export function Contact() {
  const t = useTranslations("CONTACT");

  return (
    <section
      data-observe-visibility="true"
      id={SECTIONS.CONTACT}
      className="px-default 2xl:h-screen w-full bg-gray-light dark:bg-black flex flex-col items-center justify-center py-4 gap-12 relative overflow-clip"
    >
      <Image
        className="absolute top-8 left-0 md:top-24 h-auto animate-ring-phone"
        src="/images/assets/phone.svg"
        width={200}
        height={210}
        alt="Phone svg"
      />
      <Image
        className="absolute -top-10 -right-20 rotate-45 h-auto"
        src="/images/assets/waves-full.svg"
        width={300}
        height={210}
        alt="Waves-full svg"
      />
      <Image
        className="absolute hidden md:block top-10 lg:top-32 right-1/4 h-auto animate-rotate"
        src="/images/assets/sparkles.svg"
        width={200}
        height={210}
        alt="Sparkles svg"
      />
      <div className="flex flex-col max-w-default w-full gap-12 pt-[300px] md:flex-row">
        <div className="flex flex-col gap-6 p-8 rounded-4xl w-full bg-white dark:bg-gray-dark shadow-top">
          <Typography.H2 className="text-primary text-xl font-semibold">
            {t("SOCIAL_TITLE")}
          </Typography.H2>
          <ul className="flex flex-col gap-6">
            <li>
              <a
                target="_blank"
                className="break-all link"
                href={URL_SOCIALS.OUTLOOK.FULL}
              >
                <EnvelopeSimple
                  size={24}
                  className="min-w-6 min-h-6"
                  weight="bold"
                />
                {URL_SOCIALS.OUTLOOK.MINIFIED}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="break-all link"
                href={URL_SOCIALS.GITHUB.FULL}
              >
                <GithubLogo
                  size={24}
                  className="min-w-6 min-h-6"
                  weight="bold"
                />
                {URL_SOCIALS.GITHUB.MINIFIED}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="break-all link"
                href={URL_SOCIALS.LINKEDIN.FULL}
              >
                <LinkedinLogo
                  size={24}
                  className="min-w-6 min-h-6"
                  weight="bold"
                />
                {URL_SOCIALS.LINKEDIN.MINIFIED}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 p-8 rounded-4xl w-full bg-white dark:bg-gray-dark shadow-default">
          <Typography.H2 className="text-primary text-xl font-semibold">
            {t("PAGES.TITLE")}
          </Typography.H2>
          <ul className="flex flex-col gap-6">
            <li>
              <TransitionLink className="link" href="/">
                {t("PAGES.HOME")}
              </TransitionLink>
            </li>
            <li>
              <TransitionLink className="link" href="/codes">
                {t("PAGES.CODES")}
              </TransitionLink>
            </li>
            <li>
              <TransitionLink className="link" href="/designs">
                {t("PAGES.DESIGNS")}
              </TransitionLink>
            </li>
          </ul>
        </div>
      </div>

      <footer className="flex flex-col gap-12 max-w-default w-full">
        <hr className="h-[2px] w-full bg-black" />
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:items-center">
          <Image
            src={Logo}
            alt="Carlos Silva Logo"
            width={200}
            height={56}
            className="h-auto"
          />
          <Typography.P className="text-center">
            Copyright ©{new Date().getFullYear().toString()} Carlos Eduardo
            Oliveira da Silva
          </Typography.P>
        </div>
      </footer>

      <Image
        className="absolute hidden lg:block -bottom-8 -left-16 rotate-45 h-auto"
        src="/images/assets/random-dots.svg"
        width={200}
        height={210}
        alt="Random-dots svg"
      />
      <Image
        className="absolute hidden lg:block -bottom-14 -right-14 h-auto animate-scale-down"
        src="/images/assets/double-squares.svg"
        width={200}
        height={210}
        alt="Double-squares svg"
      />
    </section>
  );
}
