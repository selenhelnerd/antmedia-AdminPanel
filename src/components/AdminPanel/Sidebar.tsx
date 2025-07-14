import React from 'react'
import { NavLink } from 'react-router-dom'
import { Users, Radio, BarChart3 } from 'lucide-react'

export type Tab = 'dashboard' | 'applications' | 'streams' | 'users'

const links: { to: string; label: string; icon: React.ReactNode }[] = [
  { to: '/dashboard',    label: 'Dashboard',    icon: <BarChart3 className="w-5 h-5 mr-3" /> },
  { to: '/dashboard/applications', label: 'Applications', icon: <Users     className="w-5 h-5 mr-3" /> },
  { to: '/dashboard/streams',      label: 'Yayınlar',      icon: <Radio     className="w-5 h-5 mr-3" /> },
  { to: '/dashboard/users',        label: 'Kullanıcılar',  icon: <Users     className="w-5 h-5 mr-3" /> },
]

const Sidebar: React.FC = () => (
  <div className="w-64 bg-gray-900 text-white min-h-screen">
    <div className="p-6">
      <h1 className="text-2xl font-bold">Ant Media</h1>
      <p className="text-gray-400 text-sm">Admin Panel</p>
    </div>

    <nav className="mt-8">
      <div className="px-6 py-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Ana Menü
        </p>
      </div>

      {links.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `w-full flex items-center px-6 py-3 transition-colors ${
              isActive
                ? 'bg-gray-800 text-white border-r-4 border-blue-500'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`
          }
        >
          {icon}
          {label}
        </NavLink>
      ))}
    </nav>
  </div>
)

export default Sidebar
