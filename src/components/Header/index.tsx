"use client";
import ToggleTheme from "@/components/ToggleTheme";
import { PAGE } from "@/constants";
import LogoBlack from "images/logo/black.svg";
import LogoWhite from "images/logo/white.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <header className="flex items-center justify-between w-full px-default py-2 absolute top-0 left-0 right-0">
      <Link href={PAGE.HOME} aria-label="Voltar para página Inicial">
        <Image
          src={isDarkMode ? LogoWhite : LogoBlack}
          alt="Logo Carlos Silva"
          width={80}
          height={50}
        />
      </Link>
      <nav className="flex items-center gap-8">
        <Link href={PAGE.HOME}>Início</Link>
        <Link href={PAGE.CONTACT}>Contato</Link>
      </nav>
      <ToggleTheme />
    </header>
  );
}
