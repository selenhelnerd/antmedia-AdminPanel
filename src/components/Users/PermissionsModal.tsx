import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import type { User, Permission } from '../../types/user';
import { PERMISSIONS } from '../../utils/constants';

interface Props {
  user: User;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (permissions: Permission[]) => void;
}

const PermissionsModal: React.FC<Props> = ({ user, isOpen, onClose, onSubmit }) => {
  const [selectedPermissions, setSelectedPermissions] = useState<Permission[]>([]);

  useEffect(() => {
    if (isOpen) {
      setSelectedPermissions(user.permissions);
    }
  }, [isOpen, user.permissions]);

  const togglePermission = (perm: Permission) => {
    setSelectedPermissions(prev =>
      prev.includes(perm)
        ? prev.filter(p => p !== perm)
        : [...prev, perm]
    );
  };

  const handleSave = () => {
    onSubmit(selectedPermissions);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Kullanıcı Yetkileri</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {PERMISSIONS.map(permission => (
            <div key={permission.id} className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  checked={selectedPermissions.includes(permission.id)}
                  onChange={() => togglePermission(permission.id)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="ml-3">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  {permission.label}
                  {selectedPermissions.includes(permission.id) && (
                    <Check className="ml-2 w-4 h-4 text-green-600" />
                  )}
                </label>
                <p className="text-xs text-gray-500">{permission.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            İptal
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionsModal;
