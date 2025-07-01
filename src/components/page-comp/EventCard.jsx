"use client";

import { joinEvent } from "@/lib/events";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaUsers,
} from "react-icons/fa";

export default function EventCard({ event }) {
  const {
    title,
    location,
    date_time,
    description,
    attendee_count,
    hasJoined,
    user_id,
  } = event;

  const utcDateStr = date_time;
  const bdDateTime = new Date(utcDateStr).toLocaleString("en-GB", {
    timeZone: "Asia/Dhaka",
    hour12: false,
  });
  const [count, setCount] = useState(attendee_count);
  const [date, time] = bdDateTime.split(", ");

  const handleJoinEvent = async (eventId) => {
    // console.log(eventId);
    
    const res = await joinEvent(eventId);
    // console.log(res);
    if(res?.data?.event_id){
      toast.success('Joined successfully');
       setCount((prev) => prev + 1);
    }
    else{
      toast.error(res?.error && "You already joined");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-dark rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
      {/* Card Header */}
      <div className="p-6 pb-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <FaUser className="mr-2" />
          <span>Posted by {user_id?.name}</span>
        </div>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <FaCalendarAlt className="mr-2" />
            <span>{date}</span>
            <FaClock className="ml-4 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="mr-2" />
            <span>{location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description.length > 150
            ? `${description.substring(0, 150)}...`
            : description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex items-center justify-between">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <FaUsers className="mr-2" />
          <span>
            {count} {count === 1 ? "Attendee" : "Attendees"}
          </span>
        </div>
        <button
          onClick={() => handleJoinEvent(event._id)}
          disabled={hasJoined}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            hasJoined
              ? "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed"
              : "bg-primary text-white hover:bg-primary-dark"
          }`}
        >
          {hasJoined ? "Joined" : "Join Event"}
        </button>
      </div>
    </div>
  );
}
