'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/register' },
  { label: 'Students', href: '/students' },
  { label: 'Courses', href: '/courses' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (pathname.startsWith(href) && href !== '/');

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-sky-600">
            EduTrack
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium ${
                  isActive(href)
                    ? 'text-sky-600 border-b-2 border-sky-600 pb-1'
                    : 'text-gray-600 hover:text-sky-600'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-600 hover:text-sky-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium ${
                isActive(href)
                  ? 'text-sky-600'
                  : 'text-gray-600 hover:text-sky-600'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}