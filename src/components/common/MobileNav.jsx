import { Link, useLocation } from "react-router-dom";
import { X, Home, Users, CheckSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ICONS = { Home, Users, CheckSquare };

export default function MobileNav({ isOpen, onClose, navItems }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Slide Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Menu
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X size={24} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex-1 px-6 py-8 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                const Icon = ICONS[item.icon];

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={onClose}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all ${
                      isActive
                        ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 font-semibold shadow"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <Icon size={22} />
                    <span className="text-lg">{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-2 h-2 bg-indigo-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
              © 2025 SWMS
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
