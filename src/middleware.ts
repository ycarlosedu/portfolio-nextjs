import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { locales } from "./i18n";
import { localePrefix } from "./navigation";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "pt-br",
  localePrefix
});

export default async function middleware(
  req: NextRequest
): Promise<ReturnType<typeof intlMiddleware>> {
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(pt-br|en-us)/:path*"]
};
