import type React from 'react';

const EngineerMain: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Engineer 主页面
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        这是 Engineer 的主内容区域。当访问 /home/engineer 时，这里会显示。
      </p>
      <div className="mt-4 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          同时，右侧的 Team 槽位会显示 @team/engineer/page.tsx 的内容。
        </p>
      </div>
    </div>
  );
};

export default EngineerMain;

