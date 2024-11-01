import { TransitionLink } from "@/components/ui/TransitionLink";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { ComponentProps } from "react";
import { SheetTrigger } from "../Sheet";

type Props = ComponentProps<"nav"> & {
  locale: string;
};
export default function Nav({ className, locale, ...props }: Props) {
  const t = useTranslations("HEADER");

  return (
    <nav
      className={cn([
        "flex gap-6 items-center flex-wrap justify-center",
        className
      ])}
      {...props}
    >
      <SheetTrigger asChild>
        <TransitionLink
          className="link"
          lang={locale}
          locale={locale}
          href={"/"}
        >
          {t("HOME")}
        </TransitionLink>
      </SheetTrigger>
      <SheetTrigger asChild>
        <TransitionLink
          className="link"
          lang={locale}
          locale={locale}
          href={`/codes`}
        >
          {t("CODES")}
        </TransitionLink>
      </SheetTrigger>
      <SheetTrigger asChild>
        <TransitionLink
          className="link"
          lang={locale}
          locale={locale}
          href={"/designs"}
        >
          {t("DESIGNS")}
        </TransitionLink>
      </SheetTrigger>
    </nav>
  );
}
