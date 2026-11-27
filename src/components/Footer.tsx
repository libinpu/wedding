import React from 'react';
import { Heart, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-mocha-deep text-ivory py-16 px-6 text-center relative border-t border-gold/30 overflow-hidden">
      {/* Decorative background aura with burnt amber glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-amber-burnt/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-gold font-light">
          WE CAN'T WAIT TO CELEBRATE WITH YOU!
        </p>

        <h2 className="text-4xl sm:text-6xl font-alex text-white tracking-wide">
          shiljo <span className="font-serif italic text-gold text-3xl sm:text-5xl px-2">&</span> rosemariya
        </h2>

        {/* Instagram Profiles */}
        <div className="flex flex-wrap items-center justify-center gap-4 py-2">
          <a
            href="https://www.instagram.com/shiljovj?lqvp=YWxqbHN5djltOTBx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-amber-burnt hover:text-white border border-champagne-gold/40 text-xs text-champagne-light tracking-wider transition-all duration-300 group"
          >
            <Instagram className="w-3.5 h-3.5 text-gold group-hover:text-white transition-colors" />
            <span>@shiljovj</span>
          </a>
          <a
            href="https://www.instagram.com/rose_mariya_vino?fqnt=YzJub3NhdG43cm45"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-amber-burnt hover:text-white border border-champagne-gold/40 text-xs text-champagne-light tracking-wider transition-all duration-300 group"
          >
            <Instagram className="w-3.5 h-3.5 text-gold group-hover:text-white transition-colors" />
            <span>@rose_mariya_vino</span>
          </a>
        </div>

        <div className="flex items-center justify-center space-x-3 text-champagne/80">
          <span className="h-[1px] w-10 bg-gold/40"></span>
          <span className="text-sm tracking-[0.3em] font-mono">14.01.2027</span>
          <span className="h-[1px] w-10 bg-gold/40"></span>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-champagne/60 tracking-wider">
          <div className="flex items-center space-x-1.5">
            <span>Made with Love</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
          </div>
          <span className="hidden sm:inline text-gold/40">•</span>
          <div className="flex items-center space-x-1.5">
            <span>Created by</span>
            <a
              href="https://www.instagram.com/libin_p.ulahannan?lqvp=MTBsd2ViODlqMGM3cg=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-gold hover:text-white transition-colors duration-200 font-medium underline underline-offset-4 decoration-gold/40 hover:decoration-white"
            >
              <Instagram className="w-3 h-3" />
              <span>Libin P Ulahannan</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
