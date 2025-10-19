import { ReactNode } from "react";
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
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

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
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800">
        <div className="p-6 border-b border-gray-800">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-xl font-bold"
          >
            <Cloud className="h-6 w-6" />
            K0MPLEXINARY
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
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

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};
