import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-border border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Cloud className="h-6 w-6" />
          CloudVault
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm hover:text-gray-500 transition-colors"
          >
            Features
          </a>
          <a
            href="#why-us"
            className="text-sm hover:text-gray-500 transition-colors"
          >
            Why Us
          </a>
          <a
            href="#testimonials"
            className="text-sm hover:text-gray-500 transition-colors"
          >
            Testimonials
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="hover:text-gray-500">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
