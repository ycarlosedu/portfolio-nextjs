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

  const { isVisible } = useIsVisible(ref);
  isVisible && setVisibleSection(SECTIONS.HERO);

  return (
    <section
      ref={ref}
      id={SECTIONS.HERO}
      className="px-default w-full flex items-center justify-center md:h-screen relative"
    >
      <Image
        className="hidden lg:block absolute top-28"
        src="images/assets/triangle.svg"
        width={200}
        height={210}
        alt="Triangle svg"
      />
      <div className="flex flex-col gap-8 pb-8 w-full max-w-default">
        <div className="flex flex-col gap-16 md:gap-0 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 max-w-[500px]">
            <Typography.H1 className="text-primary lg:text-7xl">
              Frontend Developer.
            </Typography.H1>
            <Typography.P className="text-xl">{t("SUBTITLE")}</Typography.P>
          </div>
          <div className="relative w-fit">
            <Image
              className="z-10 relative w-[288px] h-[460px]"
              src="/images/profile.png"
              width={288}
              height={460}
              alt="Carlos Silva Profile Image"
            />
            <Image
              className="z-0 absolute w-[288px] h-[460px] -bottom-4 -right-4 2xl:-bottom-8 2xl:-right-8"
              src="images/assets/tall-rectangle.svg"
              width={288}
              height={460}
              alt="Rectangle svg"
            />
          </div>
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

      <Image
        className="hidden md:block absolute -bottom-32 left-52"
        src="images/assets/x.svg"
        width={200}
        height={232}
        alt="X svg"
      />

      <Image
        className="hidden lg:block absolute bottom-0 right-52"
        src="images/assets/waves.svg"
        width={300}
        height={210}
        alt="Waves svg"
      />
    </section>
  );
}
