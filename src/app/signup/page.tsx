"use client";

import { useRouter } from 'next/navigation';

export default function SignUp() {
    const router = useRouter();

    const handleSignUp = () => {
        // หลังจากสมัครสมาชิกสำเร็จ เปลี่ยนหน้าไปยัง home หรือ sign in
        router.push('/signin');
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="text-center bg-white shadow-md p-10 rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
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
                    onClick={handleSignUp}
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                >
                    Sign Up
                </button>
                <p className="mt-4 text-gray-600">
                    Already have an account? <a href="/signin" className="text-blue-500 underline">Sign In</a>
                </p>
            </div>
        </div>
    );
}
