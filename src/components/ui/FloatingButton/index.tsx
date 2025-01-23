"use client";

import { Button } from "@/components/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/Tooltip";
import { Pages } from "@/i18n/routing";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { TransitionLink } from "../TransitionLink";

type Props = {
  name: string;
  href: Pages;
};

export function FloatingButton({ name, href }: Props) {
  return (
    <Tooltip>
      <TooltipContent side="right">{name}</TooltipContent>
      <TooltipTrigger asChild>
        <Button size="icon" className="fixed z-20 bottom-4 left-4">
          <TransitionLink
            className="w-full h-full flex items-center justify-center"
            href={href}
          >
            <CaretLeft className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">{name}</span>
          </TransitionLink>
        </Button>
      </TooltipTrigger>
    </Tooltip>
  );
}
