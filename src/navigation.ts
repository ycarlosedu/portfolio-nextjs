"use client";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { Pathnames } from "next-intl/routing";
import { locales } from "./i18n";

export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/contact": "/contact"
} satisfies Pathnames<typeof locales>;

export type Pages = keyof typeof pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
