import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Users } from 'lucide-react';

export default function VivaChatHero() {
  return (
    <section className="w-full min-h-screen bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Headline */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect Instantly, Communicate Effortlessly - VivaChat!
              </h1>
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <Globe className="w-5 h-5 text-gray-700" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <Users className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description & CTA */}
          <div className="space-y-6 lg:pt-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              Seamlessly bridge distances, spark dialogues, and elevate your communication game to a whole new level.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-800 text-white px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:shadow-lg group">
              Get Started
              <span className="ml-2 inline-flex items-center justify-center w-6 h-6 bg-white rounded-full group-hover:translate-x-1 transition-transform">
                <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Left Column - Large Image */}
          <div className="row-span-2">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop"
                alt="Customer service representative"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second Column - Two Images Stacked */}
          <div className="space-y-4">
            <div className="relative h-48 rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-900">Face-to-face</p>
                <p className="text-sm font-medium text-gray-900">experience</p>
              </div>
            </div>
            <div className="relative h-48 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
                alt="Person working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Third Column - Large Image */}
          <div className="row-span-2">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop"
                alt="Happy woman on phone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Fourth Column - Three Images Stacked */}
          <div className="space-y-4">
            <div className="relative h-32 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=200&fit=crop"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-32 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=200&fit=crop"
                alt="Professional woman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-32 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=200&fit=crop"
                alt="Smiling professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between mt-12 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span>© 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span>vivachat.com</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Terms Of Use</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Help Center</a>
          </div>
        </div>
      </div>
    </section>
  );
}