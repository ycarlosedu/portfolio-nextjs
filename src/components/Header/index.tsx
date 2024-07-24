"use client";
import Nav from "@/components/Nav";
import ToggleTheme from "@/components/ToggleTheme";
import { PAGE } from "@/constants";
import { List } from "@phosphor-icons/react/dist/ssr";
import LogoBlack from "images/logo/black.svg";
import LogoWhite from "images/logo/white.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../Sheet";

export default function Header() {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <header className="flex items-center justify-between w-full px-default py-2 absolute top-0 left-0 right-0 container">
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
