import { createNavigation } from "next-intl/navigation";
import { defineRouting, Pathnames } from "next-intl/routing";

export const locales = ["en-us", "pt-br"];
export const defaultLocale = "pt-br";
export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/codes": "/codes",
  "/codes/personal-website": "/codes/personal-website",
  "/codes/onne": "/codes/onne",
  "/codes/savebys": "/codes/savebys",
  "/codes/new-wave": "/codes/new-wave",
  "/codes/debug-coffee": "/codes/debug-coffee",
  "/designs": "/designs",
  "/designs/personal-website": "/designs/personal-website",
  "/designs/onne": "/designs/onne",
  "/designs/savebys": "/designs/savebys",
  "/designs/debug-coffee": "/designs/debug-coffee"
} satisfies Pathnames<typeof locales>;

export type Pages = keyof typeof pathnames;

export const routing = defineRouting({
  defaultLocale,
  locales,
  localePrefix,
  localeDetection: true
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
