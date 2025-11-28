import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setDarkMode(!darkMode)}
      className="relative p-2.5 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-md"
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
    >
      <motion.div
        key={darkMode ? "moon" : "sun"}
        initial={{ rotate: darkMode ? -180 : 180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: darkMode ? 180 : -180, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        {darkMode ? (
          <Sun size={20} className="text-yellow-500" />
        ) : (
          <Moon size={20} className="text-indigo-600" />
        )}
      </motion.div>
    </motion.button>
  );
}
