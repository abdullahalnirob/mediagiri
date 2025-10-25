import React from 'react';
import {  Box, Diamond, Video, MessageSquare, Database, BarChart3, ArrowUpRight } from 'lucide-react';

export default function PricingPlans() {
  return (
    <section className="w-full px-6">
      <div className="max-w-6xl mx-auto">
        <div className="px-10">
          <h1 className="text-white my-10 font-bold text-center text-xl md:text-5xl">
            Pricing Plans
          </h1>
        </div>
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Version */}
          <div className="relative gray-color rounded-3xl p-8  hover:shadow-xl transition-all duration-300 text-gray-100">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Box className="w-6 h-6 text-gray-100" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Starter Version</h2>
              <p className="text-sm text-gray-200">
                Try VivaChat to test it in work
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-gray-200 ml-2">/ month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between py-3 border-b border-gray-100/20">
                <div className="flex items-center gap-3">
                  <Video className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-200">Live Video Chat</span>
                </div>
                <span className="text-sm text-gray-200">Limited</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100/20">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-200">
                    ChatGPT 4.0 Integration
                  </span>
                </div>
                <span className="text-sm text-gray-200">No</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100/20">
                <div className="flex items-center gap-3">
                  <Database className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-200">Data Retention</span>
                </div>
                <span className="text-sm text-gray-200">4 Months</span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-200">
                    Customer Support Analytics
                  </span>
                </div>
                <span className="text-sm text-gray-200">Basic</span>
              </div>
            </div>

            <button className="w-12 h-12 bg-blue-500 hover:bg-gray-800 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Pro Version */}
          <div className="relative rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
            {/* Gradient Background with Wave Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700">
              <div
                className="absolute inset-0 opacity-30"
                // style={{
                //   backgroundImage: `repeating-linear-gradient(
                //   0deg,
                //   transparent,
                //   transparent 10px,
                //   rgba(255, 255, 255, 0.3) 10px,
                //   rgba(255, 255, 255, 0.3) 20px
                // )`,
                // }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-white backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Diamond className="w-6 h-6 text-gray-900" />
                </div>
                <h2 className="text-2xl text-gray-200 font-bold mb-2">
                  Pro Version
                </h2>
                <p className="text-sm text-gray-200">
                  Get the full private access to all features
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl text-gray-200 font-bold">$59</span>
                  <span className="text-gray-200 ml-2">/ month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-gray-100/20">
                  <div className="flex items-center gap-3">
                    <Video className="w-4 h-4 text-gray-200" />
                    <span className="text-sm text-gray-200">
                      Live Video Chat
                    </span>
                  </div>
                  <span className="text-sm text-gray-200">Unlimited</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100/20">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-gray-200" />
                    <span className="text-sm text-gray-200">
                      ChatGPT 4.0 Integration
                    </span>
                  </div>
                  <span className="text-sm text-gray-200">Yes</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100/20">
                  <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-gray-200" />
                    <span className="text-sm text-gray-200">
                      Data Retention
                    </span>
                  </div>
                  <span className="text-sm text-gray-200">1 Year</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-4 h-4 text-gray-200" />
                    <span className="text-sm text-gray-200">
                      Customer Support Analytics
                    </span>
                  </div>
                  <span className="text-sm text-gray-200">Advanced</span>
                </div>
              </div>

              <button className="w-12 h-12  text-white hover:text-black bg-gray-900 hover:bg-gray-50 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110 shadow-lg">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}