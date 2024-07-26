"use client";
import Nav from "@/components/Nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Sheet";
import ToggleLanguage from "@/components/ToggleLanguage";
import ToggleTheme from "@/components/ToggleTheme";
import { PAGE } from "@/constants";
import useScrollUp from "@/hooks/useScrollUp";
import { cn } from "@/lib/utils";
import { List } from "@phosphor-icons/react/dist/ssr";
import LogoBlack from "images/logo/black.svg";
import LogoWhite from "images/logo/white.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type Props = {
  locale: string;
};
export default function Header({ locale }: Props) {
  const t = useTranslations("HEADER");

  const { isScrollingUp } = useScrollUp({ initialState: true });

  return (
    <header
      className={cn(
        "flex items-center justify-between w-full px-default py-2 fixed top-0 left-0 right-0 container transition-transform duration-300 bg-light dark:bg-dark",
        isScrollingUp ? "" : "-translate-y-40"
      )}
    >
      <Link href={PAGE.HOME} aria-label={t("HOME_ARIA_LABEL")}>
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
      </Link>
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
    </header>
  );
}
