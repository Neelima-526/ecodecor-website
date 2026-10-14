import React from 'react';
import { useNavigate } from 'react-router-dom';
import DecorationKits from '../components/DecorationKits';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function KitsPage() {
  const navigate = useNavigate();

  const handleSelectThemeForBooking = (themeTitle) => {
    navigate('/booking', { state: { preferredTheme: themeTitle } });
  };

  return (
    <div className="pt-24 bg-[#faf7f2] min-h-screen">
      <DecorationKits onSelectThemeForBooking={handleSelectThemeForBooking} />

      {/* Additional Custom Request Banner */}
      <section className="pb-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1b4332] text-white p-8 sm:p-12 rounded-3xl border border-[#52b788]/30 shadow-lg text-left flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#52b788]">Customization Available</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">Need a Custom Event Theme Setup?</h3>
              <p className="text-xs sm:text-sm text-white/80 font-medium">
                Whether it's a specific college fest color theme or a unique birthday aesthetic, our team can tailor modular props to your vision.
              </p>
            </div>
            <Link
              to="/booking"
              state={{ preferredTheme: 'Custom Theme' }}
              className="px-6 py-3.5 rounded-full bg-[#52b788] text-[#1b4332] font-extrabold text-xs hover:bg-[#74c69d] transition-all shadow-md flex-shrink-0 cursor-pointer"
            >
              Request Custom Theme Kit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
