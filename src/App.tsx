import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Invitation } from './components/Invitation';
import { Countdown } from './components/Countdown';
import { LoveStory } from './components/LoveStory';
import { BibleVerses } from './components/BibleVerses';
import { WeddingDetails } from './components/WeddingDetails';
import { PhotoGallery } from './components/PhotoGallery';
import { WishesSection } from './components/WishesSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingPetals } from './components/FloralDecorations';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-ivory text-espresso font-sans selection:bg-champagne selection:text-espresso">
      {/* Subtle Floating Petals Background */}
      <FloatingPetals />

      {/* Floating Ambient Music Controller */}
      <MusicPlayer />

      {/* Sticky / Scrolled Header */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Formal Invitation Card */}
        <Invitation />

        {/* 3. Live Countdown Timer */}
        <Countdown />

        {/* 4. Our Love Story Timeline */}
        <LoveStory />

        {/* Sacred Christian Bible Verses */}
        <BibleVerses />

        {/* 5. Wedding Details (Ceremony & Reception) */}
        <WeddingDetails />

        {/* 6. Photo Gallery with Lightbox */}
        <PhotoGallery />

        {/* 7. Guest Wishes & Blessings Section */}
        <WishesSection />

        {/* 8. Wedding Location with Maps */}
        <LocationSection />
      </main>

      {/* 9. Elegant Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
