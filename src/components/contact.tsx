import { Typography } from "@/components/ui/Typography";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo
} from "@phosphor-icons/react/dist/ssr";
import Logo from "images/logo/full.svg";
import Image from "next/image";
import { TransitionLink } from "./ui/TransitionLink";

export function Contact() {
  return (
    <section className="px-default w-full bg-gray-light flex flex-col items-center justify-center py-4 gap-12">
      <div className="flex flex-col gap-12 flex-1 pt-[300px]">
        <div className="flex flex-col gap-6 p-8 rounded-4xl flex-1 bg-white dark:bg-gray-dark">
          <Typography.H2 className="text-primary text-xl font-semibold">
            SAY HELLO
          </Typography.H2>
          <ul className="flex flex-col gap-6">
            <li>
              <a
                className="break-all flex gap-3 items-center"
                href="mailto:silvacarlosoliveira@outlook.com"
              >
                <EnvelopeSimple
                  size={24}
                  className="min-w-6 min-h-6"
                  weight="bold"
                />
                silvacarlosoliveira@outlook.com
              </a>
            </li>
            <li>
              <a
                className="break-all flex gap-3 items-center"
                href="https://github.com/ycarlosedu"
              >
                <GithubLogo
                  size={24}
                  className="min-w-6 min-h-6"
                  weight="bold"
                />
                https://github.com/ycarlosedu
              </a>
            </li>
            <li>
              <a
                className="break-all flex gap-3 items-center"
                href="https://www.linkedin.com/in/silvacarlosoliveira/"
              >
                <LinkedinLogo
                  size={24}
                  className="min-w-6 min-h-6"
                  weight="bold"
                />
                https://www.linkedin.com/in/silvacarlosoliveira/
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 p-8 rounded-4xl flex-1 bg-white dark:bg-gray-dark">
          <Typography.H2 className="text-primary text-xl font-semibold">
            PAGES
          </Typography.H2>
          <ul className="flex flex-col gap-6">
            <li>
              <TransitionLink href="/">Home</TransitionLink>
            </li>
            <li>
              <TransitionLink href="/contact">My Projects</TransitionLink>
            </li>
            <li>
              <TransitionLink href="/contact">My Designs</TransitionLink>
            </li>
          </ul>
        </div>
      </div>

      <footer className="flex flex-col gap-12">
        <hr className="h-[2px] w-full bg-black" />
        <div className="flex flex-col items-center justify-center gap-12">
          <Image src={Logo} alt="Carlos Silva Logo" width={200} height={56} />
          <Typography.P className="text-center">
            Copyright ©2024 Carlos Eduardo Oliveira da Silva
          </Typography.P>
        </div>
      </footer>
    </section>
  );
}
