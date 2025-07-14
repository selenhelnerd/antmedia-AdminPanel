// src/pages/LoginPage.tsx

import React from 'react';
import LoginForm, { LoginValues } from './LoginForm';
import { useNavigate } from 'react-router-dom';
import Card from '../../common/Card';
import { Shield } from 'lucide-react';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (values: LoginValues) => {
    // ... API’ye çağrı ...
    await new Promise(r => setTimeout(r, 1000));
    if (values.email !== 'a@gmail.com' || values.password !== '123456') {
      throw new Error('Geçersiz email veya şifre');
    }
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <Card>
        {/* Başlık & ikon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Girişi</h1>
          <p className="text-gray-600">
            Ant Media Server yönetim paneline hoş geldiniz
          </p>
        </div>

        {/* Form */}
        <LoginForm onSubmit={handleLogin} />
      </Card>
    </div>
  );
};

export default LoginPage;
