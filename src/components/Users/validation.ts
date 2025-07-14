import * as Yup from 'yup';

export const userSchema = Yup.object({
  name: Yup.string().required('Ad Soyad zorunludur'),
  email: Yup.string().email('Geçersiz e-posta').required('E-posta zorunludur'),
  role: Yup.string().oneOf(['admin','editor','viewer']).required(),
  status: Yup.string().oneOf(['active','inactive']).required(),
});
