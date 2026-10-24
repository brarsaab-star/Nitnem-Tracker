import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { StoreButtons } from './StoreButtons';
import { StoreLinks } from '../types';

interface FinalCTAProps {
  links: StoreLinks;
  onPutNitnemFirstClick: () => void;
  onConfigureStoreClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  links,
  onPutNitnemFirstClick,
  onConfigureStoreClick,
}) => {
  return (
    <section id="download" className="py-20 sm:py-28 bg-[#1C1917] text-white relative overflow-hidden">
      {/* Spiritual ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F28C28]/15 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700/80 text-[#F28C28] text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Begin Your Nitnem Journey</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto text-balance leading-tight">
          Your phone can wait. Your Nitnem comes first.
        </h2>

        {/* Supporting text */}
        <p className="mt-5 text-base sm:text-xl text-stone-300 max-w-xl mx-auto leading-relaxed">
          “Start building a consistent Nitnem routine, one day at a time.”
        </p>

        {/* Action Button & Store links */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <button
            onClick={onPutNitnemFirstClick}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-bold text-white bg-[#F28C28] hover:bg-[#D9771A] active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-[#F28C28]/30 cursor-pointer"
          >
            <span>Put Nitnem First</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex flex-col items-center gap-3 pt-2">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              Download directly for your mobile device
            </span>
            <StoreButtons
              links={links}
              onConfigureClick={onConfigureStoreClick}
              theme="outline-dark"
              className="justify-center"
            />
          </div>
        </div>

        {/* Reassurance text */}
        <div className="mt-12 text-xs text-stone-400 border-t border-stone-800/80 pt-8">
          Cancel Anytime · Respects your digital privacy · Designed for the Sikh Sangat
        </div>

      </div>
    </section>
  );
};
