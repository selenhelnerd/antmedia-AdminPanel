// src/components/AdminPanel/Dashboard/Dashboard.tsx

import React from 'react'
import {
  Radio,
  Activity,
  Eye,
  Clock
} from 'lucide-react'
import DashboardCard from './DashboardCard'
import { useStreams } from '../../../hooks/useStreams'
import { getStatusColor, getStatusText } from '../../../utils/streamUtils'

const Dashboard: React.FC = () => {
  const { streams } = useStreams()

  const totalStreams = streams.length
  const liveCount = streams.filter(s => s.status === 'live').length
  const totalViewers = streams
    .reduce((sum, s) => sum + s.viewers, 0)
    .toLocaleString()


  const averageDuration = '1.5h'

  return (
    <div className="p-6">
      {/* Başlık */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600">Ant Media Server genel bakış</p>
      </div>

      {/* Genel Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Toplam Yayın"
          value={totalStreams}
          icon={Radio}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
        />
        <DashboardCard
          title="Canlı Yayın"
          value={liveCount}
          icon={Activity}
          iconBg="bg-green-100"
          iconColor="text-green-600"
        />
        <DashboardCard
          title="Toplam İzleyici"
          value={totalViewers}
          icon={Eye}
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
        />
        <DashboardCard
          title="Ortalama Süre"
          value={averageDuration}
          icon={Clock}
          iconBg="bg-orange-100"
          iconColor="text-orange-600"
        />
      </div>

      {/* Alt Bölümler */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Son Yayınlar */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-medium text-gray-900">Son Yayınlar</h3>
          </div>
          <div className="p-6 space-y-4">
            {streams.slice(0, 3).map(stream => (
              <div
                key={stream.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Radio className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {stream.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {stream.createdAt}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                    stream.status
                  )}`}
                >
                  {getStatusText(stream.status)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sistem Durumu */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-medium text-gray-900">Sistem Durumu</h3>
          </div>
          <div className="p-6 space-y-4">
            {/* CPU */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">CPU Kullanımı</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: '45%' }}
                />
              </div>
            </div>
            {/* Bellek */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Bellek Kullanımı</span>
                <span className="text-sm font-medium">62%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: '62%' }}
                />
              </div>
            </div>
            {/* Disk */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Disk Kullanımı</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full"
                  style={{ width: '78%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
