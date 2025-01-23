export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const IS_DEV_MODE = process.env.NODE_ENV === "development";

export type PageParams = Promise<{
  locale: string;
}>;

export enum SECTIONS {
  HERO = "hero",
  WHAT_I_DO = "what-i-do",
  OVER_THE_YEARS = "over-the-years",
  SEE_MY_WORK = "see-my-work",
  SEND_ME_A_MESSAGE = "send-me-a-message",
  CONTACT = "contact"
}

export const URL_SOCIALS = {
  GITHUB: {
    FULL: "https://github.com/ycarlosedu",
    MINIFIED: "github.com/ycarlosedu"
  },
  LINKEDIN: {
    FULL: "https://www.linkedin.com/in/silvacarlosoliveira/",
    MINIFIED: "linkedin.com/in/silvacarlosoliveira"
  },
  OUTLOOK: {
    FULL: "mailto:silvacarlosoliveira@outlook.com",
    MINIFIED: "silvacarlosoliveira@outlook.com"
  }
};

export enum PROJECT_TYPE {
  CODES = "CODES",
  DESIGNS = "DESIGNS"
}

export enum CODE_PROJECTS {
  PERSONAL_WEBSITE = "personal-website",
  DEBUG_COFFEE = "debug-coffee",
  ONNE = "onne",
  SAVEBYS = "savebys",
  NEW_WAVE = "new-wave",
  SOON = "soon"
}

export enum DESIGN_PROJECTS {
  PERSONAL_WEBSITE = "personal-website",
  DEBUG_COFFEE = "debug-coffee",
  ONNE = "onne",
  SAVEBYS = "savebys",
  SOON = "soon"
}
