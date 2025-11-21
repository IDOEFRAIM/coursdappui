'use client';
import React, { useState } from 'react';
import { TextInput, Label, HelperText, Button } from 'flowbite-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    setError('');
    setSuccess(false);

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    try {
      // Replace with real API call
      await new Promise((r) => setTimeout(r, 900));
      setSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-extrabold text-sky-600">Reset your password</h1>
        <p className="mt-2 text-sm text-gray-500">
          Enter the email linked to your account. We&apos;ll send you a secure link to reset your password.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="email">Email address</Label>
          <TextInput
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            color={touched && error ? 'failure' : undefined}
          />
          {touched && error && (
            <HelperText color="failure">{error}</HelperText>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold"
          disabled={submitting}
        >
          {submitting ? 'Sending...' : 'Send reset link'}
        </Button>

        {success && (
          <div
            role="status"
            aria-live="polite"
            className="mt-2 rounded-md bg-green-50 border border-green-100 p-3 text-sm text-green-700"
          >
            A recovery link has been sent to <strong>{email}</strong>. Check your inbox and spam folder.
          </div>
        )}
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        Remembered your password?{' '}
        <Link href="/login" className="text-sky-600 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}