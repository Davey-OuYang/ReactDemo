//用于写自定义接口，请求地址 /api
import type { NextRequest } from 'next/server';
 
export async function GET(_request: NextRequest) {
 
  return new Response('Hello, Next.js!', {
    status: 200,
  });
}
