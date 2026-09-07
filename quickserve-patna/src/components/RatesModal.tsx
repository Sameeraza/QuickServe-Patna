import React, { useEffect } from 'react';
import { X, ShieldCheck, MessageCircle, AlertCircle } from 'lucide-react';
import { DETAILED_RATES, PATNA_WHATSAPP_NUMBER } from '../data';

interface RatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const RatesModal: React.FC<RatesModalProps> = ({ isOpen, onClose, onSelectService }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBookRate = (serviceName: string) => {
    onClose();
    onSelectService(serviceName);
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getRateWhatsAppUrl = (rateItem: typeof DETAILED_RATES[0]) => {
    const text = `Hi QuickServe Patna! I want to book "${rateItem.service}" at ${rateItem.rate}. Please check technician availability for my Patna address.`;
    return `https://wa.me/${PATNA_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B2545] text-white p-4 sm:p-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-amber-400 text-[#0B2545] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                Patna Standard
              </span>
              <h3 className="text-lg sm:text-2xl font-bold font-['Outfit']">
                Complete Transparent Rate Card
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Clear upfront labor charges. Genuine spare parts billed strictly as per MRP with GST bill.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close rates modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice alert */}
        <div className="bg-amber-50 px-4 py-2.5 border-b border-amber-200 flex items-center gap-2 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>No Surprise Guarantee:</strong> Technicians will inspect and confirm final quote before beginning work.
          </span>
        </div>

        {/* Rates Table / List */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1 divide-y divide-slate-100">
          <div className="hidden sm:grid grid-cols-12 gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider pb-3">
            <div className="col-span-4">Service &amp; Package</div>
            <div className="col-span-2">Standard Rate</div>
            <div className="col-span-4">Scope Included</div>
            <div className="col-span-2 text-right">Instant Action</div>
          </div>

          <div className="space-y-3 sm:space-y-0 sm:divide-y sm:divide-slate-100">
            {DETAILED_RATES.map((item, idx) => (
              <div
                key={idx}
                className="py-3.5 flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-3 items-start sm:items-center bg-slate-50/60 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-200"
              >
                {/* Service Name */}
                <div className="col-span-4">
                  <div className="font-bold text-sm text-[#0B2545]">{item.service}</div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium mt-0.5">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{item.warranty}</span>
                  </div>
                </div>

                {/* Rate */}
                <div className="col-span-2">
                  <span className="sm:hidden text-xs text-slate-500 mr-2">Rate:</span>
                  <span className="text-base font-extrabold text-[#0B2545] bg-amber-100/70 text-amber-950 px-2 py-0.5 rounded">
                    {item.rate}
                  </span>
                </div>

                {/* Scope */}
                <div className="col-span-4 text-xs text-slate-600">
                  <span className="sm:hidden font-medium text-slate-400 block mb-0.5">Scope:</span>
                  {item.scope}
                </div>

                {/* Action */}
                <div className="col-span-2 w-full sm:w-auto flex items-center justify-end gap-2 pt-2 sm:pt-0 border-t sm:border-0 border-slate-200 mt-1 sm:mt-0">
                  <button
                    onClick={() => handleBookRate(item.service)}
                    className="text-xs bg-[#0B2545] hover:bg-slate-800 text-white font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Select
                  </button>
                  <a
                    href={getRateWhatsAppUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors"
                    title="Book via WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>All rates verified for Patna zone (Boring Rd, Kankarbagh, Danapur, Bailey Rd &amp; more)</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors cursor-pointer"
          >
            Close Rate Card
          </button>
        </div>
      </div>
    </div>
  );
};
