import { useMemo } from "react";
import employeesData from "../data/employees.json";
import tasksData from "../data/tasks.json";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardStats from "../components/dashboard/DashboardStats";
import DashboardCharts from "../components/dashboard/DashboardCharts";

export default function Dashboard() {
  const employees = employeesData;
  const tasks = tasksData;

  const completedTasks = tasks.filter((t) => t.status === "Completed").length;
  const completionRate =
    tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

  // Pie Chart Data
  const taskStatusData = useMemo(() => {
    const map = { Pending: 0, "In Progress": 0, Completed: 0 };
    tasks.forEach((t) => {
      map[t.status] += 1;
    });
    return Object.entries(map).map(([status, count]) => ({
      name: status,
      value: count,
    }));
  }, [tasks]);

  // Bar Chart Data
  const tasksPerEmployee = useMemo(() => {
    const map = {};
    tasks.forEach((t) => {
      const name = t.assignedTo || "Unassigned";
      map[name] = (map[name] || 0) + 1;
    });

    return Object.entries(map)
      .map(([name, count]) => ({ name, tasks: count }))
      .sort((a, b) => b.tasks - a.tasks)
      .slice(0, 8);
  }, [tasks]);

  return (
    <div className="p-6 lg:p-8 dark:bg-gray-900 min-h-screen">
      <DashboardHeader />

      <DashboardStats
        employees={employees.length}
        tasks={tasks.length}
        completed={completedTasks}
        completionRate={completionRate}
      />

      <DashboardCharts
        taskStatusData={taskStatusData}
        tasksPerEmployee={tasksPerEmployee}
        totalTasks={tasks.length}
      />
    </div>
  );
}
