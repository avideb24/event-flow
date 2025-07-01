"use client";

import { useEffect, useState } from "react";
import EventCard from "../../components/page-comp/EventCard";
import { FaSearch } from "react-icons/fa";
import {
  startOfToday,
  startOfWeek,
  endOfWeek,
  subWeeks,
  startOfMonth,
  endOfMonth,
  subMonths,
} from "date-fns";
import { getAllEvents } from "@/lib/events";

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");
  const [events, setEvents] = useState([]);
  const [displayEvents, setDisplayEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getAllEvents();
      setEvents(res?.data || []);
      // displayEvents(res?.data || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getDateRange = (filter) => {
      const today = new Date();
      switch (filter) {
        case "today":
          return {
            start: new Date(today.setHours(0, 0, 0, 0)),
            end: new Date(today.setHours(23, 59, 59, 999)),
          };
        case "currentWeek":
          return { start: startOfWeek(today), end: endOfWeek(today) };
        case "lastWeek":
          return {
            start: startOfWeek(subWeeks(today, 1)),
            end: endOfWeek(subWeeks(today, 1)),
          };
        case "currentMonth":
          return { start: startOfMonth(today), end: endOfMonth(today) };
        case "lastMonth":
          return {
            start: startOfMonth(subMonths(today, 1)),
            end: endOfMonth(subMonths(today, 1)),
          };
        default:
          return null;
      }
    };

    let filtered = [...events];

    if (searchTerm) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (dateFilter !== "all") {
      const range = getDateRange(dateFilter);
      if (range) {
        filtered = filtered.filter((event) => {
          const eventDate = new Date(event.date_time);
          return eventDate >= range.start && eventDate <= range.end;
        });
      }
    }

    if (customStartDate && customEndDate) {
      const start = new Date(customStartDate);
      const end = new Date(customEndDate);
      filtered = filtered.filter((event) => {
        const eventDate = new Date(event.date_time);
        return eventDate >= start && eventDate <= end;
      });
    }

    // Sort descending by date_time
    filtered.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));

    setDisplayEvents(filtered);
  }, [searchTerm, dateFilter, customStartDate, customEndDate, events]);

  return (
    <main className="min-h-screen bg-light dark:bg-dark py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">All Events</h1>

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

        {loading ? (
          <div className="py-20 text-center">Loading...</div>
        ) : (
          <>
            {/* Events Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>

            {/* No Results Message */}
            {displayEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No events found matching your criteria.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
