"use client";

import { FaMapMarkerAlt, FaCalendarAlt, FaUserAlt, FaUsers } from 'react-icons/fa';
import { format } from 'date-fns';

export default function MyEventCard({ event, onUpdate, onDelete }) {
  const { title, name, date_time, location, description, attendee_count } = event;
  // console.log({event});

 const utcDateStr = date_time;
  const bdDateTime = new Date(utcDateStr).toLocaleString("en-GB", {
    timeZone: "Asia/Dhaka",
    hour12: false,
  });
  
  const [date, time] = bdDateTime.split(", ")

  return (
    <div className="bg-white dark:bg-gray-dark rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <FaUserAlt className="mr-2" />
            <span>{name}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <FaCalendarAlt className="mr-2" />
            <span>{date} at {time}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="mr-2" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <FaUsers className="mr-2" />
            <span>{attendee_count} Attendees</span>
          </div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => onUpdate(event)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Update
          </button>
          <button
            onClick={() => onDelete(event)}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
} 