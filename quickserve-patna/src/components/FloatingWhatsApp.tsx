import React, { useState } from 'react';
import { MessageCircle, Phone, X, ShieldCheck } from 'lucide-react';
import { PATNA_PHONE_TEL, PATNA_PHONE_DISPLAY, PATNA_WHATSAPP_NUMBER } from '../data';

interface FloatingWhatsAppProps {
  onBookClick: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onBookClick }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultWhatsappUrl = `https://wa.me/${PATNA_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi QuickServe Patna! I need urgent home/auto repair in Patna. Can you send a technician?'
  )}`;

  return (
    <>
      {/* Pinned Desktop & Tablet Floating WhatsApp Trigger (Bottom-Right) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2">
        
        {/* Friendly chat greeting bubble */}
        {showTooltip && (
          <div className="bg-white text-slate-800 text-xs p-3 rounded-2xl shadow-xl border border-slate-200/90 max-w-[240px] animate-in fade-in slide-in-from-bottom-2 duration-300 relative group hidden sm:block">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-[10px]"
              title="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-1.5 mb-1 text-[11px] font-bold text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Patna Support Online
            </div>
            <p className="text-slate-600 text-[11px] leading-tight">
              Need a technician in Boring Rd, Kankarbagh or Danapur? Chat now for 60-min arrival!
            </p>
          </div>
        )}

        {/* Floating WhatsApp Action Button */}
        <a
          id="floating-whatsapp-btn"
          href={defaultWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-600/40 active:scale-95 transition-all duration-200"
          title="Chat directly on WhatsApp with QuickServe Patna"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>

          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />

          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
            1
          </span>
        </a>
      </div>

      {/* Sticky Mobile Bottom Quick Action Bar (For instant phone conversion on mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0B2545] border-t border-[#1a3d68] p-2.5 px-3 shadow-2xl flex items-center gap-2">
        <a
          id="mobile-bar-call-btn"
          href={PATNA_PHONE_TEL}
          className="flex-1 flex items-center justify-center gap-2 bg-slate-800 active:bg-slate-700 text-white py-2.5 px-2 rounded-xl text-xs font-bold border border-slate-700 active:scale-[0.98] transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Call Now</span>
        </a>

        <a
          id="mobile-bar-whatsapp-btn"
          href={defaultWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#20bd5a] text-white py-2.5 px-2 rounded-xl text-xs font-extrabold shadow-md active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>Book WhatsApp</span>
        </a>

        <button
          id="mobile-bar-book-btn"
          onClick={onBookClick}
          className="flex-none bg-[#F59E0B] text-[#0B2545] py-2.5 px-3 rounded-xl text-xs font-black active:scale-[0.98] transition-transform"
          title="Open Booking Form"
        >
          Book
        </button>
      </div>
    </>
  );
};
