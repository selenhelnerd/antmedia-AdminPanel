// src/types/application.ts

import { User } from './user'

/**
 * Bir uygulamanın tam şekli
 */
export interface Application {
  id: number
  name: string
  visibleTo: User[]        // Hangi kullanıcılar görebilir
  streamIds: number[]      // Uygulamaya bağlı yayın ID’leri
  createdAt: Date
  updatedAt: Date
}

/**
 * Yeni bir uygulama yaratırken gönderilecek veri
 */
export interface NewApplication {
  name: string
  visibleTo: number[]      // User ID’leri
  streamIds: number[]      // Yayın ID’leri
  // createdAt/updatedAt opsiyonel kalmaya devam edebilir
  createdAt?: Date
  updatedAt?: Date
}

/**
 * Mevcut bir uygulamayı güncellerken kullanılacak veri
 */
export interface UpdateApplication extends Partial<NewApplication> {
  id: number
}
