import React from 'react';
import { motion } from 'framer-motion';
import { FloralDivider } from './FloralDecorations';
import { CalendarHeart } from 'lucide-react';

export const Invitation: React.FC = () => {
  return (
    <section id="invitation" className="py-24 sm:py-32 px-6 relative overflow-hidden bg-ivory">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-white rounded-3xl p-8 sm:p-16 border border-champagne shadow-2xl text-center overflow-hidden"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/40 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/40 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-xl pointer-events-none" />

          {/* Top Invitation Sub-header */}
          <div className="flex justify-center mb-4">
            <span className="p-3 rounded-full bg-champagne-light/50 text-gold-dark">
              <CalendarHeart className="w-6 h-6" />
            </span>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-2">
            The Wedding Celebration of
          </p>

          <h2 className="text-3xl sm:text-5xl font-serif text-espresso tracking-wide font-normal mb-6">
            With Love & Blessings
          </h2>

          <FloralDivider className="my-6" />

          <p className="text-base sm:text-xl font-cormorant italic text-espresso/80 max-w-2xl mx-auto leading-relaxed mb-3">
            "Together with our families, we joyfully invite you to celebrate the beginning of our forever."
          </p>

          <p className="text-xs sm:text-sm font-serif italic text-gold-dark max-w-xl mx-auto mb-8">
            “And now these three remain: faith, hope and love. But the greatest of these is love.” — 1 Corinthians 13:13
          </p>

          {/* Couple's Names Calligraphy Display */}
          <div className="py-6 flex flex-col items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl font-cinzel text-espresso tracking-[0.2em] uppercase font-normal">
              SHILJO
            </span>
            <span className="text-3xl sm:text-5xl font-script text-gold my-1 sm:my-2 inline-block transform -rotate-6">
              &
            </span>
            <span className="text-3xl sm:text-5xl md:text-6xl font-cinzel text-espresso tracking-[0.2em] uppercase font-normal">
              ROSEMARIYA
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-espresso/60 mt-5 font-medium">
              Requests the honor of your presence
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-champagne/60 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-espresso/70">
            <span>Thursday</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <span className="font-semibold text-espresso">14 January 2027</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <span>St. Mary's Church (Ottapalam) & Suriya Auditorium</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
