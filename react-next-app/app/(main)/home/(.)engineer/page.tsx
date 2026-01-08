'use client';

import type React from 'react';
import { useRouter } from 'next/navigation';

const EngineerModal: React.FC = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back(); // 返回上一页
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* 模态框背景 */}
      <div
        className="absolute inset-0"
        onClick={handleClose}
      />

      {/* 模态框内容 */}
      <div className="relative bg-white dark:bg-zinc-900 rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Engineer 详情（拦截路由）
          </h2>
          <button
            onClick={handleClose}
            className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-zinc-600 dark:text-zinc-400">
            这是通过拦截路由显示的 Engineer 详情页面。
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            当你从 /home 页面点击链接访问 /home/engineer 时，会以模态框形式显示。
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            如果直接访问 /home/engineer URL，则会显示完整的页面。
          </p>
        </div>
      </div>
    </div>
  );
};

export default EngineerModal;


