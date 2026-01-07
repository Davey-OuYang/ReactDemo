/**
 * 认证相关的工具函数
 */

/**
 * 设置认证 cookie
 */
export function setAuthCookie(value: string = 'true', maxAge: number = 86400) {
  document.cookie = `isAuth=${value}; path=/; max-age=${maxAge}`;
}

/**
 * 删除认证 cookie（登出）
 */
export function removeAuthCookie() {
  document.cookie = 'isAuth=; path=/; max-age=0';
}

/**
 * 获取认证 cookie 值
 */
export function getAuthCookie(): string | null {
  if (typeof document === 'undefined') return null;
  
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'isAuth') {
      return value;
    }
  }
  return null;
}

/**
 * 检查是否已登录
 */
export function isAuthenticated(): boolean {
  return getAuthCookie() === 'true';
}

