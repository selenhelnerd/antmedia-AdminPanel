// src/components/AdminPanel/Streams/StreamsPanel.tsx

import React from 'react'
import { Search, Filter, Download, Plus } from 'lucide-react'
import { useStreams } from '../../../hooks/useStreams'
import StreamRow from './StreamRow'
import AddStreamModal from './AddStreamModal'
import EditStreamModal from './EditStreamModal'

const StreamsPanel: React.FC = () => {
  const {
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
  } = useStreams()

  return (
    <div className="p-6">
      {/* Başlık ve Yeni Yayın Butonu */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Yayınlar</h2>
          <p className="text-gray-600">Tüm yayınları yönetin</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Yeni Yayın
        </button>
      </div>

      {/* Filtre ve Arama */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Yayın ara..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as 'all' | 'live' | 'finished' | 'preparing')
                }
              >
                <option value="all">Tüm Durumlar</option>
                <option value="live">Canlı</option>
                <option value="finished">Tamamlandı</option>
                <option value="preparing">Hazırlanıyor</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 border rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
              </button>
              <button className="p-2 border rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Yayın Tablosu */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Yayın
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İzleyici
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Süre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kalite
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Oluşturma
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStreams.map((stream) => (
                <StreamRow
                  key={stream.id}
                  stream={stream}
                  onStart={startStream}
                  onStop={stopStream}
                  onEdit={(s) => {
                    setSelectedStream(s)
                    setShowEditModal(true)
                  }}
                  onDelete={deleteStream}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modallar */}
      <AddStreamModal
        show={showAddModal}
        newStream={newStream}
        setNewStream={setNewStream}
        onClose={() => setShowAddModal(false)}
        onCreate={createStream}
      />
      <EditStreamModal
        show={showEditModal}
        selectedStream={selectedStream}
        setSelectedStream={setSelectedStream}
        onUpdate={updateStream}
        onClose={() => setShowEditModal(false)}
      />
    </div>
  )
}

export default StreamsPanel
