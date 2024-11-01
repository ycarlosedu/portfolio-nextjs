"use client";

import { Typography } from "@/components/ui/Typography";
import { SECTIONS } from "@/constants";
import { useIsVisible } from "@/hooks/useIsVisible";
import useVisibleSectionStore from "@/store/visibleSectionStore";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "./ui/Button";
import { TransitionLink } from "./ui/TransitionLink";

export function SeeMyWork() {
  const t = useTranslations("HOME.SEE_MY_WORK");
  const { setVisibleSection } = useVisibleSectionStore();

  const ref = useRef(null);

  const { isVisible } = useIsVisible(ref);
  isVisible && setVisibleSection(SECTIONS.SEE_MY_WORK);

  return (
    <section
      ref={ref}
      id={SECTIONS.SEE_MY_WORK}
      className="px-default w-full md:h-screen bg-gray-light dark:bg-black flex flex-col items-center justify-center py-20 relative overflow-x-clip"
    >
      <div className="bg-white dark:bg-gray-dark flex flex-col gap-8 w-full max-w-default md:h-[622px] md:flex-row md:justify-between md:gap-0 shadow-default">
        <div className="flex flex-col p-4 gap-16 md:w-full md:justify-center md:p-10 lg:p-20">
          <div className="flex flex-col gap-3">
            <Typography.H2 className="text-5xl leading-[1.2]">
              {t.rich("CODE_TITLE", {
                span: (chunks) => (
                  <span className="text-primary">{chunks}</span>
                ),
                br: () => <br />
              })}
            </Typography.H2>
            <Typography.P className="w-36">
              {t("CODE_DESCRIPTION")}
            </Typography.P>
          </div>
          <Button asChild>
            <TransitionLink href={"/codes"}>
              {t("CODE_BUTTON")}
              <ArrowRight size={16} weight="bold" />
            </TransitionLink>
          </Button>
        </div>

        <hr className="h-[1px] w-full md:min-h-full md:w-[1px] bg-black" />

        <div className="flex flex-col p-4 gap-16 md:w-full md:justify-center md:p-10 lg:p-20">
          <div className="flex flex-col gap-3">
            <Typography.H2 className="text-5xl leading-[1.2]">
              {t.rich("DESIGN_TITLE", {
                span: (chunks) => (
                  <span className="text-primary">{chunks}</span>
                ),
                br: () => <br />
              })}
            </Typography.H2>
            <Typography.P className="w-36">
              {t("DESIGN_DESCRIPTION")}
            </Typography.P>
          </div>
          <Button asChild>
            <TransitionLink href={"/designs"}>
              {t("DESIGN_BUTTON")}
              <ArrowRight size={16} weight="bold" />
            </TransitionLink>
          </Button>
        </div>
      </div>

      <Image
        className="absolute hidden md:block bottom-0 left-0"
        src="/images/assets/double-circle.svg"
        width={200}
        height={210}
        alt="Double-circle svg"
      />

      <Image
        className="absolute hidden md:block bottom-1/2 -right-16"
        src="/images/assets/square.svg"
        width={200}
        height={210}
        alt="Square svg"
      />
    </section>
  );
}
