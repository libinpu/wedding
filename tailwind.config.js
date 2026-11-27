/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Royal Wedding Palette: Warm Alabaster, Rose-Champagne, Royal Antique Gold, Deep Midnight Espresso
        ivory: '#FAF6F0',
        champagne: '#E5D5C3',
        'champagne-light': '#F5ECE1',
        gold: {
          light: '#E2CA9E',
          DEFAULT: '#BF9854',
          dark: '#9A7432',
        },
        sage: {
          light: '#BFC7B7',
          DEFAULT: '#9AA690',
          dark: '#6F7B65',
        },
        rose: {
          subtle: '#E8D4CE',
          dusty: '#C99D93',
          burgundy: '#5A2A27',
        },
        espresso: '#2B2118',
        'espresso-light': '#4A3B2C',
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
