import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "./i18n/config";

// Domains that default to a non-German locale
const domainLocales: Record<string, Locale> = {
  "modulparking.cz": "cs",
  "www.modulparking.cz": "cs",
};

function getLocaleForHost(host: string): Locale {
  return domainLocales[host.toLowerCase().split(":")[0]] ?? defaultLocale;
}

function getLocaleFromPath(pathname: string): Locale | undefined {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];
  if (locales.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }
  return undefined;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files, API routes, and Next.js internals
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/docs") ||
    pathname === "/favicon.ico" ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt"
  ) {
    return;
  }

  const pathnameLocale = getLocaleFromPath(pathname);

  // Already has a locale prefix → continue
  if (pathnameLocale) {
    return;
  }

  // No locale prefix → internally rewrite to the host's default locale.
  // moduloparking.at → /de/... (clean URLs for German users),
  // modulparking.cz → /cs/... (clean URLs for Czech users)
  const host = request.headers.get("host") ?? "";
  const hostLocale = getLocaleForHost(host);
  const url = request.nextUrl.clone();
  url.pathname = `/${hostLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|docs|favicon.ico|sitemap.xml|robots.txt).*)"],
};
