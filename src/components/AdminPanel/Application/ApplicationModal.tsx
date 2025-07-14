// src/components/AdminPanel/Application/ApplicationModal.tsx
import React, {
  useState,
  useEffect,
  KeyboardEvent,
  MouseEvent,
} from 'react'
import { NewApplication } from '../../../types/applications'
import { useUsers } from '../../../hooks/useUsers'
import { useApplications } from '../../../hooks/useApplications'
import { useStreams } from '../../../hooks/useStreams'

interface ApplicationModalProps {
  appId: number | null
  onSave: (data: NewApplication) => void
  onClose: () => void
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  appId,
  onSave,
  onClose,
}) => {
  const { applications } = useApplications()
  const { users, loading: usersLoading, error: usersError } = useUsers()
  const { streams } = useStreams()

  const existing = appId != null
    ? applications.find((a) => a.id === appId)
    : null

  const [name, setName] = useState<string>('')
  const [visibleTo, setVisibleTo] = useState<number[]>([])
  const [streamIds, setStreamIds] = useState<number[]>([])
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [saving, setSaving] = useState<boolean>(false)

  useEffect(() => {
    if (existing) {
      setName(existing.name)
      setVisibleTo(existing.visibleTo.map((u) => u.id))
      // assume Application has a `streams: Stream[]` field
      setStreamIds(existing.streamIds)
    } else {
      setName('')
      setVisibleTo([])
      setStreamIds([])
    }
    setErrors({})
  }, [existing])

  const toggleUser = (id: number) => {
    setVisibleTo((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
    if (errors.visibleTo) {
      setErrors((prev) => ({ ...prev, visibleTo: '' }))
    }
  }

  const toggleStream = (id: number) => {
    setStreamIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
    if (errors.streamIds) {
      setErrors((prev) => ({ ...prev, streamIds: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!name.trim()) newErrors.name = 'Uygulama adı zorunludur'
    if (visibleTo.length === 0)
      newErrors.visibleTo = 'En az bir kullanıcı seçmelisiniz'
    if (streamIds.length === 0)
      newErrors.streamIds = 'En az bir yayın seçmelisiniz'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = () => {
    if (!validateForm()) return
    setSaving(true)
    try {
      onSave({ name: name.trim(), visibleTo, streamIds })
      onClose()
    } catch (err) {
      console.error(err)
      setErrors({ general: 'Kayıt sırasında hata oluştu' })
    } finally {
      setSaving(false)
    }
  }

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') onClose()
  }

  if (usersLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600" />
            <span>Yükleniyor...</span>
          </div>
        </div>
      </div>
    )
  }

  if (usersError) {
    return (
      <div className="p-6 text-center text-red-600">
        Kullanıcılar yüklenemedi: {usersError}
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto">
        {/* Başlık & Kapat */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {existing ? 'Uygulama Düzenle' : 'Yeni Uygulama'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
            ×
          </button>
        </div>

        {/* Genel hata */}
        {errors.general && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {errors.general}
          </div>
        )}

        {/* Ad alanı */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Uygulama Adı *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              if (errors.name) setErrors((p) => ({ ...p, name: '' }))
            }}
            placeholder="Uygulama adını girin"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        {/* Görünebilirlik */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Görünebilirlik *
          </label>
          <div
            className={`max-h-40 overflow-y-auto border rounded-lg p-3 bg-gray-50 ${
              errors.visibleTo ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {users.map((user) => (
              <label
                key={user.id}
                className="flex items-center mb-2 cursor-pointer hover:bg-gray-100 p-1 rounded"
              >
                <input
                  type="checkbox"
                  checked={visibleTo.includes(user.id)}
                  onChange={() => toggleUser(user.id)}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  <span className="text-xs text-gray-500">{user.email}</span>
                </div>
              </label>
            ))}
          </div>
          {errors.visibleTo && (
            <p className="mt-1 text-sm text-red-600">{errors.visibleTo}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            {visibleTo.length} kullanıcı seçildi
          </p>
        </div>

        {/* Yayınlar */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Yayınlar *
          </label>
          <div
            className={`max-h-40 overflow-y-auto border rounded-lg p-3 bg-gray-50 ${
              errors.streamIds ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {streams.map((stream) => (
              <label
                key={stream.id}
                className="flex items-center mb-2 cursor-pointer hover:bg-gray-100 p-1 rounded"
              >
                <input
                  type="checkbox"
                  checked={streamIds.includes(stream.id)}
                  onChange={() => toggleStream(stream.id)}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">{stream.name}</span>
              </label>
            ))}
          </div>
          {errors.streamIds && (
            <p className="mt-1 text-sm text-red-600">{errors.streamIds}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            {streamIds.length} yayın seçildi
          </p>
        </div>

        {/* Butonlar */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            disabled={saving}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            İptal
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {saving ? 'Kaydediliyor...' : 'Kaydet'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApplicationModal
