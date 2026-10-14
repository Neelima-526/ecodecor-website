import React from 'react';
import About from '../components/About';
import { Leaf, Shield, Award, Sparkles, Heart, Users, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#faf7f2] min-h-screen">
      {/* Main About Hero & Component */}
      <About />

      {/* Startup Story & Impact Principles */}
      <section className="py-16 bg-[#faf7f2] border-t border-[#d2e4d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              Our Core Sustainability Pillars
            </h3>
            <p className="text-sm text-[#385746] font-medium">
              Built by college students for college students to transform how events are celebrated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-3xl border border-[#d2e4d8] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#eaf5ee] text-[#1b4332] flex items-center justify-center font-bold">
                🌱
              </div>
              <h4 className="text-lg font-bold text-[#1b4332]">100% Single-Use Plastic Free</h4>
              <p className="text-xs text-[#526358] leading-relaxed font-medium">
                We replace non-biodegradable plastic foil banners, balloons, and disposable single-use plastic props with durable bamboo, organic cotton, wood, and brass.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#d2e4d8] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#eaf5ee] text-[#1b4332] flex items-center justify-center font-bold">
                🎓
              </div>
              <h4 className="text-lg font-bold text-[#1b4332]">Designed for Student Budgets</h4>
              <p className="text-xs text-[#526358] leading-relaxed font-medium">
                College events and hostel celebrations shouldn't break the bank. Rental model provides premium aesthetics at up to 70% lower cost than purchasing new decor.
              </p>
            </div>

            <div className="bg-[#1b4332] text-white p-8 rounded-3xl border border-[#52b788] shadow-md space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#52b788] text-[#1b4332] flex items-center justify-center font-bold">
                🧼
              </div>
              <h4 className="text-lg font-bold text-white">Deep Cleaning & Sanitization</h4>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                Every single item in our totes undergoes strict steam cleaning and eco-friendly sanitization after every return, ensuring fresh, hygienic decor for every user.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-white p-8 rounded-3xl border border-[#d2e4d8] text-center space-y-4">
            <h4 className="text-xl font-extrabold text-[#1b4332]">Have a College Event or Function Coming Up?</h4>
            <p className="text-xs text-[#526358] max-w-lg mx-auto">
              Browse our theme kits or book your custom setup in minutes.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link to="/kits" className="px-6 py-3 rounded-full bg-[#1b4332] text-white text-xs font-bold shadow-md hover:bg-[#143326]">
                Explore Decoration Kits
              </Link>
              <Link to="/booking" className="px-6 py-3 rounded-full border border-[#1b4332] text-[#1b4332] text-xs font-bold hover:bg-[#eaf5ee]">
                Request Booking
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
