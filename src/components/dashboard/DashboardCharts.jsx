import { motion } from "framer-motion";
import { Users, BarChart3 } from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#ef4444", "#f59e0b", "#10b981"];

export default function DashboardCharts({
  taskStatusData,
  tasksPerEmployee,
  totalTasks,
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* PIE CHART */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <BarChart3 className="text-indigo-600" size={24} />
            Task Status Distribution
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {totalTasks} total tasks
          </span>
        </div>

        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={taskStatusData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60}
              paddingAngle={5}
              dataKey="value"
            >
              {taskStatusData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      {/* BAR CHART */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <Users className="text-purple-600" size={24} />
            Tasks per Employee
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={tasksPerEmployee}
            margin={{ top: 10, right: 10, left: 10, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="tasks" radius={[8, 8, 0, 0]}>
              {tasksPerEmployee.map((_, index) => (
                <Cell key={index} fill={COLORS[index % 3]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
