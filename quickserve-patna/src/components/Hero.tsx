import React from 'react';
import { MessageCircle, ShieldCheck, Clock, CheckCircle2, ChevronRight, Star, Award, MapPin } from 'lucide-react';
import { PATNA_WHATSAPP_NUMBER } from '../data';

interface HeroProps {
  onOpenRates: () => void;
  onSelectService: (serviceName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRates, onSelectService }) => {
  const defaultWhatsAppUrl = `https://wa.me/${PATNA_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi QuickServe Patna! I want to book a doorstep service in Patna today. Please assist me with verified technician availability.'
  )}`;

  const quickPills = [
    { label: 'AC Jet Wash ₹399', service: 'AC & HVAC Servicing' },
    { label: 'Plumbing Leak ₹99', service: 'Plumbing & Water Systems' },
    { label: 'Fan/Switch Fix ₹79', service: 'Electrical Repairs & Wiring' },
    { label: 'Car Rubbing & Polish ₹349', service: 'Car & Bike Care & Denting/Painting' },
    { label: 'Deep Cleaning ₹499', service: 'Deep Cleaning & Sanitization' },
  ];

  return (
    <section className="relative bg-[#08162B] text-white pt-8 pb-16 sm:pt-16 sm:pb-24 overflow-hidden border-b border-white/10">
      {/* Sleek ambient light mesh & subtle grid */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:28px_28px]"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Live Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200 mb-6 shadow-sm backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-amber-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> Patna City Fast Response
              </span>
              <span className="text-white/20">|</span>
              <span className="text-slate-300 font-medium">Ready in 60 Mins</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 font-['Outfit',sans-serif]">
              Patna's Most Trusted{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">
                Home &amp; Vehicle Care
              </span>{' '}
              at Your Doorstep
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 font-normal leading-relaxed">
              Verified electricians, plumbers, AC technicians, cleaning pros &amp; car painters. Guaranteed arrival within <span className="text-amber-400 font-bold">60 minutes</span> across all Patna localities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 mb-8">
              <a
                id="hero-whatsapp-btn"
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-base sm:text-lg font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Book via WhatsApp</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </a>

              <button
                id="hero-rates-btn"
                onClick={onOpenRates}
                className="flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 text-slate-100 hover:text-white border border-white/15 hover:border-amber-400/50 text-base font-semibold px-6 py-3.5 rounded-xl transition-all shadow-sm active:scale-[0.98] cursor-pointer"
              >
                <span>View All Rates</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-400/30">
                  Starts ₹79
                </span>
              </button>
            </div>

            {/* Trending Patna Instant Services (Chips) */}
            <div className="pt-3 border-t border-white/10 mb-8">
              <span className="text-xs text-slate-400 font-semibold mr-2 block sm:inline mb-2 sm:mb-0">
                Popular in Patna:
              </span>
              <div className="inline-flex flex-wrap gap-2 justify-center lg:justify-start">
                {quickPills.map((pill) => (
                  <button
                    key={pill.label}
                    onClick={() => onSelectService(pill.service)}
                    className="text-xs bg-slate-800/80 hover:bg-amber-400 hover:text-[#0B2545] text-slate-200 px-3 py-1.5 rounded-full border border-white/10 hover:border-amber-400 transition-all cursor-pointer font-medium active:scale-95 shadow-sm"
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mandatory Trust Badges: "30-Day Guarantee" | "Verified Experts" | "Fixed Transparent Rates" */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0 pt-4 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-2.5">
                <div className="p-2 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-white leading-tight">30-Day Guarantee</h2>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Free rework warranty</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-400/15 border border-emerald-400/30 text-emerald-400">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-white leading-tight">Verified Experts</h2>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Aadhaar &amp; Police check</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-2.5">
                <div className="p-2 rounded-xl bg-blue-400/15 border border-blue-400/30 text-blue-400">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-white leading-tight">Fixed Rates</h2>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">No hidden surprises</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Sleek Local Dispatch Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-white/15 shadow-2xl backdrop-blur-xl relative">
              
              {/* Patna Service Guarantee Ribbon */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-400">
                    Live Dispatch Board
                  </span>
                </div>
                <span className="text-xs bg-amber-400/15 text-amber-300 border border-amber-400/30 font-semibold px-2.5 py-0.5 rounded-full">
                  Patna Central
                </span>
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-3.5 mb-5">
                <div className="bg-slate-800/60 p-3.5 rounded-xl border border-white/5">
                  <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">15,400+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Homes Served in Patna</div>
                </div>
                <div className="bg-slate-800/60 p-3.5 rounded-xl border border-white/5">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-['Outfit'] flex items-center gap-1">
                    4.9 <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Verified Google Rating</div>
                </div>
              </div>

              {/* What Happens When You Book */}
              <h3 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">
                How QuickServe Patna Works:
              </h3>

              <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-xl border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs border border-amber-400/30">
                    1
                  </div>
                  <div>
                    <strong className="text-white">Choose Service &amp; Locality:</strong>
                    <p className="text-slate-400 text-xs mt-0.5">Select your issue from Boring Rd to Danapur.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-xl border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs border border-amber-400/30">
                    2
                  </div>
                  <div>
                    <strong className="text-white">Technician Dispatched in 10 Mins:</strong>
                    <p className="text-slate-400 text-xs mt-0.5">You receive verified tech name, photo &amp; direct mobile contact.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-xl border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs border border-amber-400/30">
                    3
                  </div>
                  <div>
                    <strong className="text-white">Fixed Price &amp; Digital Bill:</strong>
                    <p className="text-slate-400 text-xs mt-0.5">Pay after job completion via UPI or Cash with 30-day warranty card.</p>
                  </div>
                </div>
              </div>

              {/* Rapid Booking Trigger */}
              <a
                href="#booking"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-[#0B2545] font-black py-3.5 rounded-xl text-center shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Clock className="w-4 h-4 text-[#0B2545]" />
                <span>Book Instant Technician Now</span>
              </a>
              
              <div className="mt-3 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                <span>🔒 No upfront advance fee</span>
                <span>•</span>
                <span>Pay only after 100% satisfaction</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
