import { MessageForm } from "@/components/messageForm";
import { Typography } from "@/components/ui/Typography";
import { useTranslations } from "next-intl";

type ProjectAboutProps = {
  projectName: string;
  translations: "CODES" | "DESIGNS";
};

export function ProjectAbout({ projectName, translations }: ProjectAboutProps) {
  const t = useTranslations(`PROJECT_ABOUT`);
  const translateProject = useTranslations(
    `${translations}.PROJECTS.${projectName}`
  );

  return (
    <section className="px-default md:min-h-screen w-full flex flex-col items-center py-16">
      <div className="flex flex-col gap-16 w-full max-w-default">
        <div className="flex flex-col gap-4">
          <Typography.H2 className="text-7xl text-primary">
            {t("TITLE")}
          </Typography.H2>
          <Typography.P>
            {translateProject.rich("ABOUT", {
              br: () => (
                <>
                  <br />
                  <br />
                </>
              )
            })}
          </Typography.P>
        </div>
        <hr className="w-full h-[2px] bg-black" />
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="flex flex-col gap-8 max-w-[500px]">
            <Typography.H2 className="text-5xl md:text-7xl">
              {t.rich("FORM.TITLE", {
                span: (chunks) => <span className="text-primary">{chunks}</span>
              })}
            </Typography.H2>
            <Typography.P className="text-xl">
              {t("FORM.DESCRIPTION")}
            </Typography.P>
          </div>
          <MessageForm />
        </div>
      </div>
    </section>
  );
}
