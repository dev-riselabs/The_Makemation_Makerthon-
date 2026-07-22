import { HiOutlineEnvelope } from 'react-icons/hi2';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { TbSettings2 } from 'react-icons/tb';
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
              <TbSettings2 className='w-5 h-5' />
            </button>
            <button className="text-text-primary hover:opacity-70 transition-opacity relative">
             <HiOutlineEnvelope className='w-5 h-5' />
              <div className="absolute top-0 right-0 w-2 h-2 bg-icon-blue rounded-full border border-bg-primary"></div>
            </button>
            <button className="text-text-primary hover:opacity-70 transition-opacity relative">
              <IoIosNotificationsOutline className='w-5 h-5' />
              <div className="absolute top-0 right-0 w-2 h-2 bg-icon-blue rounded-full border border-bg-primary"></div>
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
