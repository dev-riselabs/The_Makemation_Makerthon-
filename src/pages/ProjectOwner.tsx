import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function ProjectOwner({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (v: boolean) => void;
}) {
  return (
    // <main className="flex-1 flex min-h-0">
    //   {/* Sidebar */}
    //   <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

    //   {/* Main Content Area */}
    //   <div className="flex-1 min-h-0 overflow-y-auto p-6 ">
    //     <Outlet />
    //   </div>
    // </main>
    <main className="flex-1 flex min-h-0 w-full h-full overflow-hidden relative">
          {/* Sidebar */}
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    
          {/* Main Content Area */}
          <div className="flex-1 min-h-0 bg-bg-primary p-6 md:p-8 md:pb-20 w-full overflow-y-auto">
            <Outlet />
          </div>
        </main>
  );
}

export default ProjectOwner;
