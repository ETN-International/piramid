/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eu-blue': '#003399',
        'eu-yellow': '#FFCC00',
        'piramid-orange': '#F59E0B',
        'piramid-gold': '#D97706',
        'piramid-navy': '#0177bd',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'premium': '0 20px 50px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
