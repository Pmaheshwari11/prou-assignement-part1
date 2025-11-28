import { Search, X } from "lucide-react";

export default function TasksFilters({
  search,
  setSearch,
  priority,
  setPriority,
  priorities,
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-8">
      {/* Search */}
      <div className="relative flex-1 max-w-2xl">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <X size={20} className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Priority */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
      >
        {priorities.map((p) => (
          <option key={p} value={p}>
            {p === "All" ? "All Priorities" : p}
          </option>
        ))}
      </select>
    </div>
  );
}
