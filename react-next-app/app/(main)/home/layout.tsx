import type React from 'react';

export default function HomeLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      {/* 主内容区域 */}
      <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
        {children}
      </div>
      
      {/* 平行路由：使用网格布局并排显示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Team 平行路由 */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            团队信息
          </h2>
          {team}
        </div>
        
        {/* Analytics 平行路由 */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            数据分析
          </h2>
          {analytics}
        </div>
      </div>
    </div>
  );
}

