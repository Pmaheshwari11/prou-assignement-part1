import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export const navItems = [
  { to: "/", label: "Dashboard", icon: "Home" },
  { to: "/employees", label: "Employees", icon: "Users" },
  { to: "/tasks", label: "Tasks", icon: "CheckSquare" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // ✅ Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition">
              S
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              SWMS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav navItems={navItems} />

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Menu size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE NAV ================= */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
