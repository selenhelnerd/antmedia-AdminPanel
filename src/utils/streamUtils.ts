// src/utils/streamUtils.ts

import { Stream } from '../types/stream'


export function getStatusColor(status: Stream['status']): string {
  switch (status) {
    case 'live':
      return 'bg-green-100 text-green-800'
    case 'finished':
      return 'bg-gray-100 text-gray-800'
    case 'preparing':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}


export function getStatusText(status: Stream['status']): string {
  switch (status) {
    case 'live':
      return 'Canlı'
    case 'finished':
      return 'Tamamlandı'
    case 'preparing':
      return 'Hazırlanıyor'
    default:
      return 'Bilinmeyen'
  }
}
