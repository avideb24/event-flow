"use client";

import EventForm from "../../components/page-comp/EventForm";
import { FaCalendarPlus } from "react-icons/fa";

export default function AddEventPage() {
  

  return (
    <main className="min-h-screen bg-light dark:bg-dark py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
            <FaCalendarPlus size={30} />
          </div>
          <h1 className="text-3xl font-bold">Create New Event</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Fill in the details below to create your event
          </p>
        </div>
        <EventForm />
      </div>
    </main>
  );
}
