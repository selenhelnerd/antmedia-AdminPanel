// src/components/Login/LoginForm.tsx
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { Eye, EyeOff, Mail, Lock, Loader2, AlertCircle } from 'lucide-react';
import { loginSchema } from '../Login/loginSchema.ts';

export interface LoginValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface Props {
  onSubmit: (values: LoginValues) => Promise<void>;
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>('');

  const initialValues: LoginValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting }: FormikHelpers<LoginValues>
  ) => {
    setError('');
    try {
      await onSubmit(values);
    } catch (err: any) {
      setError(err.message || 'Giriş sırasında hata oluştu');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Adresi
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Field
                name="email"
                type="email"
                placeholder="admin@antmedia.io"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <ErrorMessage
              name="email"
              component="p"
              className="mt-1 text-sm text-red-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şifre
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <Field
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <ErrorMessage
              name="password"
              component="p"
              className="mt-1 text-sm text-red-600"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <Field
              name="rememberMe"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
              Beni hatırla
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" /> Giriş yapılıyor…
              </div>
            ) : (
              'Giriş Yap'
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
