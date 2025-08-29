"use client";
import Link from "next/link";
import { useState } from "react";
import { Bell, Upload, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [query, setQuery] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // UI toggle

    return (
        <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 shadow-md">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold text-red-600 text-outline-white tracking-wide hover:scale-105 transition-transform">
                    MyTube
                </span>

            </Link>

            {/* Search Bar */}
            <div className="flex items-center w-1/2 max-w-xl">
                <div className="flex w-full">
                    <input
                        type="text"
                        placeholder="Search videos..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <button className="flex items-center justify-center px-4 bg-red-600 text-white rounded-r-full hover:bg-red-700 transition-colors">
                        <Search size={18} />
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5">
                <Link href="/upload">
                    <button className="flex gap-2 items-center px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors">
                        <Upload size={18} /> <span className="hidden sm:inline">Upload</span>
                    </button>
                </Link>

                <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Bell size={22} />
                    {/* Notification dot */}
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full"></span>
                </button>

                {isLoggedIn ? (
                    <div className="relative">
                        <Image
                            src="/profile.png" // replace with user avatar
                            alt="profile"
                            width={38}
                            height={38}
                            className="rounded-full cursor-pointer border border-gray-300 dark:border-gray-700 hover:scale-105 transition-transform"
                        />
                    </div>
                ) : (
                    <Link href="/login">
                        <button className="px-5 py-2 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition-colors">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
}
