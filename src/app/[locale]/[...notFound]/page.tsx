import { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { TransitionContainer } from "@/components/ui/TransitionContainer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Typography } from "@/components/ui/Typography";
import { locales } from "@/i18n";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "METADATA.NOT_FOUND" });

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false
      }
    }
  };
}

export default async function Contact({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("NOT_FOUND");

  return (
    <TransitionContainer className="flex flex-col gap-3 items-center justify-center text-center px-default h-screen mt-0 pt-0">
      <Typography.P className="font-bold text-lg">404</Typography.P>
      <Typography.H1 className="">{t("TITLE")}</Typography.H1>
      <Typography.Muted className="">{t("MESSAGE")}</Typography.Muted>
      <Button asChild>
        <TransitionLink className="mt-4" locale={locale} href={"/"}>
          <CaretLeft size={16} />
          {t("BACK_HOME")}
        </TransitionLink>
      </Button>
    </TransitionContainer>
  );
}
