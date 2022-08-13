/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: '#3294F8',
        background: '#071422',
        'base-title': '#E7EDF4',
        'base-subtitle': '#C4D4E3',
        'base-text': '#AFC2D4',
        'base-profile': '#0B1B2B',
        'base-input': '#040F1A',
        'base-post': '#112131',
        'base-border': '#1C2F41',
        'base-label': '#3A536B',
        'base-span': '#7B96B2',
      },
    },
  },
  plugins: [],
}
