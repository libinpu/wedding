import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const targetDate = new Date('2027-01-14T10:30:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ivory via-champagne-light/30 to-ivory relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Counting Down The Moments</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-espresso mt-2 mb-4">Until We Say "I Do"</h2>
          <p className="text-espresso/70 text-sm max-w-md mx-auto mb-12">
            Every passing second brings us closer to the most cherished day of our lives.
          </p>
        </motion.div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="luxury-glass p-6 sm:p-8 rounded-2xl border border-champagne shadow-sm relative group hover:border-gold/50 transition-all duration-300"
            >
              {/* Subtle gold decorative corner */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
              
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-espresso tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-dark mt-2 font-medium">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small target date badge */}
        <div className="mt-10 inline-block px-5 py-2 rounded-full border border-champagne text-xs uppercase tracking-[0.2em] text-espresso/60 bg-white/50">
          Target Date: 14 January 2027
        </div>
      </div>
    </section>
  );
};
