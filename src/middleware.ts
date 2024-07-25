import { NextRequest } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n";
import { localePrefix } from "./navigation";

function getLocale(request: NextRequest) {
  const headers = {
    "accept-language":
      request.headers.get("accept-language") || "pt-BR,pt;q=0.5"
  };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

export async function localeMiddleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.toLowerCase().startsWith(`/${locale}/`) ||
      pathname.toLowerCase() === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-us/products
  return Response.redirect(request.nextUrl);
}

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix
});

export default async function middleware(
  req: NextRequest
): Promise<ReturnType<typeof intlMiddleware>> {
  await localeMiddleware(req);
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!_next|images|icons|favicon|manifest|robots|sitemap|logo192|logo216|logo512).*)"
  ]
};
