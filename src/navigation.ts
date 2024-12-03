"use client";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { Pathnames } from "next-intl/routing";
import { locales } from "./i18n";

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

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
