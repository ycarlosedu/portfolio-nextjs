"use client";

import { Typography } from "@/components/ui/Typography";

import { SECTIONS } from "@/constants";
import { useIsVisible } from "@/hooks/useIsVisible";
// import { useScrollDirection } from "@/hooks/useScrollDirection";
// import { useScrollToNextElement } from "@/hooks/useScrollNext";
// import { useScrollToPreviousElement } from "@/hooks/useScrollPrevious";

import { useTranslations } from "next-intl";
import { useRef } from "react";

import useVisibleSectionStore from "@/store/visibleSectionStore";
import { MessageForm } from "./messageForm";

export function SendMeAMessage() {
  const t = useTranslations("HOME.SEND_ME_A_MESSAGE");
  const { setVisibleSection } = useVisibleSectionStore();

  const ref = useRef(null);

  // const { isScrollingUp, isScrollingDown } = useScrollDirection();
  const { isVisible } = useIsVisible(ref);
  isVisible && setVisibleSection(SECTIONS.SEND_ME_A_MESSAGE);

  // useScrollToPreviousElement(SECTIONS.SEE_MY_WORK, isScrollingUp, isVisible);
  // useScrollToNextElement(SECTIONS.CONTACT, isScrollingDown, isVisible);

  return (
    <section
      ref={ref}
      id={SECTIONS.SEND_ME_A_MESSAGE}
      className="px-default md:h-screen max-w-default w-full flex flex-col justify-center py-20"
    >
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
