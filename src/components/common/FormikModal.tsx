// src/components/common/FormikModal.tsx
import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import BaseModal from './BaseModal';

import { FormikValues } from 'formik';

interface FormikModalProps<Values extends FormikValues> {
  title: string;
  initialValues: Values;
  validationSchema: any;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
  children: React.ReactNode; // iç form alanları
}

function FormikModal<Values extends FormikValues>({
  title,
  initialValues,
  validationSchema,
  isOpen,
  onClose,
  onSubmit,
  children,
}: FormikModalProps<Values>) {
  return (
    <BaseModal title={title} isOpen={isOpen} onClose={onClose}>
      <Formik<Values>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {children}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                İptal
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Kaydediliyor…' : 'Kaydet'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </BaseModal>
  );
}

export default FormikModal;
