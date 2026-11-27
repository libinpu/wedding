import React from 'react';
import { motion } from 'framer-motion';
import { FloralDivider } from './FloralDecorations';

interface StoryMoment {
  number: string;
  title: string;
  quote: string;
  image: string;
  date: string;
}

export const LoveStory: React.FC = () => {
  const moments: StoryMoment[] = [
    {
      number: '01',
      title: 'The First Meeting',
      quote: 'Every beautiful story has a beginning. Ours started with a simple hello.',
      image: '/couple-story.jpg',
      date: 'Spring 2021',
    },
    {
      number: '02',
      title: 'The Proposal',
      quote: 'A special moment, a beautiful promise, and a lifetime of love.',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
      date: 'Autumn 2024',
    },
    {
      number: '03',
      title: 'The Wedding',
      quote: 'Now we begin our forever, surrounded by the people we love.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      date: '14 January 2027',
    },
  ];

  return (
    <section id="story" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">How It All Began</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-espresso mt-2 mb-4">Our Love Story</h2>
          <FloralDivider />
          <p className="text-espresso/70 text-sm italic font-cormorant text-lg">
            "A journey woven with shared dreams, endless laughter, and unwavering devotion."
          </p>
        </div>

        {/* Timeline Stories */}
        <div className="space-y-20 md:space-y-32">
          {moments.map((moment, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={moment.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-10 md:gap-16`}
              >
                {/* Image side with editorial framing */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] bg-champagne-light">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.98] contrast-[1.02]"
                    />
                    <div className="absolute inset-0 bg-espresso/10 transition-opacity group-hover:opacity-0" />
                  </div>
                  {/* Decorative Frame border offset */}
                  <div
                    className={`absolute -inset-3 border border-gold/40 rounded-2xl -z-10 transition-transform duration-500 group-hover:scale-102 ${
                      isEven ? 'translate-x-2 translate-y-2' : '-translate-x-2 translate-y-2'
                    }`}
                  />
                </div>

                {/* Text Content side */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="inline-block text-4xl sm:text-5xl font-serif text-gold/30 font-light mb-2">
                    {moment.number}
                  </div>
                  <span className="block text-xs uppercase tracking-[0.25em] text-gold-dark font-medium mb-2">
                    {moment.date}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-espresso mb-4">
                    {moment.title}
                  </h3>
                  <p className="text-base sm:text-lg font-cormorant italic text-espresso/80 leading-relaxed max-w-lg">
                    "{moment.quote}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
