import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function EmployeesHeader({ total, visible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <Users className="text-indigo-600" />
            Employees
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage and view all team members ({total} total)
          </p>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          {visible} of {total} shown
        </div>
      </div>
    </motion.div>
  );
}
