import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  LayoutDashboard,
  Image,
  Upload,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/media", icon: Image, label: "Media Library" },
    { path: "/upload", icon: Upload, label: "Upload" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Sidebar (Mobile Overlay + Desktop Fixed) */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-gray-800 bg-background transition-transform duration-300 ease-in-out md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-xl font-bold"
            onClick={() => setSidebarOpen(false)}
          >
            <Cloud className="h-6 w-6" />
            K0MPLEXINARY
          </Link>

          {/* Close button (mobile only) */}
          <button
            className="md:hidden text-foreground hover:text-muted-foreground"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
            >
              <Button
                variant={isActive(item.path) ? "secondary" : "ghost"}
                className="w-full justify-start gap-3"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 w-64 p-4 border-t border-gray-800">
          <div className="mb-3 px-3">
            <div className="font-medium text-sm">{user?.name}</div>
            <div className="text-xs text-muted-foreground">{user?.email}</div>
          </div>
          <Button className="w-full justify-start gap-3" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Overlay (for mobile sidebar) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar (Mobile Only) */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-800 bg-background/80 backdrop-blur px-4 py-3 md:hidden">
          <button
            className="text-foreground hover:text-muted-foreground"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <div className="w-5" /> {/* Spacer */}
        </header>

        {/* Scrollable main content */}
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
};
