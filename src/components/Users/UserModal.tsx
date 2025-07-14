// src/components/AdminPanel/User/UserModal.tsx
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import FormikModal from '../common/FormikModal';
import { User, UserForm } from '../../types/user';
import { ROLES } from '../../utils/constants';
import { userSchema } from './validation';

interface Props {
  mode: 'add' | 'edit';
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: UserForm) => void;
}

const UserModal: React.FC<Props> = ({ mode, user, isOpen, onClose, onSubmit }) => {
  const initialValues: UserForm = user
    ? { name: user.name, email: user.email, role: user.role, status: user.status, permissions: user.permissions || [] }
    : { name: '', email: '', role: 'viewer', status: 'active', permissions: [] };

  return (
    <FormikModal<UserForm>
      title={mode === 'add' ? 'Yeni Kullanıcı Ekle' : 'Kullanıcı Düzenle'}
      initialValues={initialValues}
      validationSchema={userSchema}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
        onClose();
      }}
    >
      {/* Ad Soyad */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
        <Field
          name="name"
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <ErrorMessage name="name" component="p" className="text-red-600 text-sm mt-1" />
      </div>

      {/* E-posta */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
        <Field
          name="email"
          type="email"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <ErrorMessage name="email" component="p" className="text-red-600 text-sm mt-1" />
      </div>

      {/* Rol */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Rol</label>
        <Field
          as="select"
          name="role"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          {ROLES.map(r => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </Field>
      </div>

      {/* Durum */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Durum</label>
        <Field
          as="select"
          name="status"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="active">Aktif</option>
          <option value="inactive">Pasif</option>
        </Field>
      </div>
    </FormikModal>
  );
};

export default UserModal;
