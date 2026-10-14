import React from 'react';
import Benefits from '../components/Benefits';
import WhyEcoDecor from '../components/WhyEcoDecor';
import { Link } from 'react-router-dom';

export default function BenefitsPage() {
  return (
    <div className="pt-24 bg-[#faf7f2] min-h-screen">
      {/* Benefits Component */}
      <Benefits />

      {/* Comparison Component */}
      <WhyEcoDecor />

      {/* CTA Banner */}
      <section className="py-16 bg-[#1b4332] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Enjoy All Benefits For Your Next Event</h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto">
            Choose sustainable rental decor and leave the hassle, high costs, and waste behind.
          </p>
          <div className="pt-2">
            <Link to="/booking" className="px-8 py-3.5 rounded-full bg-[#52b788] text-[#1b4332] font-extrabold text-xs shadow-lg hover:bg-[#74c69d]">
              Book Your Decoration Kit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
