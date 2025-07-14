// src/components/Users/UsersPanel.tsx
import React from 'react'
import { Plus } from 'lucide-react'
import UsersFilters from './UsersFilters'
import UsersTable   from './UsersTable'
import UserModal    from './UserModal'
import PermissionsModal from './PermissionsModal'
import { useUsers } from '../../hooks/useUsers'

const UsersPanel: React.FC = () => {
  const {
    users, loading, error,
    searchTerm, setSearchTerm,
    statusFilter, setStatus,
    modalType, selected, openModal, closeModal,
    addUser, updateUser, deleteUser,
  } = useUsers()

  if (loading) return <p>Yükleniyor...</p>
  if (error)   return <p className="text-red-600">{error}</p>

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Kullanıcı Yönetimi</h2>
        <button
          onClick={() => openModal('add')}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={20} /><span className="ml-2">Yeni Kullanıcı</span>
        </button>
      </header>

      <UsersFilters
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        statusFilter={statusFilter}
        onStatusChange={setStatus}
      />

      <UsersTable
        users={users}
        onEdit={(u) => openModal('edit', u)}
        onPermissions={(u) => openModal('permissions', u)}
        onDelete={deleteUser}
      />

      {modalType === 'add' && (
        <UserModal
          mode="add"
          user={null}
          isOpen={true}
          onClose={closeModal}
          onSubmit={addUser}
        />
      )}
      {modalType === 'edit' && selected && (
        <UserModal
          mode="edit"
          user={selected}
          isOpen={true}
          onClose={closeModal}
          onSubmit={(data) => updateUser(selected.id, data)}
        />
      )}
      {modalType === 'permissions' && selected && (
        <PermissionsModal
          user={selected}
          isOpen={true}
          onClose={closeModal}
          onSubmit={(perms) => updateUser(selected.id, perms)}
        />
      )}
    </div>
  )
}

export default UsersPanel
