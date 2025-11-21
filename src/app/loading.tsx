'use client';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-700">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-sky-500 border-opacity-50 mb-6"></div>
      <h2 className="text-xl font-semibold mb-2">Chargement en cours…</h2>
      <p className="text-center text-sm text-gray-500 max-w-md">
        We are facing a small delay while preparing everything for you. Thank you for your patience!
      </p>
    </div>
  );
};

export default Loading;