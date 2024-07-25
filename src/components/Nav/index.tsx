import { PAGE } from "@/constants";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ComponentProps } from "react";

type Props = ComponentProps<"nav"> & {
  locale: string;
};
export default function Nav({ className, locale, ...props }: Props) {
  const t = useTranslations("HEADER");

  return (
    <nav
      className={cn([
        "flex gap-6 items-center flex-wrap justify-center [&>.link:hover]:border-b-slate-600",
        className
      ])}
      {...props}
    >
      <Link lang={locale} href={`/${locale}${PAGE.HOME}`}>
        {t("HOME")}
      </Link>
      <Link lang={locale} href={`/${locale}${PAGE.CONTACT}`}>
        {t("CONTACT")}
      </Link>
    </nav>
  );
}
