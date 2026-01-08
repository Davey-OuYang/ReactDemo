"use client";
import type React from "react";
import { usePathname } from "next/navigation";

const Page: React.FC = () => {
  const pathName = usePathname();
  return (
    <div>
      <h3>动态路由页面</h3>
      <p className="text-zinc-600 dark:text-zinc-400">{pathName}</p>
    </div>
  );
};

export default Page;
