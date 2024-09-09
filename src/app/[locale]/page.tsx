import TransitionContainer from "@/components/TransitionContainer";
import Typography from "@/components/Typography";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

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

  return (
    <TransitionContainer>
      <section className="px-default">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-3">
            <Typography.H1 className="text-primary text-5xl">
              Frontend Developer.
            </Typography.H1>
            <Typography.P className="text-xl">
              I like to build solid and scalable frontend projects with great
              user experiences.
            </Typography.P>
          </div>
          <Image
            src="/images/profile.png"
            width={288}
            height={460}
            alt="Carlos Silva Profile Image"
          />
        </div>
      </section>
    </TransitionContainer>
  );
}
