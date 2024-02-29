import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware({ nextUrl, cookies }: NextRequest) {
  const isLoggedIn = cookies.get('authjs.session-token') ?? cookies.get('__Secure-authjs.session-token');

  const isOnPublicPages = nextUrl.pathname.startsWith('/auth')
  const isOnWebhooks = nextUrl.pathname.startsWith('/api/webhooks')
  const isOnPublicAPIRoutes = nextUrl.pathname.startsWith('/api/auth')
  const isOnPrivatePages = !isOnPublicPages

  if (isOnWebhooks || isOnPublicAPIRoutes) {
    return NextResponse.next()
  }

  if (isOnPublicPages && isLoggedIn) {
    return NextResponse.redirect(new URL('/', nextUrl))
  }

  if (isOnPrivatePages && !isLoggedIn) {
    // Redirect user back to sign in
    return NextResponse.redirect(new URL('/auth/sign-in', nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api/webhooks|_next/static|_next/image|favicon.ico).*)'],
}