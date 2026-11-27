/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds & ivory tones
        ivory: '#FAF6F0',
        'ivory-warm': '#F5EFE6',
        
        // Champagne Gold Palette
        champagne: {
          light: '#F5ECDF',
          DEFAULT: '#E3CCA8',
          gold: '#D4AF6A',
          metallic: '#C8A25D',
        },
        gold: {
          light: '#ECC880',
          DEFAULT: '#D4AF6A',
          dark: '#B0883C',
        },

        // Mocha Brown (Deep, rich, luxurious velvet chocolate tones)
        mocha: {
          light: '#533E33',
          DEFAULT: '#362319',
          dark: '#24160E',
          deep: '#1D110B',
        },
        espresso: '#362319',
        'espresso-light': '#533E33',

        // Burnt Amber (Warm terracotta, autumn glow, romantic warmth)
        amber: {
          burnt: '#B85D19',
          warm: '#C96D29',
          glow: '#D97E3B',
          soft: '#E89F6B',
        },

        sage: {
          light: '#C1C5AF',
          DEFAULT: '#A5AA91',
          dark: '#7D8269',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Bodoni Moda"', '"Playfair Display"', 'Georgia', 'serif'],
        bodoni: ['"Bodoni Moda"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['Montserrat', 'Lato', 'sans-serif'],
        script: ['"Alex Brush"', '"Pinyon Script"', '"Great Vibes"', 'cursive'],
        alex: ['"Alex Brush"', 'cursive'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(15px) rotate(-3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
