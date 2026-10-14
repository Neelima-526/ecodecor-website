import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyEcoDecor from '../components/WhyEcoDecor';
import { decorationKits, howItWorksSteps } from '../data/kitsData';
import { ArrowRight, Sparkles, Leaf, Eye, Box, Compass, CalendarCheck, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const iconMap = {
    Compass: Compass,
    Box: Box,
    CalendarCheck: CalendarCheck,
    RefreshCw: RefreshCw
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Quick About Teaser */}
      <section className="py-16 bg-white border-y border-[#d2e4d8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#faf7f2] p-8 sm:p-12 rounded-3xl border border-[#d2e4d8] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eaf5ee] text-[#1b4332] text-xs font-bold border border-[#d2e4d8]">
                <Leaf className="w-3.5 h-3.5 text-[#52b788]" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
                Celebrate Beautifully. Celebrate Responsibly.
              </h2>
              <p className="text-sm text-[#385746] leading-relaxed font-medium">
                EcoDecor helps customers create beautiful celebrations without purchasing decorations that are used only once. Our reusable decoration kits can be rented, used, returned, cleaned and prepared for future events.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1b4332] text-white hover:bg-[#143326] text-xs font-bold transition-all shadow-md flex-shrink-0 cursor-pointer"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 text-[#52b788]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kits Preview Section */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eaf5ee] text-[#1b4332] border border-[#d2e4d8]">
              <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
              <span className="text-xs font-bold uppercase tracking-wider">Popular Kits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332]">
              Explore Our Decoration Themes
            </h2>
            <p className="text-sm text-[#385746] font-medium max-w-xl mx-auto">
              Pre-assembled reusable decor sets designed for college events, birthdays, cultural nights, and minimal gatherings.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {decorationKits.slice(0, 3).map((kit) => (
              <div key={kit.id} className="bg-white rounded-3xl overflow-hidden border border-[#d2e4d8] shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img src={kit.image} alt={kit.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold text-[#1b4332] border border-[#d2e4d8]">
                      {kit.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-[#1b4332]">{kit.title}</h3>
                    <p className="text-xs text-[#526358] line-clamp-2">{kit.description}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to="/kits"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#faf7f2] hover:bg-[#1b4332] text-[#1b4332] hover:text-white border border-[#d2e4d8] text-xs font-bold transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View All Details</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/kits"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1b4332] text-white hover:bg-[#143326] text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <span>Explore All 6 Decoration Kits</span>
              <ArrowRight className="w-4 h-4 text-[#52b788]" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Quick Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332]">
              How Renting Works in 4 Steps
            </h2>
            <p className="text-sm text-[#385746] font-medium">
              Simple, transparent, and eco-friendly event rental process.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step) => {
              const IconComponent = iconMap[step.icon] || Box;
              return (
                <div key={step.step} className="bg-[#faf7f2] p-6 rounded-2xl border border-[#d2e4d8] text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#52b788]">{step.step}</span>
                    <IconComponent className="w-5 h-5 text-[#1b4332]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1b4332]">{step.title}</h3>
                  <p className="text-xs text-[#526358] leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link to="/how-it-works" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4332] hover:text-[#2d6a4f]">
              <span>Read complete process & logistics</span>
              <ArrowRight className="w-4 h-4 text-[#52b788]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why EcoDecor Comparison Section */}
      <WhyEcoDecor />

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#1b4332] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Make Your Celebration Sustainable?</h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Book your reusable theme decoration kit today. Save money, avoid storage hassle, and protect the planet.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/booking"
              className="px-8 py-3.5 rounded-full bg-[#52b788] text-[#1b4332] font-extrabold text-xs hover:bg-[#74c69d] transition-all shadow-lg"
            >
              Book Your Event Now
            </Link>
            <Link
              to="/kits"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs transition-all"
            >
              Browse Decoration Kits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
