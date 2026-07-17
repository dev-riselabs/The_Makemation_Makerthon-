import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Dashboard({ isSidebarOpen, setIsSidebarOpen }: { isSidebarOpen: boolean, setIsSidebarOpen: (v: boolean) => void }) {
  return (
    <main className="flex-grow flex w-full h-full overflow-hidden relative">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-grow bg-bg-primary p-6 md:p-8 w-full overflow-y-auto">
        <Outlet />
      </div>
    </main>
  );
}
