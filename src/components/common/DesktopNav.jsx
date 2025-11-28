import { Link, useLocation } from "react-router-dom";
import { Home, Users, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

const ICONS = { Home, Users, CheckSquare };

export default function DesktopNav({ navItems }) {
  const location = useLocation();

  return (
    <div className="hidden md:flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = location.pathname === item.to;
        const Icon = ICONS[item.icon];

        return (
          <Link
            key={item.to}
            to={item.to}
            className="relative px-5 py-3 rounded-xl text-sm font-medium flex items-center gap-2.5 group transition"
          >
            <Icon
              size={18}
              className="text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 transition"
            />

            <span
              className={
                isActive
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
              }
            >
              {item.label}
            </span>

            {/* Active Indicator */}
            {isActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl -z-10"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
