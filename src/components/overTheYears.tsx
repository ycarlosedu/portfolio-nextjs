import { Typography } from "@/components/ui/Typography";
import Image from "next/image";

export function OverTheYears() {
  return (
    <section
      id="over-the-years"
      className="px-default w-full md:h-screen flex items-center justify-center py-20"
    >
      <div className="flex gap-4 max-w-default lg:gap-28 justify-between items-center">
        <div className="flex flex-col gap-4 md:w-1/2">
          <Typography.H2 className="text-5xl leading-[1.2] text-primary">
            Over the years,
          </Typography.H2>
          <Typography.P>
            I&apos;ve built products for companies and businesses ranging from
            marketing websites to complex solutions and enterprise apps with
            focus on fast, elegant and accessible user experiences.
          </Typography.P>
          <Typography.P>
            Currently, I work at Compass.UOL as a Frontend Developer crafting
            thoughtful and inclusive experiences for various client companies.
          </Typography.P>
          <Typography.P>
            During my working hours, I am also a front end instructor for
            interns joining the company.
          </Typography.P>
          <Typography.P>
            In my free time, besides studying development for hours, I also work
            on two startups that I co-founded, ONNE and SAVEBYS.
          </Typography.P>
          <Typography.P>
            In both startups, in addition to working in the administrative area,
            I play the role of UX/UI and develop the entire front-end of the
            applications myself.
          </Typography.P>
        </div>
        <Image
          src="/images/over-the-years.svg"
          alt="An illustration showing the companies that Carlos worked with over the years"
          className="hidden w-1/2 md:block"
          width={500}
          height={700}
        />
      </div>
    </section>
  );
}
