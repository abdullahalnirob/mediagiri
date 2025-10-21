import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Box, Diamond, Video, MessageSquare, Database, BarChart3, ArrowUpRight } from 'lucide-react';

export default function PricingPlans() {
  return (
    <section className="w-full min-h-screen bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <Button variant="outline" className="rounded-full px-6 py-6 bg-blue-400 text-white border-gray-300 hover:border-gray-400 transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            Schedule A Call
          </Button>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">
            Pricing Plans
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Version */}
          <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Box className="w-6 h-6 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Starter Version</h2>
              <p className="text-sm text-gray-600">Try VivaChat to test it in work</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-gray-900">$29</span>
                <span className="text-gray-500 ml-2">/ month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Video className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">Live Video Chat</span>
                </div>
                <span className="text-sm text-gray-500">Limited</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">ChatGPT 4.0 Integration</span>
                </div>
                <span className="text-sm text-gray-500">No</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Database className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">Data Retention</span>
                </div>
                <span className="text-sm text-gray-500">4 Months</span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">Customer Support Analytics</span>
                </div>
                <span className="text-sm text-gray-500">Basic</span>
              </div>
            </div>

            <button className="w-12 h-12 bg-blue-500 hover:bg-gray-800 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Pro Version */}
          <div className="relative rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
            {/* Gradient Background with Wave Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-200 to-blue-400">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 10px,
                  rgba(255, 255, 255, 0.3) 10px,
                  rgba(255, 255, 255, 0.3) 20px
                )`
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Diamond className="w-6 h-6 text-gray-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Pro Version</h2>
                <p className="text-sm text-gray-700">Get the full private access to all features</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">$59</span>
                  <span className="text-gray-700 ml-2">/ month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-gray-700/10">
                  <div className="flex items-center gap-3">
                    <Video className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-800">Live Video Chat</span>
                  </div>
                  <span className="text-sm text-gray-700">Unlimited</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-700/10">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-800">ChatGPT 4.0 Integration</span>
                  </div>
                  <span className="text-sm text-gray-700">Yes</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-700/10">
                  <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-800">Data Retention</span>
                  </div>
                  <span className="text-sm text-gray-700">1 Year</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-800">Customer Support Analytics</span>
                  </div>
                  <span className="text-sm text-gray-700">Advanced</span>
                </div>
              </div>

              <button className="w-12 h-12 bg-blue-400 hover:bg-gray-50 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110 shadow-lg">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}