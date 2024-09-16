"use client";
import Nav from "@/components/ui/Nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { ToggleLanguage } from "@/components/ui/ToggleLanguage";
import { ToggleTheme } from "@/components/ui/ToggleTheme";
import { TransitionLink } from "@/components/ui/TransitionLink";
import useScrollUp from "@/hooks/useScrollUp";
import { cn } from "@/lib/utils";
import { List } from "@phosphor-icons/react/dist/ssr";
import Logo from "images/logo/full.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../Button";

type Props = {
  locale: string;
};
export default function Header({ locale }: Props) {
  const t = useTranslations("HEADER");

  const [isFocused, setIsFocused] = useState(false);

  const { isScrollingUp, isAtTheTop } = useScrollUp({ initialState: true });

  return (
    <header
      onFocus={() => {
        !isFocused && setIsFocused(true);
      }}
      onBlur={(event) => {
        console.log("🚀 ~ Header ~ event:", event.target);
        isFocused && setIsFocused(false);
      }}
      className={cn(
        "z-30 flex items-center h-[120px] max-h-[120px] justify-between px-default py-6 xs:py-2 fixed top-0 left-0 right-0 w-screen transition-[transform,background-color] duration-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30",
        isScrollingUp || isFocused ? "" : "-translate-y-40"
      )}
    >
      <div className="container flex items-start xs:items-center justify-between h-full">
        <TransitionLink
          locale={locale}
          href={"/"}
          aria-label={t("HOME_ARIA_LABEL")}
        >
          <Image src={Logo} alt="Carlos Silva Logo" width={200} height={56} />
        </TransitionLink>
        <div className="flex items-center gap-4 flex-col-reverse xs:flex-row h-fit">
          <ToggleTheme />
          <ToggleLanguage locale={locale} />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <List className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between items-center">
              <Nav className="flex-col items-start w-full" locale={locale} />
              <Image
                src={Logo}
                alt="Carlos Silva Logo"
                width={200}
                height={56}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
