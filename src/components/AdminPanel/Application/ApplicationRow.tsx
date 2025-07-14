// src/components/AdminPanel/Application/ApplicationRow.tsx
import React from 'react'
import { Application } from '../../../types/applications'
import { formatDate, formatDateTime } from '../../../utils/dateUtils'
import { useStreams } from '../../../hooks/useStreams'

interface RowProps {
  application: Application
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

const ApplicationRow: React.FC<RowProps> = ({
  application,
  onEdit,
  onDelete,
}) => {
  // Tüm yayınları al ve bu uygulamaya ait olanları filtrele
  const { streams } = useStreams()
  const selectedStreams = streams.filter(s =>
    application.streamIds.includes(s.id)
  )

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      {/* ID */}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-medium text-sm">
              {application.id}
            </span>
          </div>
        </div>
      </td>

      {/* Ad ve güncelleme tarihi */}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {application.name}
        </div>
        <div className="text-sm text-gray-500">
          {formatDateTime(application.updatedAt)} tarihinde güncellendi
        </div>
      </td>

      {/* Görünebilirlik (kullanıcılar) */}
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1">
          {application.visibleTo.map(user => (
            <span
              key={user.id}
              className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-800 text-blue-100"
            >
              {user.name}
            </span>
          ))}
        </div>
      </td>

     <td className="px-6 py-4 align-top">
      <div className="flex flex-col space-y-1">
         {selectedStreams.map(stream => (
          <span
             key={stream.id}
             className="inline-block px-2 py-1 rounded bg-yellow-100 text-yellow-800 text-xs font-medium"
           >
             {stream.name}
           </span>
         ))}
       </div>
     </td>

      {/* Oluşturulma tarihi */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatDate(application.createdAt)}
      </td>

      {/* İşlemler */}
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => onEdit(application.id)}
            className="text-blue-600 hover:text-blue-900 hover:underline transition-colors"
          >
            Düzenle
          </button>
          <button
            onClick={() => onDelete(application.id)}
            className="text-red-600 hover:text-red-900 hover:underline transition-colors"
          >
            Sil
          </button>
        </div>
      </td>
    </tr>
  )
}

export default ApplicationRow
