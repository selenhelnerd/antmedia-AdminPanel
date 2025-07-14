// src/components/AdminPanel/Streams/validation.ts
import * as Yup from 'yup';

export const streamSchema = Yup.object({
  name: Yup.string().required('Yayın adı zorunludur'),
  description: Yup.string(),
  quality: Yup.string().oneOf(['1080p','720p','480p','360p']).required(),
  bitrate: Yup.number().min(1, 'Geçersiz bitrate').required(),
  isPublic: Yup.boolean(),
});
