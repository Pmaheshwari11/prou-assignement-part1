import { motion } from "framer-motion";

export default function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
        Dashboard Overview
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Welcome back! Here's what's happening with your workforce today.
      </p>
    </motion.div>
  );
}
