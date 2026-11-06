/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5B800', // Vibrant Radiant Yellow from Kopra Pak Logo & Sweet Product
          hover: '#E5A500',   // Warm Rich Golden Yellow
          dark: '#C27803',    // Golden Saffron Amber for high-contrast reading
          light: '#FEE388',   // Sunlit Tender Coconut Yellow
          gold: '#F5B800',
        },
        'deep-brown': {
          DEFAULT: '#3D1505', // Deep Royal Chocolate Mahogany from Kopra Pak logo typography
          dark: '#240B02',
          light: '#54220E',
        },
        cream: {
          DEFAULT: '#FFFDF9', // Pure tender coconut cream
          card: '#FBF5EA',    // Rich mawa ivory
        },
        'light-beige': {
          DEFAULT: '#EDE1D1',
          hover: '#E2D2BF',
        },
        'muted-green': {
          DEFAULT: '#2E6B3E', // Emerald pistachio garnish
          dark: '#214F2D',
          light: '#428956',
        },
        gold: {
          DEFAULT: '#F5B800', // Radiant Yellow matching Kopra Pak sweet cubes & logo splash
          light: '#FEE388',
          dark: '#C27803',
        },
        'dark-text': '#301608',
        'muted-text': '#735443',
      },
      fontFamily: {
        serif: ['"Tenor Sans"', 'Georgia', 'serif'],
        sans: ['"Nunito"', 'system-ui', '-apple-system', 'sans-serif'],
        tenor: ['"Tenor Sans"', 'serif'],
        nunito: ['"Nunito"', 'system-ui', '-apple-system', 'sans-serif'],
        jost: ['"Jost"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'sm': 'none',
        DEFAULT: 'none',
        'md': 'none',
        'lg': 'none',
        'xl': 'none',
        '2xl': 'none',
        'inner': 'none',
        'none': 'none',
        'subtle': 'none',
        'warm': 'none',
        'luxury': 'none',
      },
      dropShadow: {
        'sm': 'none',
        DEFAULT: 'none',
        'md': 'none',
        'lg': 'none',
        'xl': 'none',
        '2xl': 'none',
        'none': 'none',
      },
    },
  },
  plugins: [],
}
