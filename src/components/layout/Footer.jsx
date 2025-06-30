import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-dark text-light border-t border-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">EventFlow</h3>
          <p className="text-sm text-gray-400">Your ultimate platform for managing, discovering, and joining events that matter to you.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/events" className="hover:text-primary">Events</Link></li>
            <li><Link href="/add-event" className="hover:text-primary">Add Event</Link></li>
            <li><Link href="/login" className="hover:text-primary">Login</Link></li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-primary"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-primary"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-primary"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-light pt-4">
        © {new Date().getFullYear()} EventFlow. All rights reserved.
      </div>
    </footer>
  );
} 