// src/components/AdminPanel/Streams/EditStreamModal.tsx

import React from 'react'
import { Field, ErrorMessage } from 'formik'
import FormikModal from '../../common/FormikModal'
import { Stream } from '../../../types/stream'
import { streamSchema } from './validation'

interface EditStreamModalProps {
  show: boolean
  selectedStream: Stream | null
  onUpdate: (id: number, data: Stream) => void
  onClose: () => void
}

const EditStreamModal: React.FC<EditStreamModalProps> = ({
  show,
  selectedStream,
  onUpdate,
  onClose,
}) => {
  if (!show || !selectedStream) return null

  const initialValues: Stream = selectedStream

  const handleSubmit = (
    values: Stream,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    onUpdate(selectedStream.id, values)
    setSubmitting(false)
    onClose()
  }

  return (
    <FormikModal<Stream>
      title="Yayın Düzenle"
      initialValues={initialValues}
      validationSchema={streamSchema}
      isOpen={show}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      {/* Yayın Adı */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Yayın Adı
        </label>
        <Field
          name="name"
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ErrorMessage
          name="name"
          component="p"
          className="text-red-600 text-sm mt-1"
        />
      </div>

      {/* Açıklama */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Açıklama
        </label>
        <Field
          as="textarea"
          name="description"
          rows={3}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ErrorMessage
          name="description"
          component="p"
          className="text-red-600 text-sm mt-1"
        />
      </div>

      {/* Kalite */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kalite
        </label>
        <Field
          as="select"
          name="quality"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {['1080p', '720p', '480p', '360p'].map(q => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name="quality"
          component="p"
          className="text-red-600 text-sm mt-1"
        />
      </div>

      {/* Bitrate */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Bitrate (kbps)
        </label>
        <Field
          name="bitrate"
          type="number"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ErrorMessage
          name="bitrate"
          component="p"
          className="text-red-600 text-sm mt-1"
        />
      </div>

      {/* Herkese Açık */}
      <div className="flex items-center">
        <Field
          type="checkbox"
          name="isPublic"
          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="isPublic" className="text-sm text-gray-700">
          Herkese açık yayın
        </label>
      </div>
    </FormikModal>
  )
}

export default EditStreamModal
