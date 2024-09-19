"use client";
import { cn } from "@/lib/utils";
import useVisibleSectionStore from "@/store/visibleSectionStore";
import Link from "next/link";
import { ComponentProps, HTMLAttributeAnchorTarget } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";

type LinkMenu = {
  icon: JSX.Element;
  href: string;
  name: string;
  target?: HTMLAttributeAnchorTarget;
};

type Props = ComponentProps<"div"> & {
  links: LinkMenu[];
  side?: "left" | "right";
};

export function FloatingMenu({
  links,
  side = "right",
  className,
  ...rest
}: Props) {
  const { visibleSection } = useVisibleSectionStore();

  return (
    <div
      className={cn(
        `p-1 fixed z-20 bottom-4 border-2 border-black dark:border-white rounded-full bg-white dark:bg-black flex flex-col gap-2 items-center justify-center`,
        side === "left" ? "left-4" : "right-4",
        className
      )}
      id="floating-menu"
      {...rest}
    >
      {links.map(({ icon, href, name, target = "_self" }) => {
        return (
          <Tooltip key={href}>
            <TooltipTrigger asChild>
              <Link
                key={href}
                target={target}
                href={href}
                data-active={href.includes(visibleSection)}
                className={cn(
                  "flex items-center justify-center p-2 rounded-full data-active:bg-primary text-black dark:text-white hover:bg-gray-accent transition-all duration-300"
                )}
              >
                {icon}
                <span className="sr-only">{name}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side={side === "right" ? "left" : "right"}>
              {name}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
