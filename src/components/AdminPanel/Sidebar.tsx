// src/components/AdminPanel/Sidebar.tsx

import React from 'react'
import {
  Users,
  Radio,
  BarChart3
} from 'lucide-react'

export type Tab = 'dashboard' | 'applications' |'streams' | 'users' 

interface SidebarProps {
  activeTab: Tab
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => (
  <div className="w-64 bg-gray-900 text-white min-h-screen">
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white">Ant Media</h1>
      <p className="text-gray-400 text-sm">Admin Panel</p>
    </div>

    <nav className="mt-8">
      <div className="px-6 py-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Ana Menü
        </p>
      </div>

      <button
        onClick={() => setActiveTab('dashboard')}
        className={`w-full flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
          activeTab === 'dashboard'
            ? 'bg-gray-800 text-white border-r-4 border-blue-500'
            : ''
        }`}
      >
        <BarChart3 className="w-5 h-5 mr-3" />
        Dashboard
      </button>

      <button
        onClick={() => setActiveTab('applications')}
        className={`w-full flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
          activeTab === 'applications'
            ? 'bg-gray-800 text-white border-r-4 border-blue-500'
            : ''
        }`}
      >
        <Users className="w-5 h-5 mr-3" />
        Applications
      </button>

      <button
        onClick={() => setActiveTab('streams')}
        className={`w-full flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
          activeTab === 'streams'
            ? 'bg-gray-800 text-white border-r-4 border-blue-500'
            : ''
        }`}
      >
        <Radio className="w-5 h-5 mr-3" />
        Yayınlar
      </button>

      <button
        onClick={() => setActiveTab('users')}
        className={`w-full flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
          activeTab === 'users'
            ? 'bg-gray-800 text-white border-r-4 border-blue-500'
            : ''
        }`}
      >
        <Users className="w-5 h-5 mr-3" />
        Kullanıcılar
      </button>

      

      
    </nav>
  </div>
)

export default Sidebar
