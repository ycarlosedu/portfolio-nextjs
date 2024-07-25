import { Button } from "@/components/Button";
import Typography from "@/components/Typography";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function About() {
  const t = await getTranslations("HOME.ABOUT");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <Image
          src="https://github.com/ycarlosedu.png"
          width="550"
          height="550"
          alt="Carlos Silva Profile Image"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full grayscale"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <Typography.H2>{t("TITLE")}</Typography.H2>
            <Typography.H3 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Carlos Silva
            </Typography.H3>
            <Typography.P className="text-2xl font-semibold text-muted-foreground sm:text-3xl">
              Front-End Developer
            </Typography.P>
            <Typography.P className="max-w-[600px] text-muted-foreground md:text-xl">
              {t("DESCRIPTION")}
            </Typography.P>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {t("BUTTON")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
