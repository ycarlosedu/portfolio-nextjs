import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <Image
          src="https://github.com/ycarlosedu.png"
          width="550"
          height="550"
          alt="Hero"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full grayscale"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Carlos Silva
            </h1>
            <h2 className="text-2xl font-semibold text-muted-foreground sm:text-3xl">
              Front-End Developer
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I&apos;m a passionate front-end developer with a focus on building
              beautiful and performant web applications. I specialize in React,
              TypeScript, and modern web technologies.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
