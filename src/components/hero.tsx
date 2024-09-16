import { Typography } from "@/components/ui/Typography";
import Image from "next/image";

export function Hero() {
  return (
    <section className="px-default flex flex-col gap-8 pb-8">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-3">
          <Typography.H1 className="text-primary">
            Frontend Developer.
          </Typography.H1>
          <Typography.P className="text-xl">
            I like to build solid and scalable frontend projects with great user
            experiences.
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
          Want to build a website the way you always dreamed of? I can help you
          make that happen.
        </Typography.P>
        <Typography.P className="text-sm max-w-[240px]">
          Together we can build an amazing website, with a modern and responsive
          design, that will help you boost your business and attract more
          customers.
        </Typography.P>
      </div>
    </section>
  );
}
