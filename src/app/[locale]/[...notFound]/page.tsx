import { Metadata } from "next";

import { Button } from "@/components/Button";
import Header from "@/components/Header";
import Typography from "@/components/Typography";
import { locales } from "@/i18n";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";

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

export default async function NotFound({ params: { locale } }: Props) {
  const t = await getTranslations("NOT_FOUND");

  return (
    <>
      <Header locale={locale} />
      <main className="flex min-h-screen flex-col items-center justify-center container space-y-3 text-center">
        <Typography.P className="font-bold text-lg">404</Typography.P>
        <Typography.H1 className="">{t("TITLE")}</Typography.H1>
        <Typography.Muted className="">{t("MESSAGE")}</Typography.Muted>
        <Button asChild>
          <a href={"/" + locale}>
            <CaretLeft size={16} />
            {t("BACK_HOME")}
          </a>
        </Button>
      </main>
    </>
  );
}
