// app/(connexion)/layout.tsx
import type { ReactNode } from 'react';
import Link from 'next/link';

export default function ConnexionLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Stepper only on large screens */}
        <aside className="hidden lg:flex flex-col w-1/3 bg-sky-50 border-r border-gray-200 p-6">
          <h2 className="text-xl font-bold text-sky-700 mb-6">Welcome to EduTrack</h2>
          <nav className="space-y-4 text-sm text-gray-700">
            <Step label="Login" href="/login" step={1} />
            <Step label="Register" href="/register" step={2} />
            <Step label="Forgot Password" href="/forgotPassword" step={3} />
          </nav>
        </aside>

        {/* Main content */}
        <main className="w-full lg:w-2/3 p-6">{children}</main>
      </div>
    </div>
  );
}

function Step({ label, href, step }: { label: string; href: string; step: number }) {
  return (
    <Link href={href} className="flex items-center gap-3 hover:text-sky-700 transition">
      <div className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs flex items-center justify-center font-semibold">
        {step}
      </div>
      <span>{label}</span>
    </Link>
  );
}