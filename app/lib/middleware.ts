import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value;
  console.log('Current User:', currentUser); // Tambahkan ini untuk debugging

  if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    console.log('Redirecting to /dashboard'); // Tambahkan ini untuk debugging
    return Response.redirect(new URL('/dashboard', request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    console.log('Redirecting to /login'); // Tambahkan ini untuk debugging
    return Response.redirect(new URL('/login', request.url));
  }
}