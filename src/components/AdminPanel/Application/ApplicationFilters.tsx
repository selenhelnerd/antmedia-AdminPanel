// src/components/Application/ApplicationFilters.tsx
import React, { FC, ChangeEvent } from 'react'

import { useApplications } from '../../../hooks/useApplications'
interface ApplicationFiltersProps {
  onSearch?: (term: string) => void
}

const ApplicationFilters: FC<ApplicationFiltersProps> = ({ onSearch }) => {
  const { searchTerm, setSearchTerm } = useApplications()

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    onSearch?.(term)
  }

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Uygulama adı veya kullanıcı ara..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
      </div>
    </div>
  )
}

export default ApplicationFilters
