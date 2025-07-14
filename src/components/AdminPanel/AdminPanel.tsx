// src/components/AdminPanel/AdminPanel.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard/Dashboard';
import StreamsPanel from './Streams/StreamsPanel';
import ApplicationPanel from './Application/ApplicationPanel';
import UsersPanel from '../Users/UsersPanel';

const AdminPanel: React.FC = () => (
  <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <div className="flex-1 overflow-auto">
      <Header />
      <main className="flex-1 p-4">
        <Routes>
          {/* /dashboard altında index: */}
          <Route index element={<Dashboard />} />

          {/* Diğer sekmeler: */}
          <Route path="applications" element={<ApplicationPanel />} />
          <Route path="streams"      element={<StreamsPanel />} />
          <Route path="users"        element={<UsersPanel />} />

          
        </Routes>
      </main>
    </div>
  </div>
);

export default AdminPanel;
