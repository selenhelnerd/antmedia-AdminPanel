// src/validation/loginSchema.ts
import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Geçerli bir email adresi girin')
    .required('Email adresi gereklidir'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalıdır')
    .required('Şifre gereklidir'),
  rememberMe: Yup.boolean(),
});
