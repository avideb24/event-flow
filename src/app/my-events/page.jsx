"use client";

import { useState } from 'react';
import MyEventCard from '@/components/page-comp/MyEventCard';
import Modal from '@/components/reusuable/Modal';
import EventForm from '@/components/page-comp/EventForm';

export default function MyEvents() {
  const [events, setEvents] = useState([
    // Temporary mock data - replace with actual data from your backend
    {
      id: 1,
      title: "Tech Conference 2024",
      organizer: "John Doe",
      date: "2024-03-15",
      time: "10:00",
      location: "Convention Center",
      description: "A conference about emerging technologies",
      attendeeCount: 150
    }
  ]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleUpdate = (event) => {
    setSelectedEvent(event);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (event) => {
    setSelectedEvent(event);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setEvents(events.filter(event => event.id !== selectedEvent.id));
    setIsDeleteModalOpen(false);
    setSelectedEvent(null);
  };

  const handleUpdateSubmit = (updatedEventData) => {
    setEvents(events.map(event => 
      event.id === selectedEvent.id ? { ...event, ...updatedEventData } : event
    ));
    setIsUpdateModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">My Events</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map(event => (
          <MyEventCard
            key={event.id}
            event={event}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Delete"
      >
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Are you sure you want to delete this event? This action cannot be undone.
          </p>
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {/* Update Event Modal */}
      <Modal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        title="Update Event"
      >
        {selectedEvent && (
          <EventForm
            initialData={selectedEvent}
            onSubmit={handleUpdateSubmit}
            submitLabel="Update Event"
          />
        )}
      </Modal>

      {events.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">You haven't created any events yet.</p>
        </div>
      )}
    </main>
  );
} 