import { createRoot } from 'react-dom/client';
import './styles/index.css'; // 全局样式，Vite 自动编译
import App from './App';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Root element not found');
createRoot(rootElement).render(<App />);


