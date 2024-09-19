"use client";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { Pathnames } from "next-intl/routing";
import { locales } from "./i18n";

export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/codes": "/codes",
  "/codes/personal-website": "/codes/personal-website",
  "/designs": "/designs",
  "/designs/personal-website": "/designs/personal-website"
} satisfies Pathnames<typeof locales>;

export type Pages = keyof typeof pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
