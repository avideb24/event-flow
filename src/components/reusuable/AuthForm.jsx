"use client";

import { FaEnvelope, FaLock, FaUser, FaImage } from 'react-icons/fa';
import Link from 'next/link';

export default function AuthForm({ mode }) {
  return (
    <div className="w-full">
      <form className="bg-white dark:bg-gray-dark border border-gray-200 dark:border-gray-light rounded-lg shadow-lg p-8 flex flex-col gap-4">
        {mode === "register" && (
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:border-primary"
              required
            />
          </div>
        )}
        <div className="relative">
          <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="relative">
          <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:border-primary"
            required
          />
        </div>
        {mode === "register" && (
          <div className="relative">
            <FaImage className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Photo URL"
              className="w-full px-4 py-2 pl-10 bg-transparent border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:border-primary"
              required
            />
          </div>
        )}
        <button
          type="submit"
          className="mt-4 px-4 py-3 rounded bg-primary text-white font-bold hover:bg-primary-dark transition-colors text-lg w-full"
        >
          {mode === "register" ? "Register" : "Login"}
        </button>

        <div className="text-center mt-4 text-gray-600 dark:text-gray-400">
          {mode === "register" ? (
            <>
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline font-medium">
                Sign In
              </Link>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <Link href="/register" className="text-primary hover:underline font-medium">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </form>


    </div>
  );
} 