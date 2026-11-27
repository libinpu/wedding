/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Palette: Mocha Brown, Champagne Gold & Burnt Amber
        ivory: '#FAF6F0',           // Warm cream backdrop
        champagne: {
          light: '#F4ECE1',
          DEFAULT: '#E5D4BE',       // Champagne
          gold: '#D4AF37',          // Champagne Gold
          shimmer: '#EED9B3',
        },
        gold: {
          light: '#E5C483',
          DEFAULT: '#D4AF37',       // Rich Champagne Gold
          dark: '#B08832',
        },
        amber: {
          light: '#D97736',
          DEFAULT: '#C05A1F',       // Burnt Amber
          dark: '#9E4413',
          rich: '#A34818',
        },
        mocha: {
          light: '#5E4336',
          DEFAULT: '#3D281D',       // Rich Mocha Brown
          dark: '#2A1A12',
          deep: '#1F130D',
        },
        espresso: '#3D281D',         // Map espresso to Mocha Brown
        'espresso-light': '#5E4336',
        sage: {
          light: '#C59A78',
          DEFAULT: '#C05A1F',       // Replaced with Amber
          dark: '#9E4413',
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
