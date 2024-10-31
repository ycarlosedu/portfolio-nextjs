"use client";

import { Typography } from "@/components/ui/Typography";
import { SECTIONS } from "@/constants";
import { useIsVisible } from "@/hooks/useIsVisible";
import useVisibleSectionStore from "@/store/visibleSectionStore";
import { technologies } from "@/utils/carousel/technologies";
import { tools } from "@/utils/carousel/tools";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import Carousel from "./ui/Carousel";

export function WhatIDo() {
  const t = useTranslations("HOME.WHAT_I_DO");
  const { setVisibleSection } = useVisibleSectionStore();

  const ref = useRef(null);

  const { isVisible } = useIsVisible(ref);
  isVisible && setVisibleSection(SECTIONS.WHAT_I_DO);

  return (
    <section
      ref={ref}
      id={SECTIONS.WHAT_I_DO}
      className="px-default w-full min-h-screen xl:h-screen bg-gray-light dark:bg-black flex items-center justify-center relative"
    >
      <Image
        className="hidden xl:block absolute min-h-screen bottom-0 top-0 right-1/2 -rotate-12"
        src="images/assets/divisor-vertical.svg"
        width={70}
        height={1200}
        alt="Vertical Divisor svg"
      />
      <div className="max-w-default w-full flex flex-col md:flex-row md:justify-between gap-20 py-32">
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
            <Carousel list={technologies} />
          </div>
        </div>

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
            <Carousel list={tools} />
          </div>
        </div>
      </div>
    </section>
  );
}
