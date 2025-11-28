import { motion } from "framer-motion";
import { Tag } from "lucide-react";

export default function TasksEmptyState({ status, draggedTask }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12 text-gray-500 dark:text-gray-400"
    >
      <div className="bg-gray-200 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Tag size={32} />
      </div>
      <p className="text-sm">
        No tasks {status === "Pending" ? "yet" : "here"}
      </p>
      {draggedTask && <p className="text-xs mt-2">Drop to move</p>}
    </motion.div>
  );
}
