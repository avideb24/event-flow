"use client";

import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser, FaHeading, FaUsers, FaAlignLeft } from 'react-icons/fa';

export default function EventForm() {
  return (
    <form className="bg-white dark:bg-gray-dark border border-gray-200 dark:border-gray-light rounded-lg shadow-lg p-8">
      {/* Event Title */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Event Title</label>
        <div className="relative">
          <FaHeading className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Enter event title"
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
      </div>

      {/* Organizer Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Organizer Name</label>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Enter organizer name"
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
      </div>

      {/* Date and Time - Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Date</label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Time</label>
          <div className="relative">
            <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="time"
              className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
              required
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Location</label>
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Enter event location"
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Description</label>
        <div className="relative">
          <FaAlignLeft className="absolute left-3 top-3 text-gray-400" />
          <textarea
            placeholder="Enter event description"
            rows={4}
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary resize-none"
            required
          ></textarea>
        </div>
      </div>

      {/* Attendee Count */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Initial Attendee Count</label>
        <div className="relative">
          <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="number"
            placeholder="0"
            min="0"
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
      >
        Add Event
      </button>
    </form>
  );
} 