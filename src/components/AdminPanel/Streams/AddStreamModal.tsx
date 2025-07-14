// src/components/AdminPanel/Streams/AddStreamModal.tsx

import React from 'react'
import { NewStream } from '../../../types/stream'

interface AddStreamModalProps {
  show: boolean
  newStream: NewStream
  setNewStream: (stream: NewStream) => void
  onClose: () => void
  onCreate: (stream: NewStream) => void
}

const AddStreamModal: React.FC<AddStreamModalProps> = ({
  show,
  newStream,
  setNewStream,
  onClose,
  onCreate,
}) => {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Yeni Yayın Ekle</h3>
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
              value={newStream.name}
              onChange={e =>
                setNewStream({ ...newStream, name: e.target.value })
              }
            />
          </div>

          {/* Açıklama */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Açıklama
            </label>
            <textarea
              placeholder="Yayın açıklaması"
              rows={3}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newStream.description || ''}
              onChange={e =>
                setNewStream({ ...newStream, description: e.target.value })
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
              value={newStream.quality}
              onChange={e =>
                setNewStream({ ...newStream, quality: e.target.value })
              }
            >
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
              <option value="480p">480p</option>
              <option value="360p">360p</option>
            </select>
          </div>

          {/* Bitrate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bitrate (kbps)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newStream.bitrate}
              onChange={e =>
                setNewStream({ ...newStream, bitrate: e.target.value })
              }
            />
          </div>

          {/* Genel Erişim */}
          <div className="flex items-center">
            <input
              id="isPublic"
              type="checkbox"
              className="mr-2"
              checked={newStream.isPublic}
              onChange={e =>
                setNewStream({ ...newStream, isPublic: e.target.checked })
              }
            />
            <label htmlFor="isPublic" className="text-sm text-gray-700">
              Herkese açık yayın
            </label>
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
            onClick={() => onCreate(newStream)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Oluştur
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddStreamModal
