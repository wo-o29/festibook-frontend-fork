import { NextResponse, type NextRequest } from "next/server";

const userOnlyUrlRegex = /^(\/mypage|\/trip-planner)/;

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");
  const pathName = request.nextUrl.pathname;

  if (!accessToken && userOnlyUrlRegex.test(pathName)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|images|icons|_next/static|_next/image|favicon.ico).*)"],
};
