import { NextResponse } from "next/server";
import { decode, getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;
const PUBLIC_FILE = /\.(.*)$/;
export default async function middleware(req) {
  const token = await getToken({
    req,
    secret,
    raw: true,
  });
  const decoded = await decode({
    token,
    secret,
  });
  const url = req.url;
  if (token) {
    if (url.includes("/signIn")) {
      return NextResponse.redirect("http://localhost:3000/");
    }
  }

  /*if (url.includes("/signIn")) {
    if (token !== null || token !== undefined) {
      return NextResponse.redirect("http://localhost:3000/");
    }
    return NextResponse.next();
  }*/
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === "en") {
    const locale = req.cookies.get("NEXT_LOCALE")?.value;
    if (locale && locale !== "en") {
      return NextResponse.redirect(
        new URL(
          `/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`,
          req.url
        )
      );
    } else {
      return NextResponse.next();
    }
  }

  /*if (url.includes("/signIn")) {
    if (jwt) {
      try {
        const response = await jwtVerify(jwt, new TextEncoder().encode(secret));
        if (response?.payload) {
          const { exp } = response.payload;
          const now = Math.floor(Date.now() / 1000);
          if (exp && now >= exp) {
            const expiredResponse = NextResponse.next();
            expiredResponse.cookies.delete("TOKEN");
            return expiredResponse;
          }
          return NextResponse.redirect("http://localhost:3000/");
        }
      } catch (error) {
        const errorResponse = NextResponse.next();
        errorResponse.cookies.delete("TOKEN");
        return errorResponse;
      }
    }
  }*/

  return NextResponse.next();
}
