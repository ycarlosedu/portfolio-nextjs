import { TransitionLink } from "@/components/ui/TransitionLink";
import { Typography } from "@/components/ui/Typography";
import Logo from "images/logo/full.svg";
import Image from "next/image";

type ProjectCardProps = {
  project: {
    title: string;
    href: string;
    image: string;
    alt: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TransitionLink
      href={"/project/"}
      className="w-full max-w-[368px] flex flex-col gap-4 p-4 border border-gray-light dark:border-black rounded-lg hover:scale-[1.05] transition-all hover:bg-gray-light/20 dark:hover:bg-black/20"
    >
      <div className="flex items-center min-h-[247px] p-8 justify-center bg-gray-light dark:bg-black">
        <Image
          src={Logo}
          alt="Carlos Silva Logo"
          width={192}
          height={183}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Typography.H3 className="text-primary text-base font-normal">
          Personal Website
        </Typography.H3>
        <span className="font-semibold">carlossilva.vercel.app</span>
      </div>
    </TransitionLink>
  );
}
