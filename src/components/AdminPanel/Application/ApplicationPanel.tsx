import React, { useState } from 'react'
import ApplicationFilters from './ApplicationFilters'
import ApplicationTable from './ApplicationTable'
import ApplicationModal from './ApplicationModal'
import { useApplications } from '../../../hooks/useApplications'

const ApplicationPanel: React.FC = () => {
  const { 
    applications, 
    createApplication, 
    updateApplication, 
    deleteApplication, 
    loading, 
    error 
  } = useApplications()
  
  const [showModal, setShowModal] = useState(false)
  const [editingAppId, setEditingAppId] = useState<number | null>(null)

  const openNew = () => {
    setEditingAppId(null)
    setShowModal(true)
  }

  const openEdit = (id: number) => {
    setEditingAppId(id)
    setShowModal(true)
  }

  const handleSave = (data: any) => {
    if (editingAppId) {
      updateApplication({ id: editingAppId, ...data })
    } else {
      createApplication(data)
    }
    setShowModal(false)
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-500">Applications yükleniyor...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Hata</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Applications</h1>
          <p className="mt-2 text-sm text-gray-700">
            Applications düzenleme.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            onClick={openNew}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Yeni Application
          </button>
        </div>
      </div>

      {/* Filters */}
      <ApplicationFilters />
      
      

      {/* Table */}
      <ApplicationTable
        applications={applications}
        onEdit={openEdit}
        onDelete={deleteApplication}
      />

      {/* Modal */}
      {showModal && (
        <ApplicationModal
          appId={editingAppId}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  )
}

export default ApplicationPanel