// src/components/AdminPanel/AdminPanel.tsx

import React, { useState } from 'react'
import Sidebar, { Tab } from './Sidebar'
import Header from './Header'


import Dashboard from './Dashboard/Dashboard'
import StreamsPanel from './Streams/StreamsPanel'

import ApplicationPanel from './Application/ApplicationPanel'

import UsersPanel from '../Users/UsersPanel'

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'applications':
        return <ApplicationPanel />
      case 'streams':
        return <StreamsPanel />
      case 'users':
        return <UsersPanel />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 overflow-auto">
        <Header activeTab={activeTab} />
        <main className="flex-1">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default AdminPanel
