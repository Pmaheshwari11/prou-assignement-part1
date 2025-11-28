import { motion } from "framer-motion";
import { format, isPast, isToday } from "date-fns";
import { GripVertical, AlertCircle, Calendar } from "lucide-react";
export default function TaskCard({
  task,
  avatarMap,
  priorityConfig,
  labelColors,
  onDragStart,
  index,
}) {
  const priority =
    priorityConfig[task.priority?.toLowerCase()] || priorityConfig.medium;
  const isOverdue =
    task.dueDate &&
    isPast(new Date(task.dueDate)) &&
    task.status !== "Completed";
  const isDueToday = task.dueDate && isToday(new Date(task.dueDate));

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05 }}
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all cursor-grab active:cursor-grabbing border border-gray-200 dark:border-gray-700 p-5"
      whileDrag={{ scale: 1.05, zIndex: 50 }}
    >
      {/* Drag Handle */}
      <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition">
        <GripVertical size={18} className="text-gray-400" />
      </div>

      {/* Priority Badge */}
      {task.priority && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${priority.color} mb-3`}
        >
          <div className={`w-2 h-2 rounded-full ${priority.dot}`} />
          {task.priority}
        </div>
      )}

      <h4 className="font-semibold text-gray-800 dark:text-white mb-2 pr-6">
        {task.title}
      </h4>

      {task.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Labels */}
      {task.labels && task.labels.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {task.labels.slice(0, 3).map((label) => (
            <span
              key={label}
              className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                labelColors[label] || "bg-gray-100 text-gray-700"
              }`}
            >
              {label}
            </span>
          ))}
          {task.labels.length > 3 && (
            <span className="text-xs text-gray-500">
              +{task.labels.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Assignee */}
          {task.assignedTo ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {avatarMap[task.assignedTo] || "U"}
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {task.assignedTo.split(" ")[0]}
              </span>
            </div>
          ) : (
            <div className="text-xs text-gray-500 italic">Unassigned</div>
          )}

          {/* Due Date */}
          {task.dueDate && (
            <div
              className={`flex items-center gap-1 text-xs font-medium ${
                isOverdue
                  ? "text-red-600"
                  : isDueToday
                  ? "text-orange-600"
                  : "text-gray-500"
              }`}
            >
              <Calendar size={14} />
              {format(new Date(task.dueDate), "MMM d")}
              {isOverdue && <AlertCircle size={14} className="ml-1" />}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
