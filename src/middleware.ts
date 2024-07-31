import { NextRequest } from "next/server";

import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n";
import { localePrefix } from "./navigation";

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
