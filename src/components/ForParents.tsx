import React from 'react';
import { Heart, ShieldCheck, Clock, CheckCircle2, Lock } from 'lucide-react';
import familyImage from '../assets/images/sikh_family_prayer_1792742286667.jpg';

export const ForParents: React.FC = () => {
  return (
    <section id="for-parents" className="py-20 sm:py-28 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Asset & App Illustration */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Warm, Respectful Family Image */}
            <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-md">
              <img
                src={familyImage}
                alt="Sikh family sitting together peacefully at home in prayer and reflection"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs font-medium opacity-90 drop-shadow-xs">
                  Passing spiritual values and Nitnem habits to the next generation.
                </p>
              </div>
            </div>

            {/* Simple Clean Illustration of Parental Routine Setup */}
            <div className="bg-[#FAF8F5] border border-stone-200/90 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center font-bold text-xs">
                    KJ
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block leading-none">
                      Child Profile: Kirpa Kaur
                    </span>
                    <span className="text-[10px] text-stone-500">
                      Supervised Family Device Mode
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-stone-700 bg-white border border-stone-200 px-2.5 py-1 rounded-lg">
                  <Lock className="w-3 h-3 text-[#F28C28]" />
                  <span>PIN Protected</span>
                </div>
              </div>

              <div className="mt-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs p-2 bg-white rounded-xl border border-stone-200/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                    <span className="font-medium text-stone-800">Japji Sahib Completed</span>
                  </div>
                  <span className="text-[11px] text-stone-500 font-mono">07:10 AM</span>
                </div>

                <div className="flex items-center justify-between text-xs p-2 bg-white rounded-xl border border-stone-200/60">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span className="font-medium text-stone-800">Chaupai Sahib (5 mins required)</span>
                  </div>
                  <span className="text-[11px] text-amber-600 font-semibold">Pending</span>
                </div>
              </div>

              <div className="mt-3 pt-2 text-[11px] text-stone-500 text-center">
                Tablet apps remain locked until Chaupai Sahib prayer check-in is complete.
              </div>
            </div>

          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9771A]">
              Spiritual Upbringing
            </span>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mt-2 text-balance leading-snug">
              Help Your Children Connect With Waheguru.
            </h2>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed">
              “Encourage your children to put Nitnem before distractions and develop healthy digital habits through daily prayer routines.”
            </p>

            {/* Respectful benefits */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    No Arguments Over Screen Time
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Clear, automated boundaries replace daily friction. Children know entertainment apps unlock only after their spiritual duty is fulfilled.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Forming Lifelong Nitnem Habits
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    By associating the start of each morning with Gurbani rather than algorithms, children build rooted spiritual resilience that stays with them for life.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Supported Device Supervision
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Configure restrictions directly on the child’s device with a parental PIN, or via supported OS family controls on iOS and Android.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500">
              * Note: Parental controls operate via local device PIN protection and standard OS Screen Time / Accessibility frameworks supported on the child's phone or tablet.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
