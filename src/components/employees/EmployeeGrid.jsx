import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";
import EmployeeCard from "./EmployeeCard";

export default function EmployeesGrid({ employees }) {
  return (
    <AnimatePresence mode="wait">
      {employees.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {employees.map((emp, index) => (
            <motion.div
              key={emp.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
            >
              <EmployeeCard emp={emp} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="bg-gray-100 dark:bg-gray-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users size={48} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No employees found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Try adjusting your search or filter to see more results.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
