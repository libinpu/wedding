import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-ivory py-16 px-6 text-center relative border-t border-gold/20 overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-gold font-light">
          WE CAN'T WAIT TO CELEBRATE WITH YOU!
        </p>

        <h2 className="text-3xl sm:text-5xl font-cinzel tracking-[0.2em] uppercase font-normal text-white">
          SHILJO <span className="text-gold font-serif italic lowercase font-light">&</span> ROSEMARIYA
        </h2>

        <div className="flex items-center justify-center space-x-3 text-champagne/80">
          <span className="h-[1px] w-10 bg-gold/40"></span>
          <span className="text-sm tracking-[0.3em] font-mono">14.01.2027</span>
          <span className="h-[1px] w-10 bg-gold/40"></span>
        </div>

        <div className="pt-8 border-t border-white/10 flex items-center justify-center space-x-2 text-xs text-champagne/60 tracking-wider">
          <span>Made with Love</span>
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
        </div>
      </div>
    </footer>
  );
};
