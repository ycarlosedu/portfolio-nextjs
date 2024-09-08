import TransitionContainer from "@/components/TransitionContainer";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "METADATA" });

  return {
    title: "Carlos Silva | Front-End Developer",
    description: "",
    alternates: {
      canonical: "https://carlossilva.vercel.app/pt-br/"
    }
  };
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return <TransitionContainer>Home</TransitionContainer>;
}
