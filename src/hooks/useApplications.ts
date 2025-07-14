// src/hooks/useApplications.ts
import { useState, useEffect, useMemo, useCallback } from 'react'
import {
  Application,
  NewApplication,
  UpdateApplication,
} from '../types/applications'
import { useUsers } from './useUsers'

export function useApplications() {
  const { users, loading: usersLoading, error: usersError } = useUsers()

  const [allApplications, setAllApplications] = useState<Application[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // 1) Başlangıç verisi: users yüklendiğinde set ediyoruz
  useEffect(() => {
    if (!usersLoading && users.length > 0) {
      const initial: Application[] = [
        {
          id: 1,
          name: 'Mobile App',
          visibleTo: [users[0], users[1]],
          streamIds: [],                // ← default boş dizi
          createdAt: new Date('2024-01-15'),
          updatedAt: new Date('2024-01-15'),
        },
        {
          id: 2,
          name: 'Web Dashboard',
          visibleTo: [users[0], users[2]],
          streamIds: [],                // ← default boş dizi
          createdAt: new Date('2024-02-10'),
          updatedAt: new Date('2024-02-10'),
        },
        {
          id: 3,
          name: 'Admin Panel',
          visibleTo: [users[1], users[2]],
          streamIds: [],                // ← default boş dizi
          createdAt: new Date('2024-03-05'),
          updatedAt: new Date('2024-03-05'),
        },
      ]
      setAllApplications(initial)
      setLoading(false)
    }
  }, [users, usersLoading])

  // 2) Aramaya göre filtrelenmiş liste
  const applications = useMemo(
    () =>
      allApplications.filter((app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [allApplications, searchTerm]
  )

  // 3) Yeni uygulama yaratma
  const createApplication = useCallback(
    (data: NewApplication) => {
      try {
        const selectedUsers = users.filter((u) =>
          data.visibleTo.includes(u.id)
        )
        const nextId =
          allApplications.length > 0
            ? Math.max(...allApplications.map((a) => a.id)) + 1
            : 1

        const newApp: Application = {
          id: nextId,
          name: data.name,
          visibleTo: selectedUsers,
          streamIds: data.streamIds,     // ← buraya atıyoruz
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        setAllApplications((prev) => [...prev, newApp])
        return newApp
      } catch (err) {
        setError('Uygulama oluşturulurken hata oluştu')
        console.error(err)
        throw err
      }
    },
    [allApplications, users]
  )

  // 4) Mevcut uygulamayı güncelleme
  const updateApplication = useCallback(
    (data: UpdateApplication) => {
      try {
        setAllApplications((prev) =>
          prev.map((app) => {
            if (app.id !== data.id) return app

            const updated: Application = { ...app }

            if (data.name !== undefined) {
              updated.name = data.name
            }
            if (data.visibleTo !== undefined) {
              updated.visibleTo = users.filter((u) =>
                data.visibleTo!.includes(u.id)
              )
            }
            if (data.streamIds !== undefined) {
              updated.streamIds = data.streamIds  // ← ve burada
            }

            updated.updatedAt = new Date()
            return updated
          })
        )
      } catch (err) {
        setError('Uygulama güncellenirken hata oluştu')
        console.error(err)
        throw err
      }
    },
    [users]
  )

  // 5) Silme
  const deleteApplication = useCallback((id: number) => {
    if (!window.confirm('Bu uygulamayı silmek istediğinize emin misiniz?'))
      return
    setAllApplications((prev) => prev.filter((app) => app.id !== id))
  }, [])

  return {
    applications,
    allApplications,
    searchTerm,
    setSearchTerm,
    createApplication,
    updateApplication,
    deleteApplication,
    loading: loading || usersLoading,
    error: error ?? usersError,
  }
}
