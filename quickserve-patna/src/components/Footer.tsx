import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, Wrench } from 'lucide-react';
import { PATNA_PHONE_DISPLAY, PATNA_PHONE_TEL, PATNA_WHATSAPP_NUMBER, PATNA_LOCALITIES } from '../data';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PATNA_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi QuickServe Patna! I have a general query regarding home services in Patna.'
  )}`;

  return (
    <footer className="bg-[#07172c] text-slate-300 border-t border-[#132c4e]">
      
      {/* Top Coverage Highlight Bar */}
      <div className="bg-[#051121] py-5 px-4 sm:px-6 border-b border-[#0f243f]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span className="font-semibold text-white">Patna Service Coverage Area:</span>
          </div>
          <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
            Serving all major areas across Patna including Boring Road, Kankarbagh, Danapur, Bailey Road, Raja Bazar, and Ashiana bihar.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand & About */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F59E0B] to-amber-300 flex items-center justify-center text-[#0B2545] shadow-lg">
                <Wrench className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white font-['Outfit']">QuickServe</span>
                <span className="text-2xl font-bold text-[#F59E0B] font-['Outfit']">Patna</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Patna's premier home maintenance and doorstep auto care startup. We bridge the gap between skilled, verified local technicians and busy Patna residents with guaranteed 60-minute doorstep arrival.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Aadhaar Verified
              </span>
              <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 60-Min Arrival
              </span>
              <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                15-Day Warranty
              </span>
            </div>
          </div>

          {/* Working Hours & Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-700 pb-2">
              Operating Hours &amp; Helplines
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Working Hours:</strong>
                  <div>8:00 AM – 9:00 PM (Monday to Sunday)</div>
                  <div className="text-xs text-amber-400/80">Emergency electrical &amp; plumbing on call</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Patna Dispatch Helpline:</strong>
                  <div>
                    <a href={PATNA_PHONE_TEL} className="hover:text-amber-400 text-white font-semibold">
                      {PATNA_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Instant WhatsApp:</strong>
                  <div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-400 text-[#25D366] font-semibold"
                    >
                      +91 91234 56789 (Click to Chat)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Customer Support Email:</strong>
                  <div className="text-slate-400">help@quickservepatna.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Locality Tags */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-700 pb-2">
              Key Service Hubs
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {PATNA_LOCALITIES.slice(0, 10).map((loc) => (
                <span
                  key={loc}
                  className="text-[11px] bg-slate-800/80 hover:bg-slate-700 text-slate-300 px-2 py-0.5 rounded border border-slate-700/60"
                >
                  {loc}
                </span>
              ))}
            </div>
            <div className="pt-2 text-[11px] text-slate-400">
              📍 Hubs located at Bailey Rd, Tiwari Bechar &amp; Saguna More for rapid dispatch.
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} QuickServe Patna. All rights reserved. Patna's local home &amp; vehicle care startup.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-amber-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-amber-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-amber-400 cursor-pointer">Rate Card PDF</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
