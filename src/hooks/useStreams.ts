// src/hooks/useStreams.ts

import { useState, useMemo } from 'react'
import { Stream, NewStream } from '../types/stream'

export function useStreams() {
  // Başlangıç verisi (örnek)
  const initialStreams: Stream[] = [
    {
      id: 1,
      name: 'Canlı Yayın 1',
      status: 'live',
      viewers: 1245,
      duration: '02:34:12',
      quality: '1080p',
      bitrate: '5000 kbps',
      createdAt: '2024-12-15 14:30:00',
    },
    {
      id: 2,
      name: 'Kayıt Yayın 2',
      status: 'finished',
      viewers: 3456,
      duration: '01:45:30',
      quality: '720p',
      bitrate: '3000 kbps',
      createdAt: '2024-12-14 10:15:00',
    },
    {
      id: 3,
      name: 'Test Yayını',
      status: 'preparing',
      viewers: 0,
      duration: '00:00:00',
      quality: '1080p',
      bitrate: '0 kbps',
      createdAt: '2024-12-15 16:00:00',
    },
  ]

  const [streams, setStreams] = useState<Stream[]>(initialStreams)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | Stream['status']>(
    'all'
  )
  const [newStream, setNewStream] = useState<NewStream>({
    name: '',
    description: '',
    quality: '1080p',
    bitrate: '5000',
    isPublic: true,
  })

  // Filtrelenmiş yayınlar
  const filteredStreams = useMemo(
    () =>
      streams.filter((stream) => {
        const matchesSearch = stream.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
        const matchesStatus =
          statusFilter === 'all' || stream.status === statusFilter
        return matchesSearch && matchesStatus
      }),
    [streams, searchTerm, statusFilter]
  )

  // CRUD ve durum değiştirme işlemleri
  const createStream = (data: NewStream) => {
    const newObj: Stream = {
      id: streams.length + 1,
      name: data.name,
      status: 'preparing',
      viewers: 0,
      duration: '00:00:00',
      quality: data.quality,
      bitrate: `${data.bitrate} kbps`,
      createdAt: new Date().toLocaleString('tr-TR'),
    }
    setStreams((prev) => [...prev, newObj])
    setShowAddModal(false)
    setNewStream({ name: '', description: '', quality: '1080p', bitrate: '5000', isPublic: true })
  }

  const updateStream = (id: number, data: Partial<Stream>) => {
    setStreams((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...data } : s))
    )
    setShowEditModal(false)
    setSelectedStream(null)
  }

  const deleteStream = (id: number) => {
    if (window.confirm('Bu yayını silmek istediğinizden emin misiniz?')) {
      setStreams((prev) => prev.filter((s) => s.id !== id))
    }
  }

  const startStream = (id: number) => {
    setStreams((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'live' } : s))
    )
  }

  const stopStream = (id: number) => {
    setStreams((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'finished' } : s))
    )
  }

  return {
    streams,
    filteredStreams,
    showAddModal,
    setShowAddModal,
    showEditModal,
    setShowEditModal,
    selectedStream,
    setSelectedStream,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    newStream,
    setNewStream,
    createStream,
    updateStream,
    deleteStream,
    startStream,
    stopStream,
  }
}
