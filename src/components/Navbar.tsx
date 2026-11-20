import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Scripture', href: '#scripture' },
    { name: 'Details', href: '#details' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Wishes', href: '#wishes' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/90 backdrop-blur-md shadow-sm py-4 border-b border-champagne/40'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-6 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="group flex items-center space-x-2 tracking-widest text-lg font-serif uppercase font-semibold"
        >
          <span className={scrolled ? 'text-espresso' : 'text-white'}>Shiljo</span>
          <Heart className={`w-3.5 h-3.5 text-gold inline-block transition-transform duration-300 group-hover:scale-125 fill-gold`} />
          <span className={scrolled ? 'text-espresso' : 'text-white'}>Rosemariya</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs tracking-[0.2em] uppercase font-medium transition-colors hover:text-gold ${
                scrolled ? 'text-espresso/80' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#wishes"
            className="px-5 py-2 text-xs uppercase tracking-widest bg-gold hover:bg-gold-dark text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Wish Couple
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-espresso' : 'text-white'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory/98 backdrop-blur-lg border-b border-champagne px-6 py-8 shadow-xl">
          <nav className="flex flex-col space-y-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-espresso font-serif text-lg tracking-wider hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#wishes"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block px-8 py-3 text-xs uppercase tracking-widest bg-gold text-white rounded-full font-medium shadow-md"
              >
                Send Wishes
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
