import { useState } from "react";
import { Building2, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DEPARTMENTS = ["Engineering", "Design", "Marketing", "Sales", "HR"];

export default function EmployeesFilter({ value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all"
      >
        <Filter size={20} className="text-gray-600 dark:text-gray-400" />
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {value || "All Departments"}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-10"
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full mt-2 right-0 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-20"
            >
              <button
                onClick={() => {
                  onChange("");
                  setOpen(false);
                }}
                className={`w-full text-left px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-3 ${
                  !value
                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400"
                    : ""
                }`}
              >
                All Departments
              </button>

              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => {
                    onChange(dept);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-3 ${
                    value === dept
                      ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <Building2 size={16} />
                  {dept}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
