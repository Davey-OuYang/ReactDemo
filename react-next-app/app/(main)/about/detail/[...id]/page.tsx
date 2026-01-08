'use client';

import type React from 'react';
import { useParams } from 'next/navigation';

const DetailDynamic: React.FC = () => {
  const params = useParams();
  const id = params.id as string[];
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Detail 动态路由页面
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        访问路径：/about/detail/{id ? id.join('/') : ''}
      </p>
      <p className="text-zinc-600 dark:text-zinc-400">
        捕获的参数：{id ? JSON.stringify(id) : '无'}
      </p>
    </div>
  );
};

export default DetailDynamic;

