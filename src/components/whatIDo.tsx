import { Typography } from "@/components/ui/Typography";

export function WhatIDo() {
  return (
    <section className="px-default w-full bg-gray-light dark:bg-black flex items-center justify-center">
      <div className="max-w-default flex flex-col md:flex-row md:justify-between gap-20 py-32">
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="flex flex-col gap-3">
            <Typography.H2>Development</Typography.H2>
            <Typography.P className="h-40 lg:text-xl">
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

        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="flex flex-col gap-3">
            <Typography.H2>Design</Typography.H2>
            <Typography.P className="h-40 lg:text-xl leading-6">
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
      </div>
    </section>
  );
}
