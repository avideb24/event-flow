"use client";

export default function FilterOptions() {
  return (
    <div className="flex flex-wrap gap-2 mb-6 items-center">
      <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-xs hover:bg-primary hover:text-white transition-colors">Today</button>
      <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-xs hover:bg-primary hover:text-white transition-colors">Current Week</button>
      <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-xs hover:bg-primary hover:text-white transition-colors">Last Week</button>
      <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-xs hover:bg-primary hover:text-white transition-colors">Current Month</button>
      <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-xs hover:bg-primary hover:text-white transition-colors">Last Month</button>
      <input type="date" className="ml-2 px-2 py-1 border border-gray-300 dark:border-gray-700 rounded text-xs" />
      <span className="text-xs">to</span>
      <input type="date" className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded text-xs" />
    </div>
  );
} 