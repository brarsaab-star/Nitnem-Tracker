import React from 'react';
import { BookOpen, Clock, LockKeyhole } from 'lucide-react';
import { Translations, Language } from '../translations';

interface HowItWorksProps {
  t: Translations;
  lang?: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ t, lang = 'en' }) => {
  const isPa = lang === 'pa';
  const steps = [
    {
      number: isPa ? '੦੧' : '01',
      title: t.howItWorks.steps.step1Title,
      description: t.howItWorks.steps.step1Desc,
      details: t.howItWorks.steps.step1Details,
      icon: BookOpen,
    },
    {
      number: isPa ? '੦੨' : '02',
      title: t.howItWorks.steps.step2Title,
      description: t.howItWorks.steps.step2Desc,
      details: t.howItWorks.steps.step2Details,
      icon: Clock,
    },
    {
      number: isPa ? '੦੩' : '03',
      title: t.howItWorks.steps.step3Title,
      description: t.howItWorks.steps.step3Desc,
      details: t.howItWorks.steps.step3Details,
      icon: LockKeyhole,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9771A]">
            {t.howItWorks.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mt-2 text-balance">
            {t.howItWorks.title}
          </h2>
          <p className="mt-3 text-base text-stone-600">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-[#FAF8F5] border border-stone-200 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-stone-300 transition-all duration-200"
              >
                <div>
                  {/* Step Header with Clean Editorial Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-display text-stone-300">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200/80 flex items-center justify-center text-[#F28C28] shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Title & Core Copy */}
                  <h3 className="font-display text-xl font-bold text-stone-900 mb-2.5">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-stone-700 leading-relaxed mb-3">
                    {step.description}
                  </p>

                  <p className="text-xs text-stone-500 leading-relaxed">
                    {step.details}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-200/70 flex items-center text-xs font-semibold text-[#D9771A]">
                  <span>{t.howItWorks.stepCount(idx + 1, 3)}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Device capabilities note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-stone-500">
            {t.howItWorks.deviceNote}
          </p>
        </div>

      </div>
    </section>
  );
};
