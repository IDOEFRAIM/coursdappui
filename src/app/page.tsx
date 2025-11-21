'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function GeneralHome() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-sky-600 leading-tight">
              EduTrack — Digitize your tutoring administration
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A simple, secure platform for tutoring organizations to manage students, grades,
              attendance and performance analytics — all in one place.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => router.push('/students')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 text-white text-base font-medium shadow hover:bg-sky-700"
              >
                Get started
              </button>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 text-gray-700 bg-white hover:bg-gray-50"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:ml-8 flex-shrink-0">
            <div className="relative w-[320px] h-[220px] sm:w-[420px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-sky-50 to-white">
              <Image
                src="/illustration-edu.svg"
                alt="Illustration"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">What EduTrack offers</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-sky-600">Student Management</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Create and maintain student profiles, import lists, and group students by class or
              program.
            </p>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-sky-600">Grades & Reports</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Record grades, add appreciations, and generate class or student reports in seconds.
            </p>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-sky-600">Analytics</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Visualize averages, pass rates and trends to make data-driven decisions for your
              programs.
            </p>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-sky-600">Attendance</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Track attendance per session, export records and follow up with absent students.
            </p>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-sky-600">Secure Access</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Role-based access for admins, teachers and staff to protect sensitive student data.
            </p>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-sky-600">Export & Integrations</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Export lists and reports, and connect with your existing tools via APIs (coming soon).
            </p>
          </article>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-sky-50 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-sky-600">1,200+</div>
            <div className="mt-2 text-sm text-gray-600">Students managed</div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-sky-600">95%</div>
            <div className="mt-2 text-sm text-gray-600">Average attendance rate</div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-sky-600">4.8</div>
            <div className="mt-2 text-sm text-gray-600">Average satisfaction</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready to digitize your tutoring admin?</h3>
            <p className="mt-2 text-sm opacity-90">
              Start a free trial, import your student lists and see how much time you can save.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => router.push('/register')}
              className="px-6 py-3 bg-white text-sky-700 rounded-lg font-semibold shadow hover:opacity-95"
            >
              Start free trial
            </button>

            <Link
              href="/contact"
              className="px-6 py-3 border border-white/30 rounded-lg text-white hover:bg-white/10"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} EduTrack. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-sky-600">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-sky-600">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-sky-600">
              Contact:+212 0782901759
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}