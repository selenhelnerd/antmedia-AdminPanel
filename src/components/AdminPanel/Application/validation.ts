import * as Yup from 'yup';

export const applicationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required('Uygulama adı zorunludur'),
  visibleTo: Yup.array()
    .of(Yup.number())
    .min(1, 'En az bir kullanıcı seçmelisiniz'),
  streamIds: Yup.array()
    .of(Yup.number())
    .min(1, 'En az bir yayın seçmelisiniz'),
});
