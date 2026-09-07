import React from 'react';
import { Star, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { REVIEWS_DATA } from '../data';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Google Rating Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Patna Customer Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight font-['Outfit'] mb-3">
            Real Feedback from Patna Households
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mb-6">
            Read authentic reviews from residents in Kankarbagh, Patliputra, and Danapur who count on QuickServe daily.
          </p>

          {/* Google aggregate score pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-slate-800">Google Rating:</span>
              <span className="text-sm font-black text-amber-500">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
                ))}
              </div>
            </div>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-xs text-slate-500 font-medium">
              Based on 1,480+ local reviews in Patna
            </span>
          </div>
        </div>

        {/* 3 Review Cards (Google-style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header: Author + Verified + Date */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm`}
                    >
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-sm text-[#0B2545]">{rev.author}</h3>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" title="Verified Customer" />
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                        <MapPin className="w-3 h-3 text-amber-500" />
                        <span>{rev.locality}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                {/* Rating stars & Service tag */}
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {rev.service}
                  </span>
                </div>

                {/* Review body */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Google Verified Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-slate-500 font-medium">
                  <MessageSquare className="w-3 h-3 text-emerald-500" />
                  Verified Google Review
                </span>
                <span className="text-emerald-600 font-semibold">Service Completed ✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
