import { Typography } from "@/components/ui/Typography";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/Button";

export function SeeMyWork() {
  return (
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
  );
}
