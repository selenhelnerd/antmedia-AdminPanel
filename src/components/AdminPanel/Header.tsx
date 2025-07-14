
// src/components/AdminPanel/Header.tsx

import React from 'react'
import { User } from 'lucide-react'
import { Tab } from './Sidebar'

interface HeaderProps {
  activeTab: Tab
}

const titles: Record<Tab, string> = {
  dashboard: 'Dashboard',
  applications : 'Applications',
  streams: 'Yayın Yönetimi',
  users: 'Kullanıcı Yönetimi',
  
  
}

const Header: React.FC<HeaderProps> = ({ activeTab }) => (
  <header className="bg-white shadow-sm border-b">
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-900">
          {titles[activeTab]}
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">Admin</p>
          <p className="text-xs text-gray-500">Yönetici</p>
        </div>
      </div>
    </div>
  </header>
)

export default Header
