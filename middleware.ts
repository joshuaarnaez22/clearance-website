import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const role = req.nextauth.token?.role;
    const pathName = req.nextUrl.pathname;

    if (pathName.startsWith("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL(`/${role}/dashboard`, req.url));
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
  }
);

export const config = { matcher: ["/admin/:path*"] };
// , "/user/:path*"
// "/admin/:path*"
