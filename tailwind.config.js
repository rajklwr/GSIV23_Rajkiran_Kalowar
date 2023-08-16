/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: { // Add this block to define custom background colors
        'white-bright': '#D8D8D8',
        'gray' : '#9B9B9B',
        'darkgray' : '#4A4A4A'
      },
      colors: {
        'white-bright': '#D8D8D8',
        'gray' : '#9B9B9B',
        'darkgray' : '#4A4A4A'
      }
    },
  },
  plugins: [],
}
