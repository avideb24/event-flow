"use client";

import AuthForm from "../../components/reusuable/AuthForm";
import { FaUserPlus } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-light dark:bg-dark py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
            <FaUserPlus size={30} />
          </div>
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Join us to start hosting and discovering amazing events
          </p>
        </div>
        <AuthForm mode="register" />
      </div>
    </main>
  );
} 