// src/components/Users/UserRow.tsx
import React from 'react';
import { Edit, Trash2, Shield } from 'lucide-react';
import type { User } from '../../types/user';
import { ROLES } from '../../utils/constants';

interface Props {
  user: User;
  onEdit: (user: User) => void;
  onPermissions: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserRow: React.FC<Props> = ({ user, onEdit, onPermissions, onDelete }) => {
  const roleInfo = ROLES.find(r => r.value === user.role);

  return (
    <tr className="hover:bg-gray-50">
      {/* Kullanıcı bilgisi */}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700">
                {user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>

      {/* Rol */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${roleInfo?.color}`}>
          {roleInfo?.label}
        </span>
      </td>

      {/* Durum */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          user.status === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {user.status === 'active' ? 'Aktif' : 'Pasif'}
        </span>
      </td>

      {/* Son Giriş */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.lastLogin}</td>

      {/* Oluşturulma */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.createdAt}</td>

      {/* İşlemler */}
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPermissions(user)}
            className="text-blue-600 hover:text-blue-900 p-1 hover:bg-blue-50 rounded"
            title="Yetkiler"
          >
            <Shield size={16} />
          </button>
          <button
            onClick={() => onEdit(user)}
            className="text-indigo-600 hover:text-indigo-900 p-1 hover:bg-indigo-50 rounded"
            title="Düzenle"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded"
            title="Sil"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
