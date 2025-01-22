"use client";

import { Typography } from "@/components/ui/Typography";
import { SECTIONS } from "@/constants";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("HOME.HERO");

  useIsVisible();

  return (
    <section
      data-observe-visibility="true"
      id={SECTIONS.HERO}
      className="px-default md:pt-28 w-full flex items-center justify-center min-h-screen 2xl:h-screen relative max-w-screen overflow-x-clip"
    >
      <Image
        className="hidden lg:block absolute top-28 h-auto animate-float"
        src="images/assets/triangle.svg"
        width={200}
        height={210}
        alt="Triangle svg"
      />
      <div className="flex flex-col gap-8 pb-8 w-full max-w-default">
        <div className="flex flex-col gap-16 md:gap-0 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 max-w-[400px] lg:max-w-[500px]">
            <Typography.H1 className="text-primary lg:text-7xl">
              Frontend Developer.
            </Typography.H1>
            <Typography.P className="text-xl">{t("SUBTITLE")}</Typography.P>
          </div>
          <div className="animate-float-shadow w-fit rounded-lg overflow-hidden transition-transform hover:rotate-3">
            <Image
              className="h-auto transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105"
              src="/images/profile.webp"
              width={288}
              height={384}
              alt="Carlos Silva Profile Image"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:gap-16 z-20">
          <Typography.P className="text-sm max-w-[240px] md:text-base">
            {t("DESCRIPTION1")}
          </Typography.P>
          <Typography.P className="text-sm max-w-[240px] md:text-base">
            {t("DESCRIPTION2")}
          </Typography.P>
        </div>
      </div>

      <Image
        className="md:hidden z-10 absolute -bottom-28 -left-14 h-auto"
        src="images/assets/triangle.svg"
        width={132}
        height={139}
        alt="Triangle svg"
      />

      <Image
        className="absolute z-10 -bottom-44 left-72 md:-bottom-32 md:left-28 2xl:left-52 h-auto animate-scale-down"
        src="images/assets/x.svg"
        width={200}
        height={232}
        alt="X svg"
      />

      <Image
        className="hidden lg:block absolute bottom-0 right-20 xl:right-52 h-auto animate-float-side"
        src="images/assets/waves.svg"
        width={300}
        height={210}
        alt="Waves svg"
      />
    </section>
  );
}
