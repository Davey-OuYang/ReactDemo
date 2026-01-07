import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // 开发服务器配置
  // 注意：端口和主机也可以在 package.json 的 dev 脚本中通过 -p 和 -H 参数设置
  
  // API 代理配置（rewrites）
  async rewrites() {
    return [
      {
        // 将 /api/* 的请求代理到后端服务器
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*', // 你的后端 API 地址
      },
      // 可以添加更多代理规则
      // {
      //   source: '/backend/:path*',
      //   destination: 'http://localhost:8080/:path*',
      // },
    ];
  },
};

export default nextConfig;
