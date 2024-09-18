"use client";

import { Typography } from "@/components/ui/Typography";
import { SECTIONS, URL_SOCIALS } from "@/constants";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useScrollToPreviousElement } from "@/hooks/useScrollPrevious";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo
} from "@phosphor-icons/react/dist/ssr";
import Logo from "images/logo/full.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { TransitionLink } from "./ui/TransitionLink";

export function Contact() {
  const t = useTranslations("CONTACT");

  const ref = useRef(null);

  const { isScrollingUp } = useScrollDirection();
  const { isVisible } = useIsVisible(ref);
  useScrollToPreviousElement(
    SECTIONS.SEND_ME_A_MESSAGE,
    isScrollingUp,
    isVisible
  );

  return (
    <section
      ref={ref}
      id={SECTIONS.CONTACT}
      className="px-default md:h-screen w-full bg-gray-light dark:bg-black flex flex-col items-center justify-center py-4 gap-12"
    >
      <div className="flex flex-col max-w-default w-full gap-12 pt-[300px] md:flex-row">
        <div className="flex flex-col gap-6 p-8 rounded-4xl w-full bg-white dark:bg-gray-dark">
          <Typography.H2 className="text-primary text-xl font-semibold">
            {t("SOCIAL_TITLE")}
          </Typography.H2>
          <ul className="flex flex-col gap-6">
            <li>
              <a
                target="_blank"
                className="break-all flex gap-3 items-center"
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
                className="break-all flex gap-3 items-center"
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
                className="break-all flex gap-3 items-center"
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

        <div className="flex flex-col gap-6 p-8 rounded-4xl w-full bg-white dark:bg-gray-dark">
          <Typography.H2 className="text-primary text-xl font-semibold">
            {t("PAGES.TITLE")}
          </Typography.H2>
          <ul className="flex flex-col gap-6">
            <li>
              <TransitionLink href="/">{t("PAGES.HOME")}</TransitionLink>
            </li>
            <li>
              <TransitionLink href="/projects/codes">
                {t("PAGES.CODES")}
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/projects/designs">
                {t("PAGES.DESIGNS")}
              </TransitionLink>
            </li>
          </ul>
        </div>
      </div>

      <footer className="flex flex-col gap-12 max-w-default w-full">
        <hr className="h-[2px] w-full bg-black" />
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:items-center">
          <Image src={Logo} alt="Carlos Silva Logo" width={200} height={56} />
          <Typography.P className="text-center">
            Copyright ©2024 Carlos Eduardo Oliveira da Silva
          </Typography.P>
        </div>
      </footer>
    </section>
  );
}
