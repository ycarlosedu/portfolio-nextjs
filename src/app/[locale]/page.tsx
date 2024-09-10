import { Button } from "@/components/Button";
import TransitionContainer from "@/components/TransitionContainer";
import Typography from "@/components/Typography";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
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
      <section className="px-default flex flex-col gap-8 pb-8">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-3">
            <Typography.H1 className="text-primary">
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

        <div className="flex flex-col gap-3">
          <Typography.P className="text-sm max-w-[240px]">
            Want to build a website the way you always dreamed of? I can help
            you make that happen.
          </Typography.P>
          <Typography.P className="text-sm max-w-[240px]">
            Together we can build an amazing website, with a modern and
            responsive design, that will help you boost your business and
            attract more customers.
          </Typography.P>
        </div>
      </section>

      <section className="px-default bg-gray-light flex flex-col gap-20 py-32">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Typography.H2>Development</Typography.H2>
            <Typography.P>
              I&apos;m a passionate Front-end Developer with a focus on building
              beautiful and performant web applications. I specialize in React,
              TypeScript, and modern web technologies.
            </Typography.P>
          </div>
          <div className="flex flex-col gap-3">
            <Typography.H2>Technologies</Typography.H2>
            <Typography.P>Carousel</Typography.P>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Typography.H2>Design</Typography.H2>
            <Typography.P>
              I love looking at modern layouts that deliver a great User
              Experience and still look amazing. And my goal is to create more
              of them.
            </Typography.P>
          </div>
          <div className="flex flex-col gap-3">
            <Typography.H2>Tools</Typography.H2>
            <Typography.P>Carousel</Typography.P>
          </div>
        </div>
      </section>

      <section className="px-default flex flex-col gap-4 py-20">
        <Typography.H2 className="text-5xl leading-[1.2] text-primary">
          Over the years,
        </Typography.H2>
        <Typography.P>
          I&apos;ve built products for companies and businesses ranging from
          marketing websites to complex solutions and enterprise apps with focus
          on fast, elegant and accessible user experiences.
        </Typography.P>
        <Typography.P>
          Currently, I work at Compass.UOL as a Frontend Developer crafting
          thoughtful and inclusive experiences for various client companies.
        </Typography.P>
        <Typography.P>
          During my working hours, I am also a front end instructor for interns
          joining the company.
        </Typography.P>
        <Typography.P>
          In my free time, besides studying development for hours, I also work
          on two startups that I co-founded, ONNE and SAVEBYS.
        </Typography.P>
        <Typography.P>
          In both startups, in addition to working in the administrative area, I
          play the role of UX/UI and develop the entire front-end of the
          applications myself.
        </Typography.P>
      </section>

      <section className="px-default bg-gray-light flex flex-col items-center justify-center py-20">
        <div className="bg-white flex flex-col gap-8">
          <div className="flex flex-col p-4 gap-16">
            <div className="flex flex-col gap-3">
              <Typography.H2 className="text-5xl leading-[1.2]">
                I build & <span className="text-primary">code</span> stuff
              </Typography.H2>
              <Typography.P>
                Open sourceprojects, web appsand experimentals.
              </Typography.P>
            </div>
            <Button>
              SEE MY CODES
              <ArrowRight size={16} weight="bold" />
            </Button>
          </div>

          <hr className="h-[1px] w-full bg-black" />

          <div className="flex flex-col p-4 gap-16">
            <div className="flex flex-col gap-3">
              <Typography.H2 className="text-5xl leading-[1.2]">
                I <span className="text-primary">design</span>, sometimes
              </Typography.H2>
              <Typography.P>
                Personal projects, my college works and more.
              </Typography.P>
            </div>
            <Button>
              SEE MY DESIGNS
              <ArrowRight size={16} weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </TransitionContainer>
  );
}
