"use client";

import { Typography } from "@/components/ui/Typography";
import { SECTIONS } from "@/constants";
import { technologies } from "@/utils/carousel/technologies";
import { tools } from "@/utils/carousel/tools";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Carousel from "./ui/Carousel";

export function WhatIDo() {
  const t = useTranslations("HOME.WHAT_I_DO");

  return (
    <section
      data-observe-visibility="true"
      id={SECTIONS.WHAT_I_DO}
      className="px-default w-full min-h-screen xl:h-screen bg-gray-light dark:bg-black flex items-center justify-center relative overflow-x-clip"
    >
      <div className="max-w-default w-full flex flex-col md:flex-row md:justify-between md:gap-20 py-32 relative">
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="flex flex-col gap-3">
            <Typography.H2 className="text-primary">
              {t("DEVELOPMENT")}
            </Typography.H2>
            <Typography.P className="md:h-40 lg:text-xl">
              {t("DEVELOPMENT_DESCRIPTION")}
            </Typography.P>
          </div>
          <div className="flex flex-col gap-3">
            <Typography.H2 className="text-primary">
              {t("TECHNOLOGIES")}
            </Typography.H2>
            <Carousel
              list={technologies}
              imageClassName="max-h-64 md:w-[512px]"
            />
          </div>
        </div>

        <Image
          className="hidden xl:block absolute h-full bottom-0 top-0 right-[48%] -rotate-6"
          src="images/assets/divisor-vertical.svg"
          width={70}
          height={1200}
          alt="Vertical Divisor svg"
        />
        <Image
          className="md:hidden w-full max-h-[150px] h-auto"
          src="images/assets/divisor-horizontal.svg"
          width={768}
          height={70}
          alt="Horizontal Divisor svg"
        />

        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="flex flex-col gap-3">
            <Typography.H2 className="text-primary">
              {t("DESIGN")}
            </Typography.H2>
            <Typography.P className="md:h-40 lg:text-xl leading-6">
              {t("DESIGN_DESCRIPTION")}
            </Typography.P>
          </div>
          <div className="flex flex-col gap-3">
            <Typography.H2 className="text-primary">{t("TOOLS")}</Typography.H2>
            <Carousel list={tools} imageClassName="max-h-64 md:w-[512px]" />
          </div>
        </div>
      </div>

      <Image
        className="absolute -bottom-16 md:bottom-0 -right-8 h-auto"
        src="images/assets/rain.svg"
        width={151}
        height={159}
        alt="Rain svg"
      />
    </section>
  );
}
