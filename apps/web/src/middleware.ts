import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get('authjs.session-token') ?? request.cookies.get('__Secure-authjs.session-token');
  if (!session && !request.nextUrl.pathname.startsWith('/auth/sign-in')) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  if (session && request.nextUrl.pathname.startsWith('/auth/sign-in')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$|.*\\.ico$).*)'],
}