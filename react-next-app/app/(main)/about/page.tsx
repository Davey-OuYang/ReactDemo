import type React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        About 页面
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        这是关于页面内容。这个页面和 Home 页面共用同一个 Layout。
      </p>
    </div>
  );
};

export default About;

