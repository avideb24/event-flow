"use client";

import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUser, FaUsers } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';

export default function EventCard({ event, onJoin }) {
  const {
    title,
    createdBy,
    date,
    time,
    location,
    description,
    attendeeCount,
    hasJoined
  } = event;

  const eventDateTime = new Date(`${date}T${time}`);
  const timeAgo = formatDistanceToNow(eventDateTime, { addSuffix: true });

  return (
    <div className="bg-white dark:bg-gray-dark rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
      {/* Card Header */}
      <div className="p-6 pb-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <FaUser className="mr-2" />
          <span>Posted by {createdBy}</span>
          <span className="mx-2">•</span>
          <span>{timeAgo}</span>
        </div>
        
        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <FaCalendarAlt className="mr-2" />
            <span>{new Date(date).toLocaleDateString()}</span>
            <FaClock className="ml-4 mr-2" />
            <span>{new Date(`2000-01-01T${time}`).toLocaleTimeString([], { timeStyle: 'short' })}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="mr-2" />
            <span>{location}</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description.length > 150 ? `${description.substring(0, 150)}...` : description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex items-center justify-between">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <FaUsers className="mr-2" />
          <span>{attendeeCount} {attendeeCount === 1 ? 'Attendee' : 'Attendees'}</span>
        </div>
        <button
          onClick={() => onJoin(event.id)}
          disabled={hasJoined}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            hasJoined
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary-dark'
          }`}
        >
          {hasJoined ? 'Joined' : 'Join Event'}
        </button>
      </div>
    </div>
  );
} 