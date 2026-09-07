import React from 'react';
import { Clock, ShieldAlert, UserCheck, Receipt, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Clock,
      title: '60-Minute Rapid Arrival',
      highlight: 'Speed in Patna Traffic',
      description:
        'With dedicated zonal technicians stationed across Boring Road, Kankarbagh, and Danapur, we beat city congestion and reach your doorstep within 60 minutes.',
      tag: 'Fastest in Patna'
    },
    {
      icon: Award,
      title: '15-Day Repair Guarantee',
      highlight: 'Zero-Cost Re-visit',
      description:
        'If the same problem recurs within 15 days of service, our senior technician will re-visit and fix it completely free of cost with priority scheduling.',
      tag: 'Hassle-Free'
    },
    {
      icon: UserCheck,
      title: 'Verified & Background-Checked',
      highlight: 'Safety & Trust First',
      description:
        'Every electrician, plumber, and mechanic undergoes rigorous Aadhaar verification, police background clearance, and skill evaluation before entering your home.',
      tag: '100% Safe'
    },
    {
      icon: Receipt,
      title: 'Clear & Upfront Quotes',
      highlight: 'No Hidden Charges',
      description:
        'Transparent pre-approved digital rate cards. Technicians inspect the job and quote the exact cost before starting any work. No surprise billing ever.',
      tag: 'Honest Pricing'
    }
  ];

  return (
    <section id="why-us" className="py-14 sm:py-20 bg-white border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>The QuickServe Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight font-['Outfit'] mb-3">
            Why Patna Trusts Us Over Local Unverified Labor
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We built QuickServe Patna to eliminate uncertain technician visits, inflated quotes, and unreliable repairs across the city.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-[#0B2545] text-slate-800 hover:text-white rounded-2xl p-6 border border-slate-200 hover:border-[#0B2545] transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-amber-500/20 text-[#0B2545] group-hover:text-[#F59E0B] flex items-center justify-center shadow-sm border border-slate-200/80 group-hover:border-amber-500/30 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 group-hover:bg-amber-400 group-hover:text-[#0B2545] text-amber-800 uppercase tracking-wider">
                      {pt.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2545] group-hover:text-white mb-1">
                    {pt.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-600 group-hover:text-amber-400 mb-3">
                    {pt.highlight}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 group-hover:border-slate-700/60 flex items-center gap-1.5 text-xs font-semibold text-[#0B2545] group-hover:text-amber-300">
                  <span>Standard of Patna Care</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
