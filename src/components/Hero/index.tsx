"use client";
import { Button } from "@/components/Button";
import { PAGE } from "@/constants";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import HeroBlack from "images/hero-black.svg";
import HeroWhite from "images/hero-white.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <section className="mx-auto px-default py-28 gap-12 overflow-hidden md:flex">
      <div className="flex-none space-y-5 max-w-xl">
        <h1 className="text-4xl  font-extrabold sm:text-5xl">
          Quer construir um site do jeito que você sempre sonhou?
        </h1>
        <p>
          Eu posso te ajudar a construir um site incrível, com um design moderno
          e responsivo, que vai te ajudar a{" "}
          <strong>alavancar o seu negócio</strong> e{" "}
          <strong>conquistar mais clientes</strong>.
        </p>
        <div className="flex items-center gap-x-3 sm:text-sm">
          <Button asChild>
            <Link href={PAGE.CONTACT} className="font-medium">
              Entrar em contato
              <CaretRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={PAGE.CONTACT} className="font-medium">
              Ver projetos
              <CaretRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 hidden md:block">
        <Image
          src={isDarkMode ? HeroWhite : HeroBlack}
          alt="Imagem de um notebook e um celular com códigos na tela"
          width={576}
          height={331}
          className="max-w-xl"
        />
      </div>
    </section>
  );
}
