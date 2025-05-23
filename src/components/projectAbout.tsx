import { MessageForm } from "@/components/messageForm";
import { Typography } from "@/components/ui/Typography";
import { PROJECT_TYPE } from "@/constants";
import { getTranslations } from "next-intl/server";

type ProjectAboutProps = {
  projectName: string;
  projectType: PROJECT_TYPE;
};

export async function ProjectAbout({
  projectName,
  projectType
}: ProjectAboutProps) {
  const t = await getTranslations(`PROJECT_ABOUT`);
  const translateProject = await getTranslations(
    `${projectType}.PROJECTS.${projectName}`
  );

  return (
    <section className="px-default md:min-h-screen w-full flex flex-col items-center py-10">
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
