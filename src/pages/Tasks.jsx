import { useMemo, useState } from "react";
import tasksData from "../data/tasks.json";
import employeesData from "../data/employees.json";
import TasksHeader from "../components/tasks/TasksHeader";
import TasksFilters from "../components/tasks/TasksFilters";
import TasksColumn from "../components/tasks/TasksColumn";

const STATUSES = ["Pending", "In Progress", "Completed"];
const PRIORITIES = ["All", "Critical", "High", "Medium", "Low"];

const priorityConfig = {
  critical: { color: "bg-red-100 text-red-700", dot: "bg-red-500" },
  high: { color: "bg-orange-100 text-orange-700", dot: "bg-orange-500" },
  medium: { color: "bg-yellow-100 text-yellow-700", dot: "bg-yellow-500" },
  low: { color: "bg-blue-100 text-blue-700", dot: "bg-blue-500" },
};

const labelColors = {
  design: "bg-purple-100 text-purple-700",
  backend: "bg-indigo-100 text-indigo-700",
  bug: "bg-red-100 text-red-700",
  feature: "bg-green-100 text-green-700",
  ux: "bg-pink-100 text-pink-700",
  devops: "bg-cyan-100 text-cyan-700",
  urgent: "bg-rose-100 text-rose-700",
  security: "bg-violet-100 text-violet-700",
};

export default function Tasks() {
  const [tasks, setTasks] = useState(tasksData);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [draggedTask, setDraggedTask] = useState(null);

  // Avatar Map
  const avatarMap = useMemo(() => {
    const map = {};
    employeesData.forEach((emp) => {
      map[emp.name] =
        emp.avatar ||
        emp.name
          .split(" ")
          .map((n) => n[0])
          .join("");
    });
    return map;
  }, []);

  // Filters
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description?.toLowerCase().includes(search.toLowerCase());

      const matchesPriority =
        priorityFilter === "All" ||
        task.priority?.toLowerCase() === priorityFilter.toLowerCase();

      return matchesSearch && matchesPriority;
    });
  }, [tasks, search, priorityFilter]);

  // Group by Status
  const tasksByStatus = useMemo(() => {
    const map = { Pending: [], "In Progress": [], Completed: [] };
    filteredTasks.forEach((t) => map[t.status].push(t));
    return map;
  }, [filteredTasks]);

  // Drag & Drop Logic
  const handleDragStart = (e, task) => {
    setDraggedTask(task);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (!draggedTask) return;

    setTasks((prev) =>
      prev.map((t) =>
        t.id === draggedTask.id ? { ...t, status: newStatus } : t
      )
    );
    setDraggedTask(null);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="p-6 lg:p-8 dark:bg-gray-900 min-h-screen">
      <TasksHeader total={tasks.length} />

      <TasksFilters
        search={search}
        setSearch={setSearch}
        priority={priorityFilter}
        setPriority={setPriorityFilter}
        priorities={PRIORITIES}
      />

      {/* Kanban Board */}
      <div className="grid gap-6 lg:grid-cols-3">
        {STATUSES.map((status) => (
          <TasksColumn
            key={status}
            status={status}
            tasks={tasksByStatus[status]}
            draggedTask={draggedTask}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragStart={handleDragStart}
            avatarMap={avatarMap}
            priorityConfig={priorityConfig}
            labelColors={labelColors}
          />
        ))}
      </div>
    </div>
  );
}
