import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware (req) {
    // console.log('token: ', req.nextauth.token.role)
    console.log('url: ', req.url)
    if (req.nextUrl.pathname.startsWith('/dashboard') && req.nextauth.token?.role !== 'admin') {
      return NextResponse.rewrite(
        new URL('/login', req.url)
      )
    }

    // if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.role !== 'admin') {
    //   return NextResponse.rewrite(
    //     new URL('/auth/login?message=You Are Not Authorized!', req.url)
    //   )
    // }
    // if (req.nextUrl.pathname.startsWith('/user') && req.nextauth.token?.role !== 'user') {
    //   return NextResponse.rewrite(
    //     new URL('/auth/login?message=You Are Not Authorized!', req.url)
    //   )
    // }
  }
)

export const config = {
  matcher: ['/dashboard/:path*']
}
