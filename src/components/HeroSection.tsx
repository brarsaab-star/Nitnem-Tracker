import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Lock, Sparkles, AlertCircle } from 'lucide-react';
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
  const [imgErrorDistraction, setImgErrorDistraction] = useState(false);
  const [imgErrorPrayer, setImgErrorPrayer] = useState(false);
  const [imgErrorAmritVela, setImgErrorAmritVela] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-18 lg:pb-28 bg-[#FAF8F5]">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Problem & Solution Framing with Authentic Photographic Context */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Section 1: Daily Spiritual Discipline · Sikh Nitnem, Bani & Path Habit */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-amber-100/70 border border-amber-200/80 mb-4 self-start shadow-2xs">
              {!imgErrorAmritVela ? (
                <img
                  src="/assets/images/amrit_vela_discipline_1794307548521.jpg"
                  alt="Amrit Vela Dawn at Sri Harmandir Sahib"
                  onError={() => setImgErrorAmritVela(true)}
                  className="w-5 h-5 rounded-full object-cover ring-1 ring-[#D9771A]/40 shrink-0"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <Sparkles className="w-4 h-4 text-[#D9771A] shrink-0" />
              )}
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#D9771A] font-bold">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* Problem Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.18] text-balance">
              {t.hero.headlinePart1}
              <span className="text-[#D9771A]">{t.hero.waheguru}</span>
              {t.hero.headlinePart2}
            </h1>

            {/* Section 2: "Your phone is taking you away from Waheguru" with Problem Distraction Photo */}
            <div className="mt-5 rounded-2xl overflow-hidden bg-stone-900 text-stone-200 border border-stone-800 shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="sm:col-span-5 relative h-40 sm:h-auto min-h-[145px] overflow-hidden bg-stone-950">
                  {!imgErrorDistraction ? (
                    <img
                      src="/assets/images/phone_distraction_scroll_1794307547291.jpg"
                      alt="Person absorbed in late night phone scrolling reels and distracting feeds"
                      onError={() => setImgErrorDistraction(true)}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-stone-900 text-stone-500">
                      <AlertCircle className="w-8 h-8" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-rose-950/80 border border-rose-800/60 text-rose-300 text-[10px] font-semibold tracking-wide">
                    {lang === 'pa' ? 'ਸਕ੍ਰੀਨ ਭਟਕਾਓ' : 'Digital Distraction'}
                  </div>
                </div>
                
                <div className="sm:col-span-7 p-4 sm:p-4.5 flex flex-col justify-center">
                  <div className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                    {lang === 'pa' ? 'ਰੋਜ਼ਾਨਾ ਸੰਘਰਸ਼' : 'The Real Struggle'}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed italic">
                    {t.hero.subheading}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: "Block distractions. Complete your Nitnem. Put Waheguru first." with Sacred Gutka Sahib & Mala Photo */}
            <div className="mt-4 p-4.5 sm:p-5 bg-white border border-stone-200/90 rounded-2xl shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-5 relative rounded-xl overflow-hidden shadow-xs border border-amber-100 bg-amber-50">
                  {!imgErrorPrayer ? (
                    <img
                      src="/assets/images/morning_nitnem_prayer_1794307547708.jpg"
                      alt="Sacred Nitnem Gutka Sahib on wooden bookstand with wooden Simran Mala beads in morning sunlight"
                      onError={() => setImgErrorPrayer(true)}
                      className="w-full h-36 sm:h-40 object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-36 sm:h-40 flex items-center justify-center text-amber-800">
                      <Lock className="w-8 h-8" />
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-stone-900/80 text-amber-200 text-[10px] font-semibold backdrop-blur-xs">
                    {lang === 'pa' ? 'ਪਹਿਲ: ਨਿਤਨੇਮ ਤੇ ਬਾਣੀ' : 'First: Nitnem & Bani'}
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-2">
                  <h2 className="text-sm sm:text-base font-bold font-display text-stone-900 leading-snug">
                    {t.hero.solutionTitle}
                  </h2>
                  
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {t.hero.solutionDesc}
                  </p>

                  {/* Section 4: "Respectful, private on-device restrictions using standard mobile screen time controls." */}
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-stone-600 font-medium bg-amber-50/70 p-2 rounded-lg border border-amber-200/50">
                    <ShieldCheck className="w-4 h-4 text-[#F28C28] shrink-0" />
                    <span className="leading-tight">{t.hero.privacyReassurance}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA Group */}
            <div className="mt-6 space-y-3.5">
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
              <div className="pt-1">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
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

        {/* Visual Narrative Journey: Amrit Vela & Daily Spiritual Discipline Banner */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-stone-200/70">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1.5">
            <span className="text-[11px] uppercase tracking-widest text-[#D9771A] font-bold">
              {lang === 'pa' ? 'ਅੰਮ੍ਰਿਤ ਵੇਲੇ ਦਾ ਨੇਮ' : 'Amrit Vela Discipline'}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
              {lang === 'pa' 
                ? 'ਸਕ੍ਰੀਨ ਦੀ ਭਟਕਣਾ ਤੋਂ ਸ਼ਾਂਤਮਈ ਅਧਿਆਤਮਿਕ ਰੁਟੀਨ ਤੱਕ ਦਾ ਸਫ਼ਰ' 
                : 'From Digital Distraction to Sacred Spiritual Discipline'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              {lang === 'pa'
                ? 'ਕਿਵੇਂ ਨਿਤਨੇਮ ਟਰੈਕਰ ਤੁਹਾਡੀ ਰੋਜ਼ਾਨਾ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਵਾਹਿਗੁਰੂ ਨੂੰ ਪਹਿਲ ਦਿੰਦਾ ਹੈ'
                : 'How Nitnem Tracker protects your sacred prayer hours and builds lifelong habits'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: The Distraction */}
            <div className="rounded-2xl overflow-hidden bg-white border border-stone-200/90 shadow-xs flex flex-col">
              <div className="h-44 overflow-hidden relative bg-stone-900">
                <img
                  src="/assets/images/phone_bedside_notifications_1794307987513.jpg"
                  alt="Early morning smartphone on nightstand buzzing with notifications and app alerts"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-stone-950/80 text-rose-300 text-[10px] font-bold uppercase tracking-wider">
                  01 · {lang === 'pa' ? 'ਸਮੱਸਿਆ' : 'The Challenge'}
                </div>
              </div>
              <div className="p-4.5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-display font-bold text-stone-900 text-sm">
                    {lang === 'pa' ? 'ਸੋਸ਼ਲ ਮੀਡੀਆ ਅਤੇ ਰੀਲਾਂ ਦੀ ਭਟਕਣਾ' : 'Endless Reels & Notification Loops'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                    {lang === 'pa'
                      ? 'ਸਵੇਰੇ ਉੱਠਦਿਆਂ ਹੀ ਫ਼ੋਨ ਖੋਲ੍ਹਣ ਨਾਲ ਕੀਮਤੀ ਅੰਮ੍ਰਿਤ ਵੇਲਾ ਸੋਸ਼ਲ ਮੀਡੀਆ ਵਿੱਚ ਬੀਤ ਜਾਂਦਾ ਹੈ ਅਤੇ ਨਿਤਨੇਮ ਪਿੱਛੇ ਪੈ ਜਾਂਦਾ ਹੈ।'
                      : 'Opening your phone for 5 minutes turns into an hour lost to algorithms while sacred morning prayers get delayed.'}
                  </p>
                </div>
                <div className="pt-2 text-[11px] text-stone-500 font-medium border-t border-stone-100">
                  {lang === 'pa' ? 'ਧਿਆਨ ਭਟਕਾਉਣ ਵਾਲੀਆਂ ਐਪਾਂ ਨੂੰ ਰੋਕਣ ਦੀ ਲੋੜ' : 'Requires gentle boundary protection'}
                </div>
              </div>
            </div>

            {/* Card 2: The Sacred Routine & Put Waheguru First */}
            <div className="rounded-2xl overflow-hidden bg-white border border-[#F28C28]/40 shadow-xs flex flex-col ring-1 ring-[#F28C28]/20">
              <div className="h-44 overflow-hidden relative bg-amber-50">
                <img
                  src="/assets/images/sikh_peaceful_meditation_1794307987928.jpg"
                  alt="Serene hands holding wooden Simran Mala prayer beads in quiet devotional contemplation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#D9771A] text-white text-[10px] font-bold uppercase tracking-wider">
                  02 · {lang === 'pa' ? 'ਹੱਲ' : 'The Routine'}
                </div>
              </div>
              <div className="p-4.5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-display font-bold text-stone-900 text-sm">
                    {lang === 'pa' ? 'ਗੁਰਬਾਣੀ ਅਤੇ ਨਿਤਨੇਮ ਨੂੰ ਪਹਿਲ' : 'Put Waheguru & Bani First'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                    {lang === 'pa'
                      ? 'ਜਦੋਂ ਤੱਕ ਜਪੁਜੀ ਸਾਹਿਬ ਸਮੇਤ ਰੋਜ਼ਾਨਾ ਬਾਣੀਆਂ ਪੂਰੀਆਂ ਨਹੀਂ ਹੁੰਦੀਆਂ, ਫ਼ੋਨ ਦੀਆਂ ਗੇਮਾਂ ਤੇ ਮਨੋਰੰਜਨ ਐਪਾਂ ਬੰਦ ਰਹਿੰਦੀਆਂ ਹਨ।'
                      : 'Distracting apps remain restricted on-device until you complete required Nitnem prayers and Gurbani Path.'}
                  </p>
                </div>
                <div className="pt-2 text-[11px] text-[#D9771A] font-semibold border-t border-stone-100 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F28C28]" />
                  <span>{lang === 'pa' ? '100% ਨਿੱਜੀ ਅਤੇ ਸੁਰੱਖਿਅਤ ਸਕ੍ਰੀਨ ਟਾਈਮ' : '100% private, on-device controls'}</span>
                </div>
              </div>
            </div>

            {/* Card 3: Daily Spiritual Discipline & Amrit Vela */}
            <div className="rounded-2xl overflow-hidden bg-white border border-stone-200/90 shadow-xs flex flex-col">
              <div className="h-44 overflow-hidden relative bg-stone-900">
                <img
                  src="/assets/images/amrit_vela_discipline_1794307548521.jpg"
                  alt="Sri Harmandir Sahib during peaceful Amrit Vela dawn"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-stone-950/80 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                  03 · {lang === 'pa' ? 'ਆਦਤ' : 'Lifelong Habit'}
                </div>
              </div>
              <div className="p-4.5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-display font-bold text-stone-900 text-sm">
                    {lang === 'pa' ? 'ਅੰਮ੍ਰਿਤ ਵੇਲੇ ਦਾ ਪੱਕਾ ਨੇਮ' : 'Daily Spiritual Discipline'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                    {lang === 'pa'
                      ? 'ਰੋਜ਼ਾਨਾ ਸਟ੍ਰੀਕ, ਲੜੀਵਾਰ ਟੀਚੇ ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਪਾਠ ਤੁਹਾਡੇ ਜੀਵਨ ਵਿੱਚ ਅਧਿਆਤਮਿਕ ਸ਼ਾਂਤੀ ਲਿਆਉਂਦੇ ਹਨ।'
                      : 'Streaks, prayer windows, and daily Hukamnama cultivate a peaceful, focused Amrit Vela routine for your whole family.'}
                  </p>
                </div>
                <div className="pt-2 text-[11px] text-stone-500 font-medium border-t border-stone-100">
                  {lang === 'pa' ? 'ਪਰਿਵਾਰ ਅਤੇ ਬੱਚਿਆਂ ਲਈ ਉੱਤਮ ਨੇਮ' : 'Ideal for youth, adults & parents'}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
