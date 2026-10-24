import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { StoreButtons } from './StoreButtons';
import { PhoneMockup } from './PhoneMockup';
import { StoreLinks } from '../types';

interface HeroSectionProps {
  links: StoreLinks;
  onPutNitnemFirstClick: () => void;
  onConfigureStoreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  links,
  onPutNitnemFirstClick,
  onConfigureStoreClick,
}) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 bg-[#FAF8F5]">
      {/* Subtle spiritual ambient background gradient */}
      <div 
        className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[550px] h-[550px] bg-gradient-to-br from-[#F28C28]/10 via-[#F28C28]/5 to-transparent rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Problem & Solution Framing */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Quiet spiritual lead-in */}
            <div className="text-xs uppercase tracking-widest text-[#D9771A] font-semibold mb-3">
              Daily Spiritual Discipline
            </div>

            {/* Problem Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.15] text-balance">
              Your phone is taking you away from <span className="text-[#D9771A]">Waheguru.</span>
            </h1>

            {/* Subheading Problem Narrative */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              “You open your phone for five minutes, and suddenly an hour is gone. Social media, reels and games distract you while your Nitnem gets postponed.”
            </p>

            {/* Solution Introduction Box */}
            <div className="mt-8 p-5 sm:p-6 bg-white/90 border border-stone-200/90 rounded-2xl shadow-xs space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-stone-900">
                Block distractions. Complete your Nitnem. Put Waheguru first.
              </h2>
              
              <p className="text-sm text-stone-600 leading-relaxed">
                Nitnem Tracker helps users build discipline by restricting selected distracting apps until they complete their required Nitnem prayers.
              </p>

              {/* Supported capabilities reassurance */}
              <div className="flex items-center gap-2 pt-1 text-xs text-stone-500">
                <ShieldCheck className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span>Respectful, private on-device restrictions using standard mobile screen time controls.</span>
              </div>
            </div>

            {/* Action CTA Group */}
            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onPutNitnemFirstClick}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-[#F28C28] hover:bg-[#D9771A] active:scale-[0.98] rounded-xl transition-all shadow-md shadow-[#F28C28]/25 cursor-pointer whitespace-nowrap"
                >
                  <span>Put Nitnem First</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-xs text-stone-500 self-center">
                  Free to begin your daily routine
                </div>
              </div>

              {/* Store Download Buttons */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                  Available for iOS & Android
                </div>
                <StoreButtons
                  links={links}
                  onConfigureClick={onConfigureStoreClick}
                  theme="dark"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full flex flex-col items-center">
              <PhoneMockup />
              <p className="text-xs text-stone-500 mt-3 text-center">
                Interactive preview · Tap pending prayers to see apps unlock
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
