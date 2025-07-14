// src/hooks/useUsers.ts
import { useState, useEffect, useMemo, useCallback } from 'react'
import { User, UserForm, Status, Permission } from '../types/user'

export type ModalType = 'add' | 'edit' | 'permissions' | null

export function useUsers() {
  // --- Veri ve yükleme durumu ---
  const [allUsers, setAllUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // --- Filtreleme için state ---
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [statusFilter, setStatus] = useState<Status | 'all'>('all')

  // --- Modal yönetimi ---
  const [modalType, setModalType] = useState<ModalType>(null)
  const [selected, setSelected] = useState<User | null>(null)

  // --- İlk kullanıcıları yükle (mock) ---
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        
        await new Promise((r) => setTimeout(r, 500))
        const mock: User[] = [
          { id: 1, name: 'Admin User',   email: 'admin@example.com',   role: 'admin', status: 'active',   permissions: ['manage_users', 'view_streams'] },
          { id: 2, name: 'SELEN ERDOĞAN',      email: 'selen@example.com',    role: 'user',  status: 'active',   permissions: ['view_streams'] },
          { id: 3, name: 'Enes Yanık',    email: 'enes@example.com',    role: 'user',  status: 'inactive', permissions: ['view_streams'] },
          { id: 4, name: 'Test2',    email: 'test222@example.com',     role: 'user',  status: 'active',   permissions: ['view_streams'] },
          { id: 5, name: 'Testtt', email: 'testtt@example.com',   role: 'user',  status: 'active',   permissions: ['view_streams'] },
        ]
        setAllUsers(mock)
        setError(null)
      } catch (e) {
        console.error(e)
        setError('Kullanıcılar yüklenirken hata oluştu')
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  //  Filtrelenmiş kullanıcı listesi 
  const users = useMemo(() => {
    return allUsers.filter((u) => {
      const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase())
        || u.email.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === 'all' || u.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [allUsers, searchTerm, statusFilter])

  //  Modal açık/kapa fonksiyonları 
  const openModal = useCallback(
    (type: Exclude<ModalType, null>, user?: User) => {
      setModalType(type)
      setSelected(user ?? null)
    },
    []
  )
  const closeModal = useCallback(() => {
    setModalType(null)
    setSelected(null)
  }, [])

  // --- CRUD işlemleri ---
  const addUser = useCallback((data: UserForm) => {
    const nextId = allUsers.length
      ? Math.max(...allUsers.map((u) => u.id)) + 1
      : 1
    const newUser: User = {
      id: nextId,
      ...data,
    }
    setAllUsers((prev) => [...prev, newUser])
    closeModal()
  }, [allUsers, closeModal])

  const updateUser = useCallback(
    (id: number, data: Partial<UserForm> | Permission[]) => {
      setAllUsers((prev) =>
        prev.map((u) => {
          if (u.id !== id) return u
          // Eğer permissions array’i geldiyse ayrı işlem
          if (Array.isArray(data)) {
            return { ...u, permissions: data }
          }
          // name/email/role/status güncellemesi
          return { ...u, ...data }
        })
      )
      closeModal()
    },
    [closeModal]
  )

  const deleteUser = useCallback((id: number) => {
    if (window.confirm('Bu kullanıcıyı silmek istediğinize emin misiniz?')) {
      setAllUsers((prev) => prev.filter((u) => u.id !== id))
    }
  }, [])

  return {
    // Data + filtreler
    users,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatus,

    // Modal yönetimi
    modalType,
    selected,
    openModal,
    closeModal,

    // CRUD
    addUser,
    updateUser,
    deleteUser,
  }
}
