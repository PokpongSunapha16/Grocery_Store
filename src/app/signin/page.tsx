"use client";

import { useRouter } from 'next/navigation';

export default function SignIn() {
    const router = useRouter();

    const handleSignIn = () => {
        // Navigate to home after sign in
        router.push('/home');
    };

    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center bg-white shadow-md p-10 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Sign In</h1>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSignIn}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Sign In
          </button>
          <p className="mt-4 text-gray-600">
            Don’t have an account? <a href="/signup" className="text-blue-500 underline">Sign Up</a>
          </p>
        </div>
      </div>
    );
}