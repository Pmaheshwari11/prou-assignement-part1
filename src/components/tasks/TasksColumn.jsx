import { AnimatePresence } from "framer-motion";
import TaskCard from "./TaskCard";
import TasksEmptyState from "./TasksEmptyState";

export default function TasksColumn({
  status,
  tasks,
  draggedTask,
  onDrop,
  onDragOver,
  onDragStart,
  avatarMap,
  priorityConfig,
  labelColors,
}) {
  return (
    <div
      onDrop={(e) => onDrop(e, status)}
      onDragOver={onDragOver}
      className={`rounded-2xl bg-gray-50/70 dark:bg-gray-800/50 border-2 border-dashed ${
        draggedTask ? "border-indigo-400/50" : "border-transparent"
      } p-6 min-h-[600px]`}
    >
      {/* Column Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {status}
        </h3>
        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium">
          {tasks.length}
        </span>
      </div>

      {/* Tasks */}
      <div className="space-y-4">
        <AnimatePresence>
          {tasks.length === 0 ? (
            <TasksEmptyState status={status} draggedTask={draggedTask} />
          ) : (
            tasks.map((task, idx) => (
              <TaskCard
                key={task.id}
                task={task}
                index={idx}
                onDragStart={onDragStart}
                avatarMap={avatarMap}
                priorityConfig={priorityConfig}
                labelColors={labelColors}
              />
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
