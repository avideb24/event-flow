"use client";

import Link from "next/link";
import { FaUserCircle, FaBars, FaTimes, FaHome, FaCalendarAlt, FaPlusCircle, FaListAlt } from "react-icons/fa";
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Simulate login state for UI purposes
  const isLoggedIn = false; // Change to true to show profile dropdown
  const userName = "John Doe";

  return (
    <nav className="w-full bg-dark text-light sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Website Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img src="/window.svg" alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">EventFlow</span>
            </Link>
          </div>

          {/* Navigation Links - Hidden on small screens */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 hover:text-primary transition-colors"><FaHome /> Home</Link>
            <Link href="/events" className="flex items-center gap-2 hover:text-primary transition-colors"><FaCalendarAlt /> Events</Link>
            <Link href="/add-event" className="flex items-center gap-2 hover:text-primary transition-colors"><FaPlusCircle /> Add Event</Link>
            <Link href="/my-events" className="flex items-center gap-2 hover:text-primary transition-colors"><FaListAlt /> My Events</Link>
          </div>

          {/* Auth Button / Profile Dropdown - Hidden on small screens */}
          <div className="hidden md:block">
            {!isLoggedIn ? (
              <Link href="/login" className="px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
                Sign In
              </Link>
            ) : (
              <div className="relative group">
                <FaUserCircle className="h-8 w-8 text-primary cursor-pointer" />
                <div className="absolute right-0 mt-2 w-48 bg-gray-dark border border-gray-light rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
                  <div className="px-4 py-2 text-sm text-light font-semibold border-b border-gray-light">{userName}</div>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-light">Logout</button>
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link href="/" className="flex items-center gap-2 py-2 hover:text-primary transition-colors"><FaHome /> Home</Link>
            <Link href="/events" className="flex items-center gap-2 py-2 hover:text-primary transition-colors"><FaCalendarAlt /> Events</Link>
            <Link href="/add-event" className="flex items-center gap-2 py-2 hover:text-primary transition-colors"><FaPlusCircle /> Add Event</Link>
            <Link href="/my-events" className="flex items-center gap-2 py-2 hover:text-primary transition-colors"><FaListAlt /> My Events</Link>
            {!isLoggedIn ? (
              <Link href="/login" className="mt-4 px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
                Sign In
              </Link>
            ) : (
              <div className="mt-4 flex flex-col items-center border-t border-gray-light w-full pt-4">
                 <FaUserCircle className="h-8 w-8 text-primary" />
                 <div className="pt-2 text-sm text-light font-semibold">{userName}</div>
                 <button className="mt-2 w-full text-center py-2 text-sm hover:bg-gray-light">Logout</button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
} 