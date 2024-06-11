import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['pl', 'en'],
  defaultLocale: 'pl'
});

export default withAuth(
  async function middleware(req) {
    // Internacjonalizacja
    const intlResponse = intlMiddleware(req);
    if (intlResponse) return intlResponse;

  //   // Autoryzacja
  //   const url = req.nextUrl.pathname;
  //   const userRole = req?.nextauth?.token?.user?.role;

  //   if (url.startsWith("/admin") && userRole !== "admin") {
  //     return NextResponse.redirect(new URL("/", req.url));
  //   }

  //   return NextResponse.next();
  // },
  // {
  //   callbacks: {
  //     authorized: ({ token }) => !!token,
  //   },
  }
);

// export const config = {
//   matcher: ['/', '/(pl|en)/:path*', '/admin/:path*', ],
// };
export const config = {
  matcher: ['/', '/(pl|en)/:path*',  ],
};
