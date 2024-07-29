"use client";
import Nav from "@/components/Nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Sheet";
import ToggleLanguage from "@/components/ToggleLanguage";
import ToggleTheme from "@/components/ToggleTheme";
import TransitionLink from "@/components/TransitionLink";
import useScrollUp from "@/hooks/useScrollUp";
import { cn } from "@/lib/utils";
import { List } from "@phosphor-icons/react/dist/ssr";
import LogoBlack from "images/logo/black.svg";
import LogoWhite from "images/logo/white.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
  locale: string;
};
export default function Header({ locale }: Props) {
  const t = useTranslations("HEADER");

  const { isScrollingUp, isAtTheTop } = useScrollUp({ initialState: true });

  return (
    <header
      className={cn(
        "z-30 flex items-center justify-between px-default py-2 fixed top-0 left-0 right-0 w-screen transition-[transform,background-color] duration-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30",
        isScrollingUp ? "" : "-translate-y-40",
        // isAtTheTop ? "bg-transparent" : "bg-light/40 dark:bg-dark/40"
        "bg-light/30 dark:bg-dark/30"
      )}
    >
      <div className="container flex items-center justify-between">
        <TransitionLink
          locale={locale}
          href={"/"}
          aria-label={t("HOME_ARIA_LABEL")}
        >
          <Image
            src={LogoBlack}
            alt="Black Carlos Silva Logo"
            className="block animate-scale-up-and-down dark:hidden dark:animate-none"
            width={80}
            height={50}
          />
          <Image
            src={LogoWhite}
            alt="White Carlos Silva Logo"
            className="hidden animate-none dark:block dark:animate-scale-up-and-down"
            width={80}
            height={50}
          />
        </TransitionLink>
        <Nav className="hidden md:flex" locale={locale} />
        <div className="flex items-center gap-4">
          <ToggleTheme />
          <ToggleLanguage locale={locale} />
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <List size={32} />
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between">
            <Nav className="flex-col items-start" locale={locale} />
            <Image
              src={LogoBlack}
              alt="Black Carlos Silva Logo"
              className="block dark:hidden"
              width={80}
              height={50}
            />
            <Image
              src={LogoWhite}
              alt="White Carlos Silva Logo"
              className="hidden dark:block"
              width={80}
              height={50}
            />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
