import { getRequestConfig } from "next-intl/server";

export const locales = ["en-us", "pt-br"];
export const defaultLocale = "pt-br";
export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`../internationalization/${locale}.json`)).default
  };
});
