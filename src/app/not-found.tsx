'use client';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        <div className="mx-auto w-40 h-40 mb-6">
          {/* Simple friendly illustration */}
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="120" height="120" rx="20" fill="#E6F6FF"/>
            <path d="M30 80c8-12 20-18 30-18s22 6 30 18" stroke="#0369A1" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="45" cy="50" r="6" fill="#0369A1"/>
            <circle cx="75" cy="50" r="6" fill="#0369A1"/>
            <path d="M45 68c6 6 18 6 24 0" stroke="#0369A1" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold text-sky-600 mb-3">Wow — you discovered a hidden page</h1>

        <p className="text-gray-600 mb-6">
          We’re glad you found this spot, but the page you were looking for doesn’t exist or has moved.
          It might be best to return to the homepage and continue from there.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="inline-block">
            <span className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg font-medium shadow hover:bg-sky-700">
              Go back to Home
            </span>
          </Link>

          <Link href="https://wa.me/+2120782901759" className="inline-block">
            <span className="inline-flex items-center px-6 py-3 border border-gray-200 text-gray-700 rounded-lg bg-white hover:bg-gray-50">
              Contact support
            </span>
          </Link>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          If you think this is an error, please let us know so we can fix it.
        </p>
      </div>
    </main>
  );
}