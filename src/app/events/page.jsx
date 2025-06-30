"use client";

import { useState } from 'react';
import EventCard from "../../components/page-comp/EventCard";
import { FaSearch } from 'react-icons/fa';
import { startOfToday, startOfWeek, endOfWeek, subWeeks, startOfMonth, endOfMonth, subMonths } from 'date-fns';

// Dummy data for demonstration
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

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');

  // Filter functions
  const getDateRange = (filter) => {
    const today = new Date();
    switch (filter) {
      case 'today':
        return { start: startOfToday(), end: new Date() };
      case 'currentWeek':
        return { start: startOfWeek(today), end: endOfWeek(today) };
      case 'lastWeek':
        return {
          start: startOfWeek(subWeeks(today, 1)),
          end: endOfWeek(subWeeks(today, 1))
        };
      case 'currentMonth':
        return { start: startOfMonth(today), end: endOfMonth(today) };
      case 'lastMonth':
        return {
          start: startOfMonth(subMonths(today, 1)),
          end: endOfMonth(subMonths(today, 1))
        };
      default:
        return null;
    }
  };

  const filterEvents = () => {
    let filtered = [...dummyEvents];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Date filter
    if (dateFilter !== 'all') {
      const range = getDateRange(dateFilter);
      if (range) {
        filtered = filtered.filter(event => {
          const eventDate = new Date(event.date);
          return eventDate >= range.start && eventDate <= range.end;
        });
      }
    }

    // Custom date range filter
    if (customStartDate && customEndDate) {
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= new Date(customStartDate) && eventDate <= new Date(customEndDate);
      });
    }

    // Sort by date and time
    return filtered.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateB - dateA;
    });
  };

  const handleJoinEvent = (eventId) => {
    // This will be implemented with backend integration
    console.log(`Joined event: ${eventId}`);
  };

  const filteredEvents = filterEvents();

  return (
    <main className="min-h-screen bg-light dark:bg-dark py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-white dark:bg-gray-dark rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
              />
            </div>
            
            {/* Date Filter */}
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
            >
              <option value="all">All Events</option>
              <option value="today">Today</option>
              <option value="currentWeek">Current Week</option>
              <option value="lastWeek">Last Week</option>
              <option value="currentMonth">Current Month</option>
              <option value="lastMonth">Last Month</option>
            </select>
          </div>

          {/* Custom Date Range */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              value={customStartDate}
              onChange={(e) => setCustomStartDate(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
            />
            <input
              type="date"
              value={customEndDate}
              onChange={(e) => setCustomEndDate(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map(event => (
            <EventCard
              key={event.id}
              event={event}
              onJoin={handleJoinEvent}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No events found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
} 