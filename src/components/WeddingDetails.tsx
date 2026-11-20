import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Church, Wine } from 'lucide-react';
import { FloralDivider } from './FloralDecorations';

export const WeddingDetails: React.FC = () => {
  const events = [
    {
      type: 'The Ceremony',
      icon: Church,
      title: 'Holy Matrimony',
      date: 'Thursday, 14 January 2027',
      time: '10:30 AM (Please arrive by 10:00 AM)',
      venue: "St. Mary's Church, Ottapalam",
      location: 'QCCC+8WQ, Palakkad - Ponnani Rd, Palappuram, Keralam 679103, India',
      attire: 'Traditional / Formal Wedding Attire',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=St.+Mary%27s+Church+Ottappalam+QCCC%2B8WQ+Palappuram+679103',
      image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80',
    },
    {
      type: 'The Celebration',
      icon: Wine,
      title: 'Wedding Reception',
      date: 'Thursday, 14 January 2027',
      time: '12:30 PM Onwards (Lunch & Celebration)',
      venue: 'Suriya Auditorium',
      location: 'Suriya Auditorium (10°46\'01.5"N 76°24\'16.1"E), Kerala, India',
      attire: 'Festive & Elegant',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=10.767094,76.404483',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="details" className="py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Itinerary & Venues</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-espresso mt-2 mb-4">Wedding Details</h2>
          <FloralDivider />
          <p className="text-espresso/70 text-sm max-w-md mx-auto">
            We have gathered all the essential information to help you plan your presence at our celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden border border-champagne shadow-lg group hover:shadow-2xl hover:border-gold/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.venue}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end text-white">
                      <div>
                        <span className="text-[11px] uppercase tracking-[0.25em] text-champagne block">
                          {event.type}
                        </span>
                        <h3 className="text-2xl font-serif">{event.title}</h3>
                      </div>
                      <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-champagne border border-white/20">
                        <Icon className="w-5 h-5 text-champagne" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 space-y-5">
                    <div className="flex items-start space-x-3.5 text-espresso/80">
                      <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-espresso/50 block font-medium">Date</span>
                        <span className="text-sm font-medium text-espresso">{event.date}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5 text-espresso/80">
                      <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-espresso/50 block font-medium">Time</span>
                        <span className="text-sm font-medium text-espresso">{event.time}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5 text-espresso/80">
                      <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-espresso/50 block font-medium">Venue & Location</span>
                        <span className="text-sm font-semibold text-espresso block">{event.venue}</span>
                        <span className="text-xs text-espresso/70 block mt-0.5">{event.location}</span>
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-espresso/60 italic border-t border-champagne/40">
                      Attire: <span className="text-espresso font-medium not-italic">{event.attire}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl border border-champagne bg-champagne-light/30 hover:bg-gold hover:text-white hover:border-gold text-espresso text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
