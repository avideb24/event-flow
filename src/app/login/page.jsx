"use client";


import AuthForm from "../../components/reusuable/AuthForm";
import { FaSignInAlt } from "react-icons/fa";

export default function LoginPage() {

  return (
    <div className="min-h-screen bg-light dark:bg-dark py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
            <FaSignInAlt size={30} />
          </div>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Sign in to continue to your account
          </p>
        </div>
        <AuthForm mode="login" />
      </div>
    </div>
  );
} 