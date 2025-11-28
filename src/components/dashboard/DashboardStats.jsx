import { motion } from "framer-motion";
import { Users, CheckSquare, TrendingUp, PieChart } from "lucide-react";

export default function DashboardStats({
  employees,
  tasks,
  completed,
  completionRate,
}) {
  const stats = [
    {
      title: "Total Employees",
      value: employees,
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      title: "Total Tasks",
      value: tasks,
      icon: CheckSquare,
      gradient: "from-purple-500 to-indigo-500",
      delay: 0.2,
    },
    {
      title: "Completed Tasks",
      value: completed,
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      title: "Completion Rate",
      value: `${completionRate}%`,
      icon: PieChart,
      gradient: "from-orange-500 to-red-500",
      delay: 0.4,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((stat) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: stat.delay }}
          whileHover={{ scale: 1.03 }}
          className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-90`}
          />
          <div className="relative p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-90">{stat.title}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <stat.icon size={28} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </motion.div>
      ))}
    </div>
  );
}
