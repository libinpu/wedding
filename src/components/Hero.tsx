import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Zoom & Soft Parallax feeling */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('/couple-hero.jpg')`,
          backgroundPosition: 'center 25%',
        }}
      >
        {/* Soft Vignette & Luxury Dark Gold/Espresso Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent opacity-95 h-36 bottom-0" />
      </div>

      {/* Decorative Frame */}
      <div className="absolute inset-4 md:inset-8 border border-white/25 pointer-events-none rounded-sm z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Small top text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center space-x-3 mb-4"
        >
          <span className="h-[1px] w-8 bg-champagne/80"></span>
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase font-light text-champagne drop-shadow-sm">
            TOGETHER WITH OUR FAMILIES
          </p>
          <span className="h-[1px] w-8 bg-champagne/80"></span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-4xl font-script tracking-wide text-champagne mb-2"
        >
          We're Getting Married!
        </motion.h2>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
          className="my-3 drop-shadow-lg text-center flex flex-col items-center"
        >
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-wide lowercase first-letter:capitalize">
            shiljo
          </div>
          <div className="my-1 sm:my-2">
            <span className="text-3xl sm:text-5xl md:text-6xl font-script text-gold-light inline-block transform -rotate-6">
              &
            </span>
          </div>
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-wide lowercase first-letter:capitalize">
            rosemariya
          </div>
        </motion.div>

        {/* Wedding Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center space-x-2 my-4 px-6 py-1.5 rounded-full bg-black/20 backdrop-blur-sm border border-champagne/30 text-champagne-light text-xs sm:text-sm tracking-[0.25em] uppercase"
        >
          <Calendar className="w-4 h-4 text-gold-light mr-1 inline" />
          <span>14 JANUARY 2027</span>
        </motion.div>

        {/* Elegant Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-base sm:text-xl font-cormorant italic text-white/95 max-w-xl mb-2 tracking-wide font-light"
        >
          "Above all, love each other deeply, because love covers over a multitude of sins."
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-xs uppercase tracking-[0.25em] text-champagne mb-8 font-light"
        >
          — 1 Peter 4:8
        </motion.p>

        {/* Premium Gold CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href="#invitation"
            className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-espresso font-medium text-xs tracking-[0.25em] uppercase shadow-2xl hover:shadow-gold/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>EXPLORE OUR WEDDING</span>
            <Sparkles className="w-4 h-4 text-espresso group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.a
        href="#invitation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 z-20 flex flex-col items-center text-white/70 hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-1">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
};
