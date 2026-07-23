import { GoProject } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuMessageCircleQuestion, LuUpload } from "react-icons/lu";
import { TfiHome } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const navItemsAdmin = [
    { name: "Overview", path: "/admin", icon: TfiHome },
    { name: "Project Room", path: "/admin/projects", icon: TfiHome },
    { name: "Makers", path: "/admin/makers", icon: TfiHome },
    { name: "Investors", path: "/admin/investors", icon: TfiHome },
    { name: "Investor Interest", path: "/admin/interest", icon: TfiHome },
    { name: "Message", path: "/admin/messages", icon: TfiHome },
  ];

  const navItemsProject = [
    { name: "My Project", path: "/project", icon: GoProject },
    { name: "Uploads", path: "/project/upload", icon: LuUpload },
    { name: "Message", path: "/project/message", icon: HiOutlineEnvelope },
    { name: "FAQs", path: "/project/faq", icon: LuMessageCircleQuestion },
  ];

  let arrLinks = isAdmin ? navItemsAdmin : navItemsProject;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 transform transition-transform duration-300 w-60 bg-header-bg shrink-0 flex flex-col py-8 border-r border-border-secondary h-full overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <nav className="flex flex-col gap-2 w-full p-4">
          {arrLinks.map(({ name, path, icon: Icon }) => {
            const isRoot = path === "/admin" || path === "/project";

            const isActive = isRoot
              ? location.pathname === path
              : location.pathname === path ||
                location.pathname.startsWith(`${path}/`);
            return (
              <Link
                key={name}
                to={path}
                onClick={() => onClose && onClose()}
                className={`flex items-center gap-3 px-6 py-3 transition-colors ${isActive ? "font-bold text-text-primary border-l-4 border-brand" : "font-medium text-text-secondary hover:text-text-primary border-l-4 border-transparent"}`}
              >
                <Icon className="w-4 h-4" />
                {name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
