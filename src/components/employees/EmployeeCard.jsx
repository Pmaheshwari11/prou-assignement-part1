import { Briefcase } from "lucide-react";

export default function EmployeeCard({ emp }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {emp.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-lg dark:text-white">{emp.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Briefcase size={14} />
              {emp.role}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
            {emp.department}
          </span>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
}
