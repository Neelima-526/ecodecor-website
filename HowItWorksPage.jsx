import React, { useState } from 'react';
import HowItWorks from '../components/HowItWorks';
import { Truck, Package, RotateCcw, ShieldCheck, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "How far in advance should I book an EcoDecor kit?",
      a: "We recommend booking at least 2 to 3 days in advance for small celebrations, and 5 to 7 days in advance for college fests or large community functions to ensure kit date availability."
    },
    {
      q: "How does the pickup and return process work on campus?",
      a: "Our local logistics team delivers the compact tote directly to your hostel/venue. After your celebration, simply pack all items back into the tote, and our team will pick it up at the agreed time."
    },
    {
      q: "Are the kits easy to assemble by ourselves?",
      a: "Yes! Every kit comes with a 1-page visual setup card and color-coded components designed to take only 15 to 20 minutes to set up without any extra tools."
    },
    {
      q: "What happens if a component accidentally gets damaged?",
      a: "We understand small accidents happen during lively celebrations. Our reusable components are heavy-duty and resilient. Minor wear-and-tear is fully covered under our eco-rental pledge."
    }
  ];

  return (
    <div className="pt-24 bg-[#faf7f2] min-h-screen">
      <HowItWorks />

      {/* Logistics & Delivery Details */}
      <section className="py-16 bg-white border-t border-[#d2e4d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              Hassle-Free Delivery & Sanitization Guarantee
            </h3>
            <p className="text-sm text-[#385746] font-medium">
              We handle the packing, hygiene checks, and return logistics so you focus on celebrating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#faf7f2] p-8 rounded-3xl border border-[#d2e4d8] space-y-3">
              <Truck className="w-8 h-8 text-[#2d6a4f]" />
              <h4 className="text-base font-bold text-[#1b4332]">Local Campus Delivery</h4>
              <p className="text-xs text-[#526358] leading-relaxed font-medium">
                Convenient drop-off at your event venue, hostel gate, or community hall on your scheduled date.
              </p>
            </div>

            <div className="bg-[#faf7f2] p-8 rounded-3xl border border-[#d2e4d8] space-y-3">
              <Package className="w-8 h-8 text-[#c97a54]" />
              <h4 className="text-base font-bold text-[#1b4332]">Compact Storage Totes</h4>
              <p className="text-xs text-[#526358] leading-relaxed font-medium">
                All backdrop stands, LED lights, and fabrics fit inside a single lightweight reusable tote box.
              </p>
            </div>

            <div className="bg-[#faf7f2] p-8 rounded-3xl border border-[#d2e4d8] space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#52b788]" />
              <h4 className="text-base font-bold text-[#1b4332]">100% Sanitized Re-use</h4>
              <p className="text-xs text-[#526358] leading-relaxed font-medium">
                Steam-cleaned fabrics and sanitized bamboo elements ensure fresh quality for every single booking.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="mt-16 max-w-3xl mx-auto space-y-4 text-left">
            <h3 className="text-2xl font-extrabold text-[#1b4332] text-center mb-6">
              Frequently Asked Questions
            </h3>

            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#faf7f2] rounded-2xl border border-[#d2e4d8] overflow-hidden transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-bold text-sm text-[#1b4332] hover:bg-[#eaf5ee] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#52b788]" /> : <ChevronDown className="w-4 h-4 text-[#526358]" />}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-[#526358] leading-relaxed font-medium border-t border-[#d2e4d8]/50 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Link to="/booking" className="px-8 py-3.5 rounded-full bg-[#1b4332] text-white font-bold text-xs shadow-md hover:bg-[#143326]">
              Ready to Book Your Kit?
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
