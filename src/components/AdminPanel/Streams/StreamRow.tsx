// src/components/AdminPanel/Streams/StreamRow.tsx

import React from 'react'
import { Stream } from '../../../types/stream'
import { getStatusColor, getStatusText } from '../../../utils/streamUtils'
import {
  Radio,
  Play,
  Pause,
  Edit,
  Trash2
} from 'lucide-react'

export interface StreamRowProps {
  stream: Stream
  onStart: (id: number) => void
  onStop: (id: number) => void
  onEdit: (stream: Stream) => void
  onDelete: (id: number) => void
}

const StreamRow: React.FC<StreamRowProps> = ({
  stream,
  onStart,
  onStop,
  onEdit,
  onDelete
}) => {
  const { id, name, status, viewers, duration, quality, bitrate, createdAt } = stream

  return (
    <tr className="hover:bg-gray-50">
      {/* Yayın Bilgisi */}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
            <Radio className="w-5 h-5 text-gray-600" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">#{id}</div>
          </div>
        </div>
      </td>

      {/* Durum */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(status)}`}
        >
          {getStatusText(status)}
        </span>
      </td>

      {/* İzleyici */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {viewers.toLocaleString()}
      </td>

      {/* Süre */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {duration}
      </td>

      {/* Kalite & Bitrate */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        <div>
          <div>{quality}</div>
          <div className="text-xs text-gray-500">{bitrate}</div>
        </div>
      </td>

      {/* Oluşturma Zamanı */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {createdAt}
      </td>

      {/* İşlemler */}
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center space-x-2">
          {status === 'live' ? (
            <button
              onClick={() => onStop(id)}
              className="text-red-600 hover:text-red-900"
              title="Yayını Durdur"
            >
              <Pause className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => onStart(id)}
              className="text-green-600 hover:text-green-900"
              title="Yayını Başlat"
            >
              <Play className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => onEdit(stream)}
            className="text-blue-600 hover:text-blue-900"
            title="Düzenle"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="text-red-600 hover:text-red-900"
            title="Sil"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default StreamRow
