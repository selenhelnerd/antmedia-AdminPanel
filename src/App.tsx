// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage   from './components/AdminPanel/Login/LoginPage';
import AdminPanel  from './components/AdminPanel/AdminPanel';

const App: React.FC = () => (
 
    <Routes>
      <Route path="/"        element={<Navigate to="/login" replace />} />
      <Route path="/login"   element={<LoginPage />} />
      {/* dashboard altındaki tüm yollar AdminPanel içinde */}
      debugger;
      <Route path="/dashboard/*" element={<AdminPanel />} />
      
    </Routes>
 
);

export default App;
