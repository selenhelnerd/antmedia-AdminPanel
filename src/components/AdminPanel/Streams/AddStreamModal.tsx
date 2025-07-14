// src/components/AdminPanel/Streams/AddStreamModal.tsx
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import FormikModal from '../../common/FormikModal';
import { NewStream } from '../../../types/stream';
import { streamSchema } from './validation';

interface Props {
  show: boolean;
  onClose: () => void;
  onCreate: (stream: NewStream) => void;
}

const AddStreamModal: React.FC<Props> = ({ show, onClose, onCreate }) => {
  const initial: NewStream = {
    name: '',
    description: '',
    quality: '1080p',
    bitrate: '1000',
    isPublic: false,
  };

  return (
    <FormikModal<NewStream>
      title="Yeni Yayın Ekle"
      initialValues={initial}
      validationSchema={streamSchema}
      isOpen={show}
      onClose={onClose}
      onSubmit={(values, { setSubmitting }) => {
        onCreate(values);
        setSubmitting(false);
        onClose();
      }}
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Yayın Adı</label>
        <Field name="name" className="w-full px-3 py-2 border rounded-lg" />
        <ErrorMessage name="name" component="p" className="text-red-600 text-sm mt-1" />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Açıklama</label>
        <Field
          as="textarea"
          name="description"
          rows={3}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      {/* Quality */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Kalite</label>
        <Field as="select" name="quality" className="w-full px-3 py-2 border rounded-lg">
          {['1080p','720p','480p','360p'].map(q => (
            <option key={q} value={q}>{q}</option>
          ))}
        </Field>
      </div>

      {/* Bitrate */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bitrate (kbps)</label>
        <Field
          name="bitrate"
          type="number"
          className="w-full px-3 py-2 border rounded-lg"
        />
        <ErrorMessage name="bitrate" component="p" className="text-red-600 text-sm mt-1" />
      </div>

      {/* isPublic */}
      <div className="flex items-center">
        <Field type="checkbox" name="isPublic" className="mr-2" />
        <label className="text-sm text-gray-700">Herkese açık yayın</label>
      </div>
    </FormikModal>
  );
};

export default AddStreamModal;
