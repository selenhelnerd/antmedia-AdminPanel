// src/components/AdminPanel/Dashboard/DashboardCard.tsx

import React from 'react'

export interface DashboardCardProps {
  title: string
  value: string | number | React.ReactNode
  icon: React.ElementType
  iconBg: string
  iconColor: string
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon: Icon,
  iconBg,
  iconColor,
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${iconBg}`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div className="ml-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
)

export default DashboardCard
