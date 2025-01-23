import { NextRequest } from "next/server";

import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales } from "./i18n/routing";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix
});

export default async function middleware(
  req: NextRequest
): Promise<ReturnType<typeof intlMiddleware>> {
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!_next|images|icons|favicon|manifest|robots|sitemap|logo192|logo216|logo512).*)"
  ]
};
