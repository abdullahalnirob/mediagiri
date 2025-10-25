'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BiSolidDonateHeart } from 'react-icons/bi';

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 top-0 left-0 right-0 w-full bg-gradient-to-r gray-color shadow-lg shadow-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-2xl tracking-tight">
                Mitcko
              </span>
            </div>
            <button className="hidden md:flex bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-md px-4 py-2 text-white text-sm font-medium transition-all items-center space-x-2">
              <p>Donate us</p> <BiSolidDonateHeart size={20}/>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#home"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#benefits"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
            >
              Benefit Review
            </a>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 px-6 py-2.5 rounded-lg text-white font-semibold shadow-lg shadow-sky-500/30 transition-all duration-300">
              Create Account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-in slide-in-from-top duration-300">
            <a
              href="#home"
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all font-medium"
            >
              About
            </a>
            <a
              href="#benefits"
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all font-medium"
            >
              Benefit Review
            </a>
            <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-3 text-white text-sm font-medium transition-all">
              Contact us
            </button>
            <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition-all">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;
