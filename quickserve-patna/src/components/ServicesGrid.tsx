import React, { useState } from 'react';
import { 
  Wind, 
  Zap, 
  Droplets, 
  Cpu, 
  Sparkles, 
  Camera, 
  Car, 
  Check, 
  ArrowRight, 
  MessageCircle,
  Clock,
  Sparkle
} from 'lucide-react';
import { SERVICES_DATA, PATNA_WHATSAPP_NUMBER } from '../data';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
  onOpenRates: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService, onOpenRates }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Helper for rendering icons
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Wind':
        return <Wind className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Camera':
        return <Camera className="w-6 h-6" />;
      case 'Car':
        return <Car className="w-6 h-6" />;
      default:
        return <Sparkle className="w-6 h-6" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((srv) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'home-repairs') return ['ac', 'electrical', 'plumbing'].includes(srv.category);
    if (activeFilter === 'appliances-cleaning') return ['appliances', 'cleaning', 'cctv'].includes(srv.category);
    if (activeFilter === 'auto') return srv.category === 'auto';
    return true;
  });

  const getServiceWhatsAppUrl = (srv: ServiceItem) => {
    const text = `Hello QuickServe Patna! I want to book "${srv.name}" (${srv.startingPrice}) at my home/office in Patna. Please tell me technician availability.`;
    return `https://wa.me/${PATNA_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-slate-50/80 relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0B2545] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span>Doorstep Patna Catalog</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight font-['Outfit'] mb-3">
            Popular Home &amp; Vehicle Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Transparent upfront rates, verified local Patna technicians, and complete post-service warranty across all Patna pin codes.
          </p>
        </div>

        {/* Filter Tabs for quick mobile & desktop navigation */}
        <div className="flex items-center justify-center gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#0B2545] text-white shadow-md shadow-[#0B2545]/20 ring-1 ring-[#0B2545]'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            All Services (7)
          </button>
          <button
            onClick={() => setActiveFilter('home-repairs')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'home-repairs'
                ? 'bg-[#0B2545] text-white shadow-md shadow-[#0B2545]/20 ring-1 ring-[#0B2545]'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            AC, Electric &amp; Plumbing
          </button>
          <button
            onClick={() => setActiveFilter('appliances-cleaning')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'appliances-cleaning'
                ? 'bg-[#0B2545] text-white shadow-md shadow-[#0B2545]/20 ring-1 ring-[#0B2545]'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            Appliances, Cleaning &amp; CCTV
          </button>
          <button
            onClick={() => setActiveFilter('auto')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'auto'
                ? 'bg-[#0B2545] text-white shadow-md shadow-[#0B2545]/20 ring-1 ring-[#0B2545]'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            Car &amp; Bike Detailing
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-amber-400/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-[#0B2545] text-[#0B2545] group-hover:text-amber-400 flex items-center justify-center transition-colors shadow-xs border border-slate-200/60 group-hover:border-transparent">
                    {renderIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Starts At
                    </span>
                    <span className="text-xl font-black text-[#0B2545] group-hover:text-amber-600 transition-colors">
                      {service.startingPrice}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60">
                    {service.categoryLabel}
                  </span>
                  {service.popular && (
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400/15 text-amber-900 border border-amber-400/30 uppercase tracking-wide">
                      Patna Top Choice 🔥
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#0B2545] mb-1.5 transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs font-semibold text-amber-700 mb-4 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  {service.highlight}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4 border-t border-slate-100 pt-3.5 text-xs text-slate-600">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2.5">
                <button
                  onClick={() => onSelectService(service.name)}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#12396B] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-all shadow-xs active:scale-[0.98] cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>

                <a
                  href={getServiceWhatsAppUrl(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 transition-all active:scale-[0.98] shadow-xs"
                  title={`Chat about ${service.name} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Rates Prompt */}
        <div className="mt-12 text-center bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-[#0B2545] text-sm sm:text-base">
              Need custom spare parts or complete home contract?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Check our 100% upfront pricing table with parts warranty details.
            </p>
          </div>
          <button
            onClick={onOpenRates}
            className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-[#0B2545] hover:text-white text-[#0B2545] font-bold text-xs sm:text-sm transition-all border border-slate-200 shadow-xs cursor-pointer active:scale-[0.98]"
          >
            📋 Open Full Rate Card
          </button>
        </div>

      </div>
    </section>
  );
};
