import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart } from 'lucide-react';
import { FloralDivider } from './FloralDecorations';

interface GalleryImage {
  url: string;
  category: string;
  title: string;
  aspect: string;
}

export const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const photos: GalleryImage[] = [
    {
      url: '/couple-hero.jpg',
      category: 'portraits',
      title: 'Together Forever',
      aspect: 'aspect-[3/4]',
    },
    {
      url: '/couple-story.jpg',
      category: 'moments',
      title: 'Our Beautiful Beginning',
      aspect: 'aspect-[3/4]',
    },
    {
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
      category: 'pre-wedding',
      title: 'The Engagement Promise',
      aspect: 'aspect-square',
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
      category: 'moments',
      title: 'Laughter Under Sunset',
      aspect: 'aspect-[4/5]',
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
      category: 'family',
      title: 'Family Celebration',
      aspect: 'aspect-[4/3]',
    },
    {
      url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85',
      category: 'portraits',
      title: 'Golden Hour Embrace',
      aspect: 'aspect-[3/4]',
    },
  ];

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Captured Moments</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-espresso mt-2 mb-4">Photo Gallery</h2>
          <FloralDivider />
          <p className="text-espresso/70 text-sm max-w-md mx-auto">
            A glimpse into the cherished milestones leading up to our sacred day.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'portraits', label: 'Couple Portraits' },
            { id: 'pre-wedding', label: 'Pre-Wedding' },
            { id: 'moments', label: 'Romantic Moments' },
            { id: 'family', label: 'Family' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gold text-white shadow-md'
                  : 'bg-ivory text-espresso/70 hover:bg-champagne hover:text-espresso'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.title + index}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedImage(photo)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md bg-champagne-light/50"
            >
              <div className={`w-full ${photo.aspect} overflow-hidden`}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-espresso/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase tracking-widest text-champagne mb-1">
                  {photo.category}
                </span>
                <h4 className="text-lg font-serif">{photo.title}</h4>
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />

              <div className="p-4 sm:p-6 bg-white border-t border-champagne flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold block">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-serif text-espresso">{selectedImage.title}</h3>
                </div>
                <div className="flex items-center text-xs text-gold">
                  <Heart className="w-4 h-4 fill-gold mr-1" />
                  <span>Shiljo & Rosemariya</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
