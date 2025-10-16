'use client';

import type React from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Form submitted:', {
      firstName,
      lastName,
      email,
      password,
      agreedToTerms,
    });
  };

  return (
    <div className="flex min-h-screen bg-[#6B6B7E]">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 m-8 relative">
        <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-green-500 via-[#6B5DD3] to-[#5A4BC4]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/serene-mountain-landscape-at-dusk-with-purple-sky.png"
              alt="Mountain landscape"
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative h-full flex flex-col justify-between p-12">
            {/* Logo and Back Button */}
            <div className="flex items-start justify-between">
              <div className="text-white text-3xl font-bold tracking-tight">
                MEDIAGIRI
              </div>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 rounded-full px-4"
              >
                Back to website
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Bottom Text and Pagination */}
            <div className="space-y-6">
              <h2 className="text-white text-4xl font-light leading-tight text-balance">
                Capturing Moments,
                <br />
                Creating Memories
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="flex-1 flex items-center m-10 justify-center">
        <div className="w-full max-w-md bg-[#2D2D3A] rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-white text-4xl font-light tracking-tight">
                Create an account
              </h1>
              <p className="text-gray-400 text-sm">
                Already have an account?{' '}
                <a href="/login" className="text-white hover:underline">
                  Log in
                </a>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="bg-[#3A3A4A] border-[#4A4A5A] text-white placeholder:text-gray-500 h-12 rounded-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="bg-[#3A3A4A] border-[#4A4A5A] text-white placeholder:text-gray-500 h-12 rounded-lg"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-[#3A3A4A] border-[#4A4A5A] text-white placeholder:text-gray-500 h-12 rounded-lg"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2 relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="bg-[#3A3A4A] border-[#4A4A5A] text-white placeholder:text-gray-500 h-12 rounded-lg pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={checked =>
                    setAgreedToTerms(checked as boolean)
                  }
                  className="border-[#4A4A5A] data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-400 cursor-pointer"
                >
                  I agree to the{' '}
                  <a href="/terms" className="text-white hover:underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
              >
                Create account
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#4A4A5A]" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-[#2D2D3A] px-2 text-gray-400">
                    Or register with
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 bg-transparent border-[#4A4A5A] text-white hover:bg-[#3A3A4A] rounded-lg"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 bg-transparent border-[#4A4A5A] text-white hover:bg-[#3A3A4A] rounded-lg"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Apple
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
