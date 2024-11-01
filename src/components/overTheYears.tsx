"use client";

import { Typography } from "@/components/ui/Typography";
import { SECTIONS } from "@/constants";
import { useIsVisible } from "@/hooks/useIsVisible";
import useVisibleSectionStore from "@/store/visibleSectionStore";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

export function OverTheYears() {
  const t = useTranslations("HOME.OVER_THE_YEARS");
  const { setVisibleSection } = useVisibleSectionStore();

  const ref = useRef(null);

  const { isVisible } = useIsVisible(ref);
  isVisible && setVisibleSection(SECTIONS.OVER_THE_YEARS);

  return (
    <section
      ref={ref}
      id={SECTIONS.OVER_THE_YEARS}
      className="px-default w-full min-h-screen xl:h-screen flex items-center justify-center py-20 relative overflow-x-clip"
    >
      <Image
        className="absolute -bottom-7 -left-36 md:-top-32 md:-left-2"
        src="images/assets/divider.svg"
        width={250}
        height={210}
        alt="Divider svg"
      />
      <Image
        className="absolute -bottom-10 -right-12 md:top-6 md:right-0"
        src="images/assets/half-circles2.svg"
        width={146}
        height={154}
        alt="Half-circles svg"
      />
      <div className="flex gap-4 max-w-default lg:gap-28 justify-between items-center">
        <div className="flex flex-col gap-4 md:w-1/2">
          <Typography.H2 className="text-5xl leading-[1.2] text-primary">
            {t("TITLE")}
          </Typography.H2>
          <Typography.P>{t("PARAGRAPH1")}</Typography.P>
          <Typography.P>{t("PARAGRAPH2")}</Typography.P>
          <Typography.P>{t("PARAGRAPH3")}</Typography.P>
          <Typography.P>
            {t.rich("PARAGRAPH4", {
              onne: (chunks) => (
                <a
                  href="https://onne.site"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  {chunks}
                </a>
              ),
              savebys: (chunks) => (
                <a
                  href="https://savebys.com"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  {chunks}
                </a>
              )
            })}
          </Typography.P>
          <Typography.P>{t("PARAGRAPH5")}</Typography.P>
        </div>
        <Image
          src="/images/over-the-years.svg"
          alt="An illustration showing the companies that Carlos worked with over the years"
          className="hidden w-1/2 md:block"
          width={500}
          height={700}
        />
      </div>

      <Image
        className="absolute hidden md:block -bottom-32 left-0"
        src="images/assets/circles.svg"
        width={200}
        height={210}
        alt="Circles svg"
      />
    </section>
  );
}
