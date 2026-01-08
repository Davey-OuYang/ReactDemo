import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {

  const { pathname } = request.nextUrl;
  
  // 获取 cookie 中的 isAuth 值
  const isAuth = request.cookies.get('isAuth')?.value;
  // 如果访问的是登录页面，且已经登录，重定向到 Home
  if (pathname === '/login') {
    if (isAuth === 'true') {
      return NextResponse.redirect(new URL('/home', request.url));
    }
    return NextResponse.next();
  }

  // 如果访问的是受保护的路由（如 /、/home、/about），且未登录，重定向到登录页
  const protectedRoutes = ['/', '/home', '/about'];
  if (protectedRoutes.includes(pathname)) {
    if (isAuth !== 'true') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// 配置代理匹配的路径
export const config = {
  matcher: [
    '/',                    // 根路径
    '/home/:path*',
    '/about/:path*',
    '/login/:path*',
  ],
};

