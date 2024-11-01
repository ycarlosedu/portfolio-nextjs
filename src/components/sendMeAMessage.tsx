"use client";

import { Typography } from "@/components/ui/Typography";

import { SECTIONS } from "@/constants";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import useVisibleSectionStore from "@/store/visibleSectionStore";
import Image from "next/image";
import { MessageForm } from "./messageForm";

export function SendMeAMessage() {
  const t = useTranslations("HOME.SEND_ME_A_MESSAGE");
  const { setVisibleSection } = useVisibleSectionStore();

  const ref = useRef(null);

  const { isVisible } = useIsVisible(ref);
  isVisible && setVisibleSection(SECTIONS.SEND_ME_A_MESSAGE);

  return (
    <section
      ref={ref}
      id={SECTIONS.SEND_ME_A_MESSAGE}
      className="px-default md:h-screen max-w-screen w-full flex flex-col justify-center py-20 relative overflow-x-clip"
    >
      <Image
        className="absolute hidden 2xl:block top-40 left-20"
        src="/images/assets/x.svg"
        width={200}
        height={232}
        alt="X svg"
      />
      <Image
        className="absolute hidden 2xl:block top-28 right-[5%]"
        src="/images/assets/half-circle.svg"
        width={200}
        height={210}
        alt="Half-circle svg"
      />
      <Image
        className="absolute hidden lg:block top-2/3 right-6"
        src="/images/assets/triangle.svg"
        width={200}
        height={210}
        alt="Triangle svg"
      />
      <Image
        className="absolute hidden lg:block bottom-0 -left-20"
        src="/images/assets/divider.svg"
        width={250}
        height={210}
        alt="Divider svg"
      />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 items-center">
          <Typography.H2 className="text-5xl leading-[1.2] text-center">
            {t.rich("TITLE", {
              span: (chunks) => <span className="text-primary">{chunks}</span>
            })}
          </Typography.H2>
          <Typography.H3 className="text-center max-w-[438px]">
            {t("DESCRIPTION")}
          </Typography.H3>
          <MessageForm />
        </div>
      </div>
    </section>
  );
}
