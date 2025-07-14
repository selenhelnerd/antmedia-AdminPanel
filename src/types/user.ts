// src/types/user.ts

// Roller
export type Role = 'admin' | 'user' |'editor' | 'viewer';

// İzinler
export type Permission =
  | 'view_streams'
  | 'manage_streams'
  | 'manage_users'
  | 'system_settings'
  | 'analytics'
  | 'view_content' | 'view_reports'

// Kullanıcı durumu
export type Status = 'active' | 'inactive'

// Kullanıcı arayüzü
export interface User {
  id: number
  name: string
  email: string
  role: Role
  status: Status
  permissions: Permission[]
}

// Form’dan submit edilen veri tipi
export interface UserForm {
  name: string
  email: string
  role: Role
  status: Status
  permissions: Permission[]
}
