'use client';

import React from 'react';
import EventCard from '../EventCard';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const dummyEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    createdBy: "John Doe",
    date: "2024-03-15",
    time: "09:00",
    location: "Convention Center",
    description: "Join us for the biggest tech conference of the year. Learn about the latest technologies and network with industry professionals.",
    attendeeCount: 45,
    hasJoined: false
  },
  // Add more dummy events as needed
];

export default function EventList() {
  const router = useRouter();

  // Show only the first 10 events
  const eventsToShow = dummyEvents.slice(0, 10);

  const handleJoinEvent = (eventId) => {
    // This will be implemented with backend integration
    // console.log(`Joined event: ${eventId}`);
  };

  return (
    <section className="py-8 px-4 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Events</h2>
          <Link href={'/events'}
            className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            View All Events
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventsToShow.map(event => (
            <EventCard
              key={event.id}
              event={event}
              onJoin={handleJoinEvent}
            />
          ))}
        </div>
        {eventsToShow.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No events available.</p>
          </div>
        )}
      </div>
    </section>
  );
} 