import { useLocation } from 'react-router-dom';

export default function Header({ onMenuClick, isSidebarOpen }: { onMenuClick?: () => void, isSidebarOpen?: boolean }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/admin') || location.pathname.startsWith('/investor') ;

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-header-bg">
      <div className="flex items-center gap-4">
        {isDashboard && (
          <button onClick={onMenuClick} className="md:hidden text-text-primary hover:opacity-70 transition-opacity">
            {isSidebarOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        )}
        <img src="/dey_make_logo.png" alt="DeyMake Logo" className="h-10 object-contain" />
      </div>
      
      {isDashboard ? (
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5">
            <button className="text-text-primary hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </button>
            <button className="text-text-primary hover:opacity-70 transition-opacity relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-icon-blue rounded-full border border-bg-primary"></div>
            </button>
            <button className="text-text-primary hover:opacity-70 transition-opacity relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-icon-blue rounded-full border border-bg-primary"></div>
            </button>
          </div>
          
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/user.jpg" alt="Profile" className="h-10 w-10 rounded-full object-cover" />
            <div className="hidden md:block text-left">
              <h4 className="text-sm font-bold text-text-primary font-jost">Administration</h4>
              <p className="text-[10px] text-text-secondary font-medium">helloadministration@gmail.com</p>
            </div>
            <svg className="w-4 h-4 text-icon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/profile_image.png" alt="Profile" className="h-10 w-10 rounded-full object-cover" />
          <svg className="w-4 h-4 text-icon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}
    </header>
  );
}
