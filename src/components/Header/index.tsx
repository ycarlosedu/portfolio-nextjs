"use client";
import Nav from "@/components/Nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Sheet";
import ToggleLanguage from "@/components/ToggleLanguage";
import ToggleTheme from "@/components/ToggleTheme";
import { PAGE } from "@/constants";
import { cn } from "@/lib/utils";
import { List } from "@phosphor-icons/react/dist/ssr";
import LogoBlack from "images/logo/black.svg";
import LogoWhite from "images/logo/white.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

let lastScrollPosition = 0;

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition) {
        showHeader && setShowHeader(false);
      } else {
        !showHeader && setShowHeader(true);
      }
      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={cn(
        "flex items-center justify-between w-full px-default py-2 fixed top-0 left-0 right-0 container transition-transform duration-300 bg-light dark:bg-dark",
        showHeader ? "" : "-translate-y-40"
      )}
    >
      <Link href={PAGE.HOME} aria-label="Voltar para página Inicial">
        <Image
          src={isDarkMode ? LogoWhite : LogoBlack}
          alt="Logo Carlos Silva"
          width={80}
          height={50}
        />
      </Link>
      <Nav className="hidden md:flex" />
      <ToggleTheme />
      <ToggleLanguage />

      <Sheet>
        <SheetTrigger className="md:hidden">
          <List size={32} />
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between">
          <Nav className="flex-col items-start" />
          <Image
            src={isDarkMode ? LogoWhite : LogoBlack}
            alt="Logo Carlos Silva"
            className="h-auto w-200 self-center"
            width={200}
            height={200}
          />
        </SheetContent>
      </Sheet>
    </header>
  );
}
