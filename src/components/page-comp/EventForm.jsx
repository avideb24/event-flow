"use client";

import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaHeading,
  FaUsers,
  FaAlignLeft,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { addNewEvent, updateEvent } from "@/lib/events";
import { useRouter } from "next/navigation";

export default function EventForm({ initialData,setIsUpdateModalOpen }) {
  // console.log({ initialData });
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    organizer_name: initialData?.name || "",
    date: initialData?.date_time
      ? new Date(initialData.date_time).toISOString().split("T")[0]
      : "",
    time: initialData?.date_time
      ? new Date(initialData.date_time).toISOString().split("T")[1].slice(0, 5)
      : "",
    location: initialData?.location || "",
    description: initialData?.description || "",
    attendee_count: initialData?.attendee_count || 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "attendee_count" ? Number(value) : value,
    }));
  };

  // Combine date and time to ISO string for API
  const getDateTimeISO = () => {
    if (!formData.date || !formData.time) return "";
    return new Date(`${formData.date}T${formData.time}`).toISOString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      name: formData.organizer_name,
      date_time: getDateTimeISO(),
      location: formData.location,
      description: formData.description,
      attendee_count: formData.attendee_count,
    };

    const { data, error } = initialData?._id
      ? await updateEvent(initialData._id, payload)
      : await addNewEvent(payload);

    if (error) {
      toast.error(error);
    } else {
      toast.success(
        initialData?._id
          ? "Event updated successfully!"
          : "Event created successfully!"
      );
      
      if(initialData?._id){
        setIsUpdateModalOpen(false)
        window.location.reload()
      } else{
        router.push("/my-events");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-dark border border-gray-200 dark:border-gray-light rounded-lg shadow-lg p-8"
    >
      {/* Event Title */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Event Title
        </label>
        <div className="relative">
          <FaHeading className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="title"
            placeholder="Enter event title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
      </div>

      {/* Organizer Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Organizer Name
        </label>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="organizer_name"
            placeholder="Enter organizer name"
            value={formData.organizer_name}
            onChange={handleChange}
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
      </div>

      {/* Date and Time - Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Date
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Time
          </label>
          <div className="relative">
            <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
              required
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Location
        </label>
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="location"
            placeholder="Enter event location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Description
        </label>
        <div className="relative">
          <FaAlignLeft className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="description"
            placeholder="Enter event description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary resize-none"
            required
          />
        </div>
      </div>

      {/* Attendee Count */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Initial Attendee Count
        </label>
        <div className="relative">
          <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="number"
            name="attendee_count"
            placeholder="0"
            min="0"
            value={formData.attendee_count}
            onChange={handleChange}
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary disabled:bg-gray-300"
            disabled={!initialData?._id}
            
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
