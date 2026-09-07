import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  CheckCircle2, 
  Calendar,
  AlertCircle
} from 'lucide-react';
import { PATNA_LOCALITIES, SERVICES_DATA, TIME_SLOTS, PATNA_WHATSAPP_NUMBER } from '../data';
import { BookingFormData } from '../types';

interface BookingFormProps {
  initialService?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    service: initialService || SERVICES_DATA[0].name,
    locality: PATNA_LOCALITIES[0],
    timeSlot: TIME_SLOTS[0],
    notes: ''
  });

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

  // Sync if parent updates initialService
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const constructWhatsAppMessage = () => {
    return `⚡ *QuickServe Patna - Urgent Service Booking* ⚡
--------------------------------------
👤 *Customer Name:* ${formData.fullName.trim() || 'Patna Resident'}
📱 *Contact Phone:* ${formData.phone.trim() || 'Not Provided'}
🛠️ *Service Required:* ${formData.service}
📍 *Patna Locality:* ${formData.locality}
⏰ *Preferred Time Slot:* ${formData.timeSlot}
${formData.notes?.trim() ? `📝 *Problem Details:* ${formData.notes.trim()}` : ''}
--------------------------------------
Please dispatch a verified technician and confirm ETA. Thank you!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name so our Patna technician can address you.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number for dispatch verification.');
      return;
    }

    const encodedMsg = encodeURIComponent(constructWhatsAppMessage());
    const waUrl = `https://wa.me/${PATNA_WHATSAPP_NUMBER}?text=${encodedMsg}`;

    setSubmittedSuccess(true);
    // Trigger direct WhatsApp redirection
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking" className="py-14 sm:py-20 bg-[#0B2545] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Instant Dispatch Engine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-['Outfit'] tracking-tight mb-3">
            Book Doorstep Service in 60 Seconds
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Fill out the form below. Your request will open directly in WhatsApp with your details pre-formatted for rapid dispatch!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form Container */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  Your Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar / Priya Verma"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Mobile / WhatsApp Number <span className="text-amber-400">*</span>
                </label>
                <div className="relative flex rounded-xl overflow-hidden border border-slate-700 focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-transparent">
                  <span className="inline-flex items-center px-3.5 bg-slate-800 text-slate-300 font-semibold text-sm border-r border-slate-700">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    maxLength={13}
                    required
                    className="w-full bg-slate-800/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Service Required (Dropdown) */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Service Required <span className="text-amber-400">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name} ({srv.startingPrice})
                    </option>
                  ))}
                </select>
              </div>

              {/* Locality in Patna (Dropdown) */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Locality in Patna <span className="text-amber-400">*</span>
                </label>
                <select
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                >
                  {PATNA_LOCALITIES.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Time Slot */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  Preferred Time Slot <span className="text-amber-400">*</span>
                </label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Optional Problem Details */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Issue Brief (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. 1.5 ton Voltas AC not cooling, or ceiling fan making noise"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                ></textarea>
              </div>

              {/* Error display if any */}
              {errorMessage && (
                <div className="flex items-center gap-2 p-3 bg-rose-500/20 border border-rose-500/40 rounded-xl text-xs text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                id="form-submit-whatsapp-btn"
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-3.5 px-6 rounded-xl text-base shadow-lg shadow-emerald-500/30 active:scale-[0.98] transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Send Booking Request via WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1 text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Free Consultation • Pay only after work completion</span>
              </div>
            </form>
          </div>

          {/* Right Column: Live Message Preview & Assurance */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp live bubble preview */}
            <div className="bg-[#128C7E]/20 border border-[#25D366]/40 rounded-2xl p-5 shadow-lg relative">
              <div className="flex items-center justify-between mb-3 border-b border-emerald-500/20 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                    <MessageCircle className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">QuickServe WhatsApp Bot</div>
                    <div className="text-[10px] text-emerald-300">Live Preview of your message</div>
                  </div>
                </div>
                <span className="text-[10px] bg-[#25D366]/30 text-emerald-200 px-2 py-0.5 rounded-full font-bold">
                  Pre-typed
                </span>
              </div>

              <div className="bg-[#0b141a] p-4 rounded-xl text-xs font-mono text-slate-200 border border-slate-800 leading-relaxed shadow-inner">
                <div className="text-emerald-400 font-bold mb-1">⚡ QuickServe Patna - Booking</div>
                <div>👤 <strong>Name:</strong> {formData.fullName || '<Your Name>'}</div>
                <div>📱 <strong>Phone:</strong> +91 {formData.phone || '<Your Phone>'}</div>
                <div>🛠️ <strong>Service:</strong> {formData.service}</div>
                <div>📍 <strong>Locality:</strong> {formData.locality}</div>
                <div>⏰ <strong>Slot:</strong> {formData.timeSlot}</div>
                {formData.notes && <div>📝 <strong>Note:</strong> {formData.notes}</div>}
              </div>

              <div className="mt-3 text-[11px] text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Clicking submit immediately launches WhatsApp with this message ready to send!</span>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Patna Resident Service Guarantee
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span><strong>Zero Visiting Fee</strong> if no repair is performed and you cancel beforehand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span><strong>Police-verified</strong> local technicians from Patna carrying photo ID.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span><strong>Standard rate card</strong> applied before touching any machine or wiring.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
