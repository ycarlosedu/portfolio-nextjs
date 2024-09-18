import { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { TransitionContainer } from "@/components/ui/TransitionContainer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Typography } from "@/components/ui/Typography";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};
export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "METADATA.CODES" });

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
    alternates: {
      canonical: "https://carlossilva.vercel.app/pt-br/projects/codes/",
      languages: {
        "en-US": "https://carlossilva.vercel.app/en-us/projects/codes/",
        "pt-BR": "https://carlossilva.vercel.app/pt-br/projects/codes/"
      }
    }
  };
}

export default async function Codes({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("NOT_FOUND");

  return (
    <TransitionContainer className="flex flex-col gap-3 items-center justify-center text-center">
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
