// src/utils/applicationUtils.ts
import { Application } from '../types/applications'

/**
 * Uygulama istatistiklerini hesaplar: toplam uygulama, toplam kullanıcı ve ortalama kullanıcı sayısı.
 */
export const getApplicationStats = (applications: Application[]) => {
  const totalApps = applications.length
  const totalUsers = applications.reduce((acc, app) => acc + app.visibleTo.length, 0)
  const averageUsers = totalApps > 0 ? Math.round(totalUsers / totalApps) : 0
  return {
    totalApps,
    totalUsers,
    averageUsers,
  }
}

/**
 * Arama terimine göre uygulamaları filtreler.
 * Uygulama adı, kullanıcı adı veya kullanıcı e-postasında arama yapar.
 */
export const filterApplications = (
  applications: Application[],
  searchTerm: string
): Application[] => {
  if (!searchTerm.trim()) return applications
  const term = searchTerm.toLowerCase()
  return applications.filter((app) =>
    app.name.toLowerCase().includes(term) ||
    app.visibleTo.some((user) =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    )
  )
}

/**
 * Uygulamaları belirli bir alana göre sıralar.
 * sortBy: 'name' | 'createdAt' | 'updatedAt'
 * order: 'asc' | 'desc'
 */
export const sortApplications = (
  applications: Application[],
  sortBy: 'name' | 'createdAt' | 'updatedAt',
  order: 'asc' | 'desc' = 'asc'
): Application[] => {
  return [...applications].sort((a, b) => {
    let aValue: string | number = ''
    let bValue: string | number = ''

    switch (sortBy) {
      case 'name':
        aValue = a.name.toLowerCase()
        bValue = b.name.toLowerCase()
        break
      case 'createdAt':
        aValue = a.createdAt.getTime()
        bValue = b.createdAt.getTime()
        break
      case 'updatedAt':
        aValue = a.updatedAt.getTime()
        bValue = b.updatedAt.getTime()
        break
    }

    if (aValue < bValue) return order === 'asc' ? -1 : 1
    if (aValue > bValue) return order === 'asc' ? 1 : -1
    return 0
  })
}

/**
 * Select/Dropdown için uygulama seçenekleri listesi oluşturur.
 */
export const mapApplicationsToSelectOptions = (
  applications: Application[]
): { label: string; value: number }[] => {
  return applications.map((app) => ({
    label: app.name,
    value: app.id,
  }))
}
