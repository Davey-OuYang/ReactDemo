import type React from 'react';
import { Navigate } from 'react-router-dom';
import { hasCookie } from '../utils/cookie';

interface ProtectedRouteProps {
  children: React.ReactNode;
  cookieName?: string; // cookie 名称，默认为 'token'
}

/**
 * 路由守卫组件
 * 如果存在指定的 cookie，则渲染子组件，否则重定向到登录页
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  cookieName = 'token' 
}) => {
  const isAuthenticated = hasCookie(cookieName);

  if (!isAuthenticated) {
    // 如果未认证，重定向到登录页
    return <Navigate to="/login" replace />;
  }

  // 如果已认证，渲染子组件
  return children;
};

export default ProtectedRoute;

