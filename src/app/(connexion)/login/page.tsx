'use client';
import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { TextInput, Label, HelperText, Button } from 'flowbite-react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ nom: '', prenom: '', password: '' });
  const [touched, setTouched] = useState({ nom: false, prenom: false, password: false });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(() => ({
    nom: !form.nom.trim() ? 'Last name is required' : '',
    prenom: !form.prenom.trim() ? 'First name is required' : '',
    password: !form.password ? 'Password is required' : '',
  }), [form]);

  const isValid = !errors.nom && !errors.prenom && !errors.password;

  const handleChange = (field: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleBlur = (field: keyof typeof touched) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ nom: true, prenom: true, password: true });
    if (!isValid) return;

    setSubmitting(true);
    try {
      // Replace with real login logic
      await new Promise((r) => setTimeout(r, 800));
      router.push('/students');
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-extrabold text-sky-600">Welcome back</h1>
        <p className="mt-2 text-sm text-gray-500">
          Sign in to manage your students and notes.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="nom">Last name</Label>
          <TextInput
            id="nom"
            placeholder="Enter your last name"
            value={form.nom}
            onChange={(e) => handleChange('nom', e.target.value)}
            onBlur={() => handleBlur('nom')}
            color={touched.nom && errors.nom ? 'failure' : undefined}
          />
          {touched.nom && errors.nom && (
            <HelperText color="failure">{errors.nom}</HelperText>
          )}
        </div>

        <div>
          <Label htmlFor="prenom">First name</Label>
          <TextInput
            id="prenom"
            placeholder="Enter your first name"
            value={form.prenom}
            onChange={(e) => handleChange('prenom', e.target.value)}
            onBlur={() => handleBlur('prenom')}
            color={touched.prenom && errors.prenom ? 'failure' : undefined}
          />
          {touched.prenom && errors.prenom && (
            <HelperText color="failure">{errors.prenom}</HelperText>
          )}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <TextInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => handleChange('password', e.target.value)}
              onBlur={() => handleBlur('password')}
              color={touched.password && errors.password ? 'failure' : undefined}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
            </button>
          </div>
          {touched.password && errors.password && (
            <HelperText color="failure">{errors.password}</HelperText>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold"
          disabled={!isValid || submitting}
        >
          {submitting ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <Link href="/forgotPassword" className="text-sky-600 hover:underline">
          Forgot your password?
        </Link>
        <span className="mx-2">·</span>
        <Link href="/register" className="text-sky-600 hover:underline">
          Create an account
        </Link>
      </div>
    </div>
  );
}