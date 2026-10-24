import React from 'react';
import { BookOpen, Clock, LockKeyhole, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Banis',
      description: 'Select the Nitnem prayers you want to complete.',
      details: 'Choose from Japji Sahib, Jaap Sahib, Tav-Prasad Savaiye, Chaupai Sahib, Anand Sahib, Rehras Sahib, and Kirtan Sohila according to your daily practice.',
      icon: BookOpen,
    },
    {
      number: '02',
      title: 'Set Your Prayer Windows',
      description: 'Create Morning, Evening and Night routines, choosing which Banis must be completed in each window.',
      details: 'Define your Amrit Vela, Sandhya (evening), and bedtime windows to match your schedule and keep your spiritual time protected.',
      icon: Clock,
    },
    {
      number: '03',
      title: 'Complete Nitnem and Unlock Apps',
      description: 'Selected distracting apps remain restricted until the configured prayer requirements are fulfilled, subject to supported device capabilities.',
      details: 'Social media, games, and video streams stay blocked so your mind remains focused on Gurbani first.',
      icon: LockKeyhole,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9771A]">
            Simple 3-Step Routine
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mt-2 text-balance">
            How Nitnem Tracker Works
          </h2>
          <p className="mt-3 text-base text-stone-600">
            A gentle yet disciplined barrier between smartphone distractions and your spiritual devotion.
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
                  <span>Step {idx + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Device capabilities note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-stone-500">
            * App restriction functionality utilizes native iOS Screen Time API and Android Accessibility/Usage Access services on supported devices.
          </p>
        </div>

      </div>
    </section>
  );
};
