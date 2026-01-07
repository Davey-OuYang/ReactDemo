import type React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import ProtectedRoute from '../components/ProtectedRoute';
import MainLayout from '../components/MainLayout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* 登录页面，不需要路由守卫 */}
      <Route path="/login" element={<Login />} />
      
      {/* 根路径重定向到 /home */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      
      {/* 受保护的路由组，共用 MainLayout */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      
      {/* 默认重定向到首页 */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default AppRoutes;
