'use client';

import type React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { removeAuthCookie } from '@/lib/auth';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = () => {
    // 删除 cookie
    removeAuthCookie();
    // 重定向到登录页
    router.push('/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* 共用的导航栏 */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-8">
              <Link
                href="/home"
                className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
            </div>
            <button
              onClick={handleLogout}
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 px-3 py-2 text-sm font-medium"
            >
              登出
            </button>
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

