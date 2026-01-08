import type React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Home 页面
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        这是首页内容。这个页面和 About 页面共用同一个 Layout。
      </p>
      
      <div className="mt-6 space-y-2">
        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          拦截路由演示：
        </p>
        <Link 
          href="/home/engineer"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          点击这里访问 Engineer（会以模态框显示）
        </Link>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
          提示：从当前页面点击链接会显示模态框，直接访问 /home/engineer 会显示完整页面
        </p>
      </div>
    </div>
  );
};

export default Home;

