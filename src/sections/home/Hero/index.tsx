"use client";
import { Button } from "@/components/Button";
import Typography from "@/components/Typography";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import HeroBlack from "images/hero-black.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("HOME.HERO");

  return (
    <section className="mx-auto px-default py-28 gap-12 overflow-hidden md:flex">
      <div className="flex-none space-y-5 max-w-xl">
        <Typography.H2 className="text-4xl font-extrabold sm:text-5xl">
          {t("TITLE")}
        </Typography.H2>
        <Typography.P>{t("SUBTITLE")}</Typography.P>
        <Typography.P>{t("SUBTITLE2")}</Typography.P>
        <div className="flex items-center gap-x-3 sm:text-sm">
          <Button asChild>
            <Link href={"/contact"} className="font-medium">
              {t("BUTTON_CONTACT")}
              <CaretRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={"/contact"} className="font-medium">
              {t("BUTTON_PROJECTS")}
              <CaretRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 hidden md:block">
        <Image
          src={HeroBlack}
          alt="Imagem de um notebook e um celular com códigos na tela"
          width={576}
          height={331}
          className="max-w-xl"
        />
      </div>
    </section>
  );
}
