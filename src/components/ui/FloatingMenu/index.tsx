"use client";
import { SECTIONS } from "@/constants";
import useHash from "@/hooks/useHash";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type LinkMenu = {
  icon: JSX.Element;
  href: string;
  title: string;
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
  const hash = useHash();

  return (
    <div
      className={cn(
        `p-1.5 fixed z-20 bottom-4 border-2 border-black dark:border-white rounded-full bg-white dark:bg-black flex flex-col gap-3 items-center justify-center`,
        side === "left" ? "left-4" : "right-4",
        className
      )}
      id="floating-menu"
      {...rest}
    >
      {links.map(({ icon, href, title }) => (
        <Link
          key={href}
          href={href}
          data-active={hash === href || (href.includes(SECTIONS.HERO) && !hash)}
          className={cn(
            "flex items-center justify-center p-1.5 rounded-full data-active:bg-primary text-black dark:text-white hover:bg-gray-accent transition-all duration-300"
          )}
        >
          {icon}
          <span className="sr-only">{title}</span>
        </Link>
      ))}
    </div>
  );
}
