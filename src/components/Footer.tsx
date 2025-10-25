'use client';

import React from 'react';
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaGlobe,
} from 'react-icons/fa';

export default function Footer() {
  const sections = [
    {
      title: 'Product',
      links: ['Overview', 'Features', 'Pricing', 'Integrations', 'API'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Press', 'Contact', 'Partners'],
    },
    {
      title: 'Resources',
      links: ['Docs', 'Support', 'Blog', 'Community', 'Developers'],
    },
    {
      title: 'Legal',
      links: ['Terms', 'Privacy', 'Cookie Policy', 'Security', 'Licenses'],
    },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, name: 'Twitter' },
    { icon: <FaInstagram />, name: 'Instagram' },
    { icon: <FaFacebook />, name: 'Facebook' },
    { icon: <FaYoutube />, name: 'YouTube' },
    { icon: <FaTiktok />, name: 'TikTok' },
  ];

  return (
    <footer className="bg-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="flex items-center text-3xl font-bold bg-gradient-to-r from-[#00c3ff] to-[#1e90ff] bg-clip-text text-transparent drop-shadow-lg mb-4">
                Mitcko
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering people and teams to connect, create, and innovate
                together.
              </p>
            </div>

            {/* Language Selector */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00c3ff]/40 backdrop-blur-md px-3 py-2 rounded-lg transition">
              <FaGlobe className="text-sm" />
              <select
                className="bg-transparent text-sm outline-none cursor-pointer text-white"
                defaultValue="en"
              >
                <option value="en" className="bg-gray-800">
                  English, USA
                </option>
                <option value="es" className="bg-gray-800">
                  Español
                </option>
                <option value="fr" className="bg-gray-800">
                  Français
                </option>
                <option value="de" className="bg-gray-800">
                  Deutsch
                </option>
                <option value="ja" className="bg-gray-800">
                  日本語
                </option>
              </select>
            </div>
          </div>

          {/* Footer Sections */}
          {sections.map(section => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-[#00c3ff] uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="relative block text-sm text-gray-300 hover:text-[#00c3ff] transition-transform duration-300 hover:translate-x-1"
                    >
                      <span className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-[#00c3ff] rounded-full opacity-0 hover:opacity-100 transition" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00c3ff]/40 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6 text-gray-400 text-xl">
            {socialLinks.map(social => (
              <a
                key={social.name}
                href="#"
                className="relative hover:text-[#00c3ff] transform hover:-translate-y-1 transition duration-300"
              >
                {social.icon}
                <span className="absolute inset-0 bg-gradient-radial from-[#00c3ff]/10 to-transparent opacity-0 hover:opacity-100 transition duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mitcko. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with ❤️ by the Mitcko team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
