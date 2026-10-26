import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { StoreButtons } from './StoreButtons';
import { PhoneMockup } from './PhoneMockup';
import { StoreLinks } from '../types';
import { Language, Translations } from '../translations';

interface HeroSectionProps {
  links: StoreLinks;
  onPutNitnemFirstClick: () => void;
  onConfigureStoreClick: () => void;
  onOpenWaitlist?: (platform: 'ios' | 'android') => void;
  lang: Language;
  t: Translations;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  links,
  onPutNitnemFirstClick,
  onConfigureStoreClick,
  onOpenWaitlist,
  lang,
  t,
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
              {t.hero.eyebrow}
            </div>

            {/* Problem Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.18] text-balance">
              {t.hero.headlinePart1}
              <span className="text-[#D9771A]">{t.hero.waheguru}</span>
              {t.hero.headlinePart2}
            </h1>

            {/* Subheading Problem Narrative */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              {t.hero.subheading}
            </p>

            {/* Solution Introduction Box */}
            <div className="mt-8 p-5 sm:p-6 bg-white/90 border border-stone-200/90 rounded-2xl shadow-xs space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-display text-stone-900">
                {t.hero.solutionTitle}
              </h2>
              
              <p className="text-sm text-stone-600 leading-relaxed">
                {t.hero.solutionDesc}
              </p>

              {/* Supported capabilities reassurance */}
              <div className="flex items-center gap-2 pt-1 text-xs text-stone-500">
                <ShieldCheck className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span>{t.hero.privacyReassurance}</span>
              </div>
            </div>

            {/* Action CTA Group */}
            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onPutNitnemFirstClick}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-[#F28C28] hover:bg-[#D9771A] active:scale-[0.98] rounded-xl transition-all shadow-md shadow-[#F28C28]/25 cursor-pointer whitespace-nowrap"
                >
                  <span>{t.hero.ctaButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-xs text-stone-500 self-center">
                  {t.hero.freeToBegin}
                </div>
              </div>

              {/* Store Download Buttons */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                  {t.hero.availableStores}
                </div>
                <StoreButtons
                  links={links}
                  onConfigureClick={onConfigureStoreClick}
                  onOpenWaitlist={onOpenWaitlist}
                  theme="dark"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full flex flex-col items-center">
              <PhoneMockup lang={lang} t={t} />
              <p className="text-xs text-stone-500 mt-3 text-center">
                {t.hero.interactiveHint}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
