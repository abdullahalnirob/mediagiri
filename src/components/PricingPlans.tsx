import React from 'react';
import {
  Video,
  MessageSquare,
  Database,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

export default function PricingPlans() {
  return (
    <section className="w-full px-6 min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        <div className="px-10">
          <h1 className="text-white my-10 font-bold text-center text-xl md:text-5xl">
            Pricing Plans
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Version */}
          <div className="relative bg-gray-900 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 text-gray-100">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <RiVerifiedBadgeFill size={90} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Verified Partner</h2>
              <p className="text-sm text-gray-200">
                The Verified Partner plan offers essential tools to get started
                confidently.
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-gray-200 ml-2">/ month</span>
              </div>
            </div>
            <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Pro Version - Gold Partner */}
          <div className="relative rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
            {/* Gold Gradient Background */}
            <div className="absolute inset-0 bg-yellow-500/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <RiVerifiedBadgeFill size={90} className="text-yellow-300" />
                </div>
                <h2 className="text-2xl text-white font-bold mb-2">
                  Gold Partner
                </h2>
                <p className="text-sm text-gray-100">
                  The Gold Partner plan gives you complete access to all premium
                  features.
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl text-white font-bold">$59</span>
                  <span className="text-gray-100 ml-2">/ month</span>
                </div>
              </div>
              <button className="w-12 h-12 text-amber-600 hover:text-amber-700 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110 shadow-lg">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
