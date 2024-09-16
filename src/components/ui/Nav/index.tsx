import { TransitionLink } from "@/components/ui/TransitionLink";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { ComponentProps } from "react";

type Props = ComponentProps<"nav"> & {
  locale: string;
};
export default function Nav({ className, locale, ...props }: Props) {
  const t = useTranslations("HEADER");

  return (
    <nav
      className={cn([
        "flex gap-6 items-center flex-wrap justify-center [&>.link:hover]:border-b-zinc-600",
        className
      ])}
      {...props}
    >
      <TransitionLink lang={locale} locale={locale} href={"/"}>
        {t("HOME")}
      </TransitionLink>
      <TransitionLink lang={locale} locale={locale} href={"/contact"}>
        {t("CONTACT")}
      </TransitionLink>
    </nav>
  );
}
