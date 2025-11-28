import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function TasksHeader({ total }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
            Tasks Board
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Drag tasks between columns • {total} total
          </p>
        </div>

        <button className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition shadow-lg">
          <Plus size={20} />
          New Task
        </button>
      </div>
    </motion.div>
  );
}
