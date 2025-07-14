// src/components/AdminPanel/Streams/EditStreamModal.tsx

import React from 'react'
import { Stream } from '../../../types/stream'

interface EditStreamModalProps {
  /** Modal görünürlük durumu */
  show: boolean
  /** Düzenlenecek yayın nesnesi */
  selectedStream: Stream | null
  /** Seçili yayın güncellendiğinde çağrılan callback */
  onUpdate: (id: number, data: Partial<Stream>) => void
  /** Modal kapatma callback */
  onClose: () => void
  /** Seçili yayın state setter (form içi değişiklikler için) */
  setSelectedStream: (stream: Stream | null) => void
}

const EditStreamModal: React.FC<EditStreamModalProps> = ({
  show,
  selectedStream,
  setSelectedStream,
  onUpdate,
  onClose,
}) => {
  if (!show || !selectedStream) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Yayın Düzenle</h3>

        <div className="space-y-4">
          {/* Yayın Adı */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Yayın Adı
            </label>
            <input
              type="text"
              placeholder="Yayın adını girin"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedStream.name}
              onChange={e =>
                setSelectedStream({ ...selectedStream, name: e.target.value })
              }
            />
          </div>

          {/* Kalite */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kalite
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedStream.quality}
              onChange={e =>
                setSelectedStream({ ...selectedStream, quality: e.target.value })
              }
            >
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
              <option value="480p">480p</option>
              <option value="360p">360p</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 border rounded-lg hover:bg-gray-50"
          >
            İptal
          </button>
          <button
            onClick={() => {
              onUpdate(selectedStream.id, selectedStream)
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Güncelle
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditStreamModal
