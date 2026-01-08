// 请求地址/api/image
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
 
export async function GET(_request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
 
  return new Response('这是一张图片', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token?.value || ''}` },
  });
}
