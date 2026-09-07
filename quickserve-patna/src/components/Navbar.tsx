import React from 'react';
import { Phone, MessageCircle, Wrench, ShieldCheck } from 'lucide-react';
import { PATNA_PHONE_DISPLAY, PATNA_PHONE_TEL, PATNA_WHATSAPP_NUMBER } from '../data';

interface NavbarProps {
  onOpenRates: () => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRates, onBookClick }) => {
  const quickWhatsappUrl = `https://wa.me/${PATNA_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello QuickServe Patna! I need a technician at my home in Patna. Please share details.'
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0B2545]/95 text-white shadow-lg shadow-black/10 border-b border-white/10 transition-all">
      {/* Top micro-announcement banner */}
      <div className="bg-[#07172C] px-3 py-1.5 text-xs text-slate-300 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-amber-400 tracking-wide">Patna Rapid Service:</span>
            <span className="truncate text-slate-300">Average arrival time 42 mins in Boring Rd, Kankarbagh &amp; Danapur today</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-slate-300 text-[11px]">
            <span className="flex items-center gap-1 text-slate-300 font-medium">
              <span>⏱️ 8:00 AM – 9:00 PM (All 7 Days)</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Verified Patna Experts
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-[#0B2545] shadow-md shadow-amber-500/20 group-hover:shadow-amber-500/30 group-hover:scale-105 transition-all duration-200 ring-1 ring-white/20">
            <Wrench className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-2xl font-black tracking-tight text-white font-['Outfit',sans-serif]">
                QuickServe
              </span>
              <span className="text-lg sm:text-2xl font-bold text-amber-400 font-['Outfit',sans-serif]">
                Patna
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-300 font-medium tracking-wide">
              <span className="bg-amber-400/15 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                Bihar
              </span>
              <span className="text-slate-300">Home &amp; Auto Services</span>
            </div>
          </div>
        </a>

        {/* Desktop Quick Nav links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
          <a href="#services" className="hover:text-amber-400 transition-colors py-1">
            Services &amp; Rates
          </a>
          <a href="#why-us" className="hover:text-amber-400 transition-colors py-1">
            Why Choose Us
          </a>
          <a href="#booking" className="hover:text-amber-400 transition-colors py-1">
            Book in 60 Mins
          </a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors py-1">
            Patna Reviews
          </a>
          <button
            onClick={onOpenRates}
            className="text-xs bg-white/10 hover:bg-white/15 text-amber-300 border border-amber-400/30 hover:border-amber-400/60 px-3.5 py-1.5 rounded-lg transition-all shadow-sm font-semibold flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <span>📋 Rate Card</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Call CTA */}
          <a
            id="nav-call-btn"
            href={PATNA_PHONE_TEL}
            className="flex items-center gap-1.5 sm:gap-2 bg-slate-800/90 hover:bg-slate-700/90 text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-white/10 active:scale-[0.98] transition-all shadow-sm hover:border-amber-400/40"
            title="Call QuickServe Patna Helpline"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            <span className="hidden xs:inline">Call Now</span>
            <span className="hidden md:inline text-xs text-slate-400 font-normal">
              ({PATNA_PHONE_DISPLAY})
            </span>
          </a>

          {/* WhatsApp CTA */}
          <a
            id="nav-whatsapp-btn"
            href={quickWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-[0.98] transition-all"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>

          {/* Quick Book Button for Desktop */}
          <button
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0B2545] font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-amber-500/20 active:scale-[0.98] cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
};
