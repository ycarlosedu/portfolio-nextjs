import { Typography } from "@/components/ui/Typography";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/Button";

export function SendMeAMessage() {
  return (
    <section className="px-default flex flex-col justify-center py-20">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2 className="text-5xl leading-[1.2] text-center">
            Send me a <span className="text-primary">message</span>!
          </Typography.H2>
          <Typography.H3 className="text-center">
            Got a question or proposal, or just want to say hello? Go ahead.
          </Typography.H3>
          <form className="flex flex-col gap-8 py-6">
            <Button>
              SEND IT
              <ArrowRight size={16} weight="bold" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
