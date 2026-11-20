import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, Church, Wine } from 'lucide-react';
import { FloralDivider } from './FloralDecorations';

export const LocationSection: React.FC = () => {
  const [activeVenue, setActiveVenue] = useState<'church' | 'reception'>('church');

  const venues = {
    church: {
      name: "St. Mary's Church, Ottapalam",
      subtitle: "Holy Matrimony (10:30 AM)",
      address: "QCCC+8WQ, Palakkad - Ponnani Rd, Palappuram, Keralam 679103, India",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=St.+Mary%27s+Church+Ottappalam+QCCC%2B8WQ+Palappuram+679103",
      embedUrl: "https://maps.google.com/maps?q=St.+Mary's+Church+Ottappalam+Palappuram+679103&t=&z=16&ie=UTF8&iwloc=&output=embed",
      badge: "Ceremony Venue • 10:30 AM",
      parking: "Dedicated church compound parking available for wedding guests.",
    },
    reception: {
      name: "Suriya Auditorium",
      subtitle: "Wedding Reception & Lunch (12:30 PM)",
      address: "Suriya Auditorium (10°46'01.5\"N 76°24'16.1\"E), Kerala, India",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=10.767094,76.404483",
      embedUrl: "https://maps.google.com/maps?q=10.767094,76.404483&t=&z=16&ie=UTF8&iwloc=&output=embed",
      badge: "Reception Venue • 12:30 PM",
      parking: "Spacious auditorium parking on-site with valet attendants.",
    },
  };

  const current = venues[activeVenue];

  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Getting There</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-espresso mt-2 mb-4">Wedding Locations & Directions</h2>
          <FloralDivider />
          <p className="text-espresso/70 text-sm max-w-md mx-auto">
            Switch between the Ceremony and Reception tabs below to view detailed venue addresses and live interactive maps.
          </p>
        </div>

        {/* Venue Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-ivory border border-champagne shadow-inner gap-2">
            <button
              onClick={() => setActiveVenue('church')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeVenue === 'church'
                  ? 'bg-gold text-white shadow-md'
                  : 'text-espresso/70 hover:text-espresso'
              }`}
            >
              <Church className="w-4 h-4" />
              <span>1. Ceremony: St. Mary's Ottapalam</span>
            </button>
            <button
              onClick={() => setActiveVenue('reception')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeVenue === 'reception'
                  ? 'bg-gold text-white shadow-md'
                  : 'text-espresso/70 hover:text-espresso'
              }`}
            >
              <Wine className="w-4 h-4" />
              <span>2. Reception: Suriya Auditorium</span>
            </button>
          </div>
        </div>

        {/* Sophisticated Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Details & Practical Info */}
          <motion.div
            key={activeVenue + '-info'}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-ivory rounded-3xl p-8 sm:p-10 border border-champagne flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                  {current.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-espresso">
                  {current.name}
                </h3>
              </div>

              <div className="flex items-start space-x-3 text-espresso/80">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-espresso">Complete Address:</p>
                  <p className="text-sm text-espresso/70 mt-1 leading-relaxed">
                    {current.address}
                  </p>
                  {activeVenue === 'reception' && (
                    <div className="mt-2 text-xs font-mono bg-champagne/40 px-2.5 py-1 rounded inline-block text-espresso">
                      Coordinates: 10.767094, 76.404483
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-champagne/60 pt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Car className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-espresso">Parking & Arrival</h4>
                    <p className="text-xs text-espresso/70 mt-0.5">
                      {current.parking}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-champagne/60">
              <a
                href={current.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-4 px-6 rounded-full bg-espresso text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold transition-colors duration-300 shadow-md group"
              >
                <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Google Map Embed */}
          <motion.div
            key={activeVenue + '-map'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-champagne shadow-lg min-h-[420px] relative bg-champagne-light"
          >
            <iframe
              title={`${current.name} Map`}
              src={current.embedUrl}
              className="w-full h-full min-h-[420px] border-0 filter contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-champagne text-xs text-espresso font-medium flex items-center space-x-2 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{current.badge}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
