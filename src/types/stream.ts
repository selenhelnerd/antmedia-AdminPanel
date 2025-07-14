// src/types/stream.ts

/** Mevcut yayın nesnesi tipi */
export type Stream = {
  id: number
  name: string
  status: 'live' | 'finished' | 'preparing'
  viewers: number
  duration: string
  quality: string
  bitrate: string
  createdAt: string
}

/** Yeni yayın oluştururken kullanılan veri tipi */
export type NewStream = {
  name: string
  description?: string
  quality: string
  bitrate: string
  isPublic: boolean
}
