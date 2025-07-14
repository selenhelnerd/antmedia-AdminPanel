// src/components/Users/UsersFilters.tsx
import React from 'react';
import { Search, Filter, Download } from 'lucide-react';

type Props = {
  searchTerm: string;
  onSearch: (value: string) => void;
  statusFilter: 'all' | 'active' | 'inactive';
  onStatusChange: (value: 'all' | 'active' | 'inactive') => void;
  onFilterClick?: () => void;
  onDownloadClick?: () => void;
};

const UsersFilters: React.FC<Props> = ({
  searchTerm,
  onSearch,
  statusFilter,
  onStatusChange,
  onFilterClick,
  onDownloadClick,
}) => {
  return (
    <div className="bg-white mx-6 mt-6 rounded-lg shadow-sm border">
      <div className="p-4 border-b">
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Kullanıcı ara..."
              value={searchTerm}
              onChange={e => onSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={e => onStatusChange(e.target.value as 'all' | 'active' | 'inactive')}
            className="px-4 py-2 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">Tüm Durumlar</option>
            <option value="active">Aktif</option>
            <option value="inactive">Pasif</option>
          </select>

          {/* Utility buttons */}
          <button
            onClick={onFilterClick}
            className="p-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            title="Gelişmiş Filtre"
          >
            <Filter size={20} />
          </button>
          <button
            onClick={onDownloadClick}
            className="p-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            title="Dışa Aktar"
          >
            <Download size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersFilters;
