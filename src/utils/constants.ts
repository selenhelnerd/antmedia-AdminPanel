import type { Role, Permission } from '../types/user';

export const ROLES: { value: Role; label: string; color: string }[] = [
  { value: 'admin',  label: 'Admin',  color: 'bg-red-100 text-red-800'   },
  { value: 'editor', label: 'Editor', color: 'bg-blue-100 text-blue-800' },
  { value: 'viewer', label: 'Viewer', color: 'bg-green-100 text-green-800'},
];

export const PERMISSIONS: { id: Permission; label: string; description: string }[] = [
  { id: 'view_streams',    label: 'Yayınları Görüntüle',   description: 'Canlı yayınları izleyebilir'     },
  { id: 'manage_streams',  label: 'Yayın Yönetimi',        description: 'Yayınları başlatıp durdurabilir'   },
  { id: 'manage_users',    label: 'Kullanıcı Yönetimi',    description: 'Kullanıcı ekleyip düzenleyebilir' },
  { id: 'system_settings', label: 'Sistem Ayarları',       description: 'Sistem ayarlarını değiştirebilir' },
  { id: 'analytics',       label: 'Analitik',              description: 'Raporları görüntüleyebilir'       },
];
