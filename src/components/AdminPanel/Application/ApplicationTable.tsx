// src/components/AdminPanel/Application/ApplicationTable.tsx
import React from 'react'
import { Application } from '../../../types/applications'
import ApplicationRow from './ApplicationRow'

interface TableProps {
  applications: Application[]
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

const ApplicationTable: React.FC<TableProps> = ({
  applications,
  onEdit,
  onDelete,
}) => {
  if (applications.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto h-12 w-12 text-gray-400">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 w-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0
                 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2
                 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          Uygulama bulunamadı
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Henüz uygulama bulunmuyor. Yeni uygulama eklemek için "Yeni Uygulama"
          butonunu kullanın.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Uygulama
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Kimler izliyor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Yayınlar
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tarih
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              İşlemler
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {applications.map((app) => (
            <ApplicationRow
              key={app.id}
              application={app}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApplicationTable
