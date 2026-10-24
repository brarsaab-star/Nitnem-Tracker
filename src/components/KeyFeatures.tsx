import React from 'react';
import { Calendar, ShieldAlert, LineChart, Users } from 'lucide-react';

export const KeyFeatures: React.FC = () => {
  const features = [
    {
      title: 'Custom Prayer Windows',
      headline: 'Choose different Banis for Morning, Evening and Night.',
      description: 'Align your Nitnem with the rhythms of the day. Configure your Amrit Vela window for the 5 Banis, Evening window for Rehras Sahib, and Night window for Kirtan Sohila.',
      icon: Calendar,
      highlight: '3 Custom Routines',
    },
    {
      title: 'App Blocking',
      headline: 'Restrict selected distracting apps until the required prayers are completed.',
      description: 'You select which apps get locked (Instagram, YouTube, TikTok, games, or social feeds). They remain unavailable until you check off your prayers for that window.',
      icon: ShieldAlert,
      highlight: 'Tailored App Lists',
    },
    {
      title: 'Progress and Streaks',
      headline: 'Track daily, weekly and monthly progress and celebrate consistency.',
      description: 'Build an unbroken chain of spiritual devotion. View calendar completion heatmaps, monthly completion percentages, and milestone celebrations.',
      icon: LineChart,
      highlight: 'Milestone Tracking',
    },
    {
      title: 'Parental Guidance',
      headline: 'Encourage children to develop a regular Nitnem routine through supported device restrictions and supervision.',
      description: 'Guide children to complete their morning or evening Banis before gaining screen time privileges on family or supervised devices.',
      icon: Users,
      highlight: 'Family Supervision',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9771A]">
            Thoughtfully Crafted
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mt-2 text-balance">
            Designed for Spiritual Focus and Digital Restraint
          </h2>
          <p className="mt-3 text-base text-stone-600">
            No endless social feeds. No unnecessary gamification. Just honest tools to put your spiritual duties first every day.
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
                  <span>Built for simplicity</span>
                  <span className="text-[#D9771A] font-semibold">Learn more →</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
