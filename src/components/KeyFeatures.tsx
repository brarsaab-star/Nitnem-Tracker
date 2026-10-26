import React from 'react';
import { Calendar, ShieldAlert, LineChart, Users } from 'lucide-react';
import { Translations, Language } from '../translations';

interface KeyFeaturesProps {
  t: Translations;
  lang?: Language;
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({ t }) => {
  const features = [
    {
      title: t.features.card1Title,
      headline: t.features.card1Headline,
      description: t.features.card1Desc,
      icon: Calendar,
      highlight: t.features.card1Badge,
    },
    {
      title: t.features.card2Title,
      headline: t.features.card2Headline,
      description: t.features.card2Desc,
      icon: ShieldAlert,
      highlight: t.features.card2Badge,
    },
    {
      title: t.features.card3Title,
      headline: t.features.card3Headline,
      description: t.features.card3Desc,
      icon: LineChart,
      highlight: t.features.card3Badge,
    },
    {
      title: t.features.card4Title,
      headline: t.features.card4Headline,
      description: t.features.card4Desc,
      icon: Users,
      highlight: t.features.card4Badge,
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9771A]">
            {t.features.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mt-2 text-balance">
            {t.features.title}
          </h2>
          <p className="mt-3 text-base text-stone-600">
            {t.features.subtitle}
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white border border-stone-200/90 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-md hover:shadow-stone-200/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] border border-[#F28C28]/20 flex items-center justify-center text-[#F28C28]">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-medium text-stone-500 font-mono">
                      {feature.highlight}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm font-semibold text-stone-800 leading-snug mb-3">
                    {feature.headline}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>{t.features.builtForSimplicity}</span>
                  <span className="text-[#D9771A] font-semibold">{t.features.learnMore}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
