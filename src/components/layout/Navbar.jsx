"use client";

import Link from "next/link";
import {
  FaUserCircle,
  FaBars,
  FaTimes,
  FaHome,
  FaCalendarAlt,
  FaPlusCircle,
  FaListAlt,
} from "react-icons/fa";
import { useState } from "react";
import { useUser } from "@/provider/UserProvider";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logout } = useUser();

  //  nav data
  const navLinks = [
    { label: "Home", href: "/", icon: <FaHome /> },
    { label: "Events", href: "/events", icon: <FaCalendarAlt /> },
    { label: "Add Event", href: "/add-event", icon: <FaPlusCircle /> },
    { label: "My Events", href: "/my-events", icon: <FaListAlt /> },
  ];

  console.log(user);

  return (
    <nav className="w-full bg-dark text-light sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img src="/window.svg" alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">EventFlow</span>
            </Link>
          </div>

          {/* Navigation Links - Hidden on small screens */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span className="pb-1 text-xl">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Button / Profile Dropdown */}
          <div className="hidden md:block">
            {!user ? (
              <Link
                href="/login"
                className="px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
              >
                Sign In
              </Link>
            ) : (
              <div className="relative group">
                {user?.photoUrl ? (
                  <Image
                    src={user?.photoUrl}
                    alt="profile_pic"
                    className="w-12 h-12 object-cover rounded-full "
                    width={0}
                    height={0}
                  />
                ) : (
                  <FaUserCircle className="h-8 w-8 text-primary cursor-pointer" />
                )}

                <div className="absolute -bottom-[70px] right-0 mt-2 w-48 bg-gray-dark border border-gray-light rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
                  <div className="px-4 py-2 text-sm text-light font-semibold border-b border-gray-light">
                    {user?.name}
                  </div>
                  <button
                    onClick={() => logout()}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-light"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 py-2 hover:text-primary transition-colors"
              >
                {link.icon} {link.label}
              </Link>
            ))}

            {!user ? (
              <Link
                href="/login"
                className="mt-4 px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
              >
                Sign In
              </Link>
            ) : (
              <div className="mt-4 flex flex-col items-center border-t border-gray-light w-full pt-4">
                {user?.photoUrl ? (
                  <Image
                    src={user?.photoUrl}
                    alt="profile_pic"
                    className="w-8 h-8 object-cover rounded-full "
                    width={0}
                    height={0}
                  />
                ) : (
                  <FaUserCircle className="h-8 w-8 text-primary cursor-pointer" />
                )}
                <div className="pt-2 text-sm text-light font-semibold">
                  {user?.name}
                </div>
                <button className="mt-2 w-full text-center py-2 text-sm hover:bg-gray-light">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
