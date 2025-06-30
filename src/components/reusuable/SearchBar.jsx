"use client";

export default function SearchBar() {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search events by title..."
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring focus:border-primary"
      />
    </div>
  );
} 