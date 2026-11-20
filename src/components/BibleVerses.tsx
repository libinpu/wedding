import React from 'react';
import { motion } from 'framer-motion';
import { FloralDivider } from './FloralDecorations';
import { BookOpen, Sparkles } from 'lucide-react';

interface Scripture {
  verse: string;
  reference: string;
  subtitle: string;
}

export const BibleVerses: React.FC = () => {
  const verses: Scripture[] = [
    {
      verse: '“Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love never fails.”',
      reference: '1 Corinthians 13:4–8',
      subtitle: 'The Essence of Love',
    },
    {
      verse: '“Therefore what God has joined together, let no one separate.”',
      reference: 'Mark 10:9',
      subtitle: 'Holy Covenant',
    },
    {
      verse: '“Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. A cord of three strands is not quickly broken.”',
      reference: 'Ecclesiastes 4:9–12',
      subtitle: 'Strength in Unity',
    },
  ];

  return (
    <section id="scripture" className="py-24 bg-gradient-to-b from-white via-champagne-light/20 to-white relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-gold font-medium mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Sacred Scripture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-espresso mt-1 mb-4">
            Blessed by His Word
          </h2>
          <FloralDivider />
          <p className="text-espresso/70 text-sm max-w-lg mx-auto italic font-cormorant text-lg">
            "We build our home upon faith, hope, and love; but the greatest of these is love."
          </p>
        </div>

        {/* Feature Verse Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-glass rounded-3xl p-8 sm:p-14 border border-gold/40 shadow-xl text-center max-w-4xl mx-auto mb-12 relative overflow-hidden"
        >
          <div className="absolute top-6 left-6 text-gold/20 text-6xl font-serif leading-none select-none pointer-events-none">
            “
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-cormorant italic font-medium text-espresso leading-relaxed max-w-2xl mx-auto mb-6">
            {verses[0].verse}
          </p>
          <div className="inline-flex items-center space-x-3">
            <span className="h-[1px] w-8 bg-gold"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-dark font-semibold">
              {verses[0].reference}
            </span>
            <span className="h-[1px] w-8 bg-gold"></span>
          </div>
        </motion.div>

        {/* Supporting Verses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {verses.slice(1).map((item, idx) => (
            <motion.div
              key={item.reference}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-champagne shadow-sm hover:shadow-md hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-medium block mb-2">
                  {item.subtitle}
                </span>
                <p className="text-base sm:text-lg font-cormorant italic text-espresso/85 leading-relaxed mb-6">
                  {item.verse}
                </p>
              </div>
              <div className="pt-4 border-t border-champagne/50 flex items-center justify-between text-xs text-espresso/60 uppercase tracking-widest font-mono">
                <span>{item.reference}</span>
                <Sparkles className="w-3.5 h-3.5 text-gold/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
