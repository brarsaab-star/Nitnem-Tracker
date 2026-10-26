import React from 'react';
import { Heart, ShieldCheck, Clock, CheckCircle2, Lock } from 'lucide-react';
import familyImage from '../assets/images/sikh_family_prayer_1792742286667.jpg';
import { Translations, Language } from '../translations';

interface ForParentsProps {
  t: Translations;
  lang?: Language;
}

export const ForParents: React.FC<ForParentsProps> = ({ t, lang = 'en' }) => {
  const isPa = lang === 'pa';

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
                  {t.parents.imageCaption}
                </p>
              </div>
            </div>

            {/* Simple Clean Illustration of Parental Routine Setup */}
            <div className="bg-[#FAF8F5] border border-stone-200/90 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center font-bold text-xs">
                    {isPa ? 'ਕੌਰ' : 'KJ'}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block leading-none">
                      {t.parents.childProfileLabel}
                    </span>
                    <span className="text-[10px] text-stone-500">
                      {t.parents.supervisedMode}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-stone-700 bg-white border border-stone-200 px-2.5 py-1 rounded-lg">
                  <Lock className="w-3 h-3 text-[#F28C28]" />
                  <span>{t.parents.pinProtected}</span>
                </div>
              </div>

              <div className="mt-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs p-2 bg-white rounded-xl border border-stone-200/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                    <span className="font-medium text-stone-800">
                      {isPa ? 'ਜਪੁਜੀ ਸਾਹਿਬ ਪੂਰਾ ਹੋਇਆ' : 'Japji Sahib Completed'}
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-500 font-mono">07:10 AM</span>
                </div>

                <div className="flex items-center justify-between text-xs p-2 bg-white rounded-xl border border-stone-200/60">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span className="font-medium text-stone-800">
                      {t.parents.pendingBani}
                    </span>
                  </div>
                  <span className="text-[11px] text-amber-600 font-semibold">
                    {t.parents.pendingStatus}
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-2 text-[11px] text-stone-500 text-center">
                {t.parents.cardFooter}
              </div>
            </div>

          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9771A]">
              {t.parents.eyebrow}
            </span>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mt-2 text-balance leading-snug">
              {t.parents.title}
            </h2>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed">
              {t.parents.description}
            </p>

            {/* Respectful benefits */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {t.parents.benefit1Title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {t.parents.benefit1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {t.parents.benefit2Title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {t.parents.benefit2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {t.parents.benefit3Title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {t.parents.benefit3Desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500">
              {t.parents.deviceNote}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
