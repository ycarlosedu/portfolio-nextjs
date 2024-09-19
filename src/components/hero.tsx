"use client";

import { Typography } from "@/components/ui/Typography";
import { SECTIONS } from "@/constants";
import { useIsVisible } from "@/hooks/useIsVisible";
// import { useScrollDirection } from "@/hooks/useScrollDirection";
// import { useScrollToNextElement } from "@/hooks/useScrollNext";
import useVisibleSectionStore from "@/store/visibleSectionStore";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const t = useTranslations("HOME.HERO");
  const { setVisibleSection } = useVisibleSectionStore();
  const ref = useRef(null);

  // const { isScrollingDown } = useScrollDirection();
  const { isVisible } = useIsVisible(ref);
  isVisible && setVisibleSection(SECTIONS.HERO);

  // useScrollToNextElement(SECTIONS.WHAT_I_DO, isScrollingDown, isVisible);

  return (
    <section
      ref={ref}
      id={SECTIONS.HERO}
      className="px-default w-full flex items-center justify-center md:h-screen"
    >
      <div className="flex flex-col gap-8 pb-8 w-full max-w-default">
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 max-w-[500px]">
            <Typography.H1 className="text-primary lg:text-7xl">
              Frontend Developer.
            </Typography.H1>
            <Typography.P className="text-xl">{t("SUBTITLE")}</Typography.P>
          </div>
          <Image
            src="/images/profile.png"
            width={288}
            height={460}
            alt="Carlos Silva Profile Image"
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:gap-16">
          <Typography.P className="text-sm max-w-[240px] md:text-base">
            {t("DESCRIPTION1")}
          </Typography.P>
          <Typography.P className="text-sm max-w-[240px] md:text-base">
            {t("DESCRIPTION2")}
          </Typography.P>
        </div>
      </div>
    </section>
  );
}
