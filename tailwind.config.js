/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        clearBg: 'url(/images/clear.jpg)',
        cloudsBg: 'url(/images/clouds.jpg)',
        drizzleBg: 'url(/images/drizzle.jpg)',
        rainBg: 'url(/images/rain.jpg)',
        snowBg: 'url(/images/snow.jpg)',
        thunderstromBg: 'url(/images/thunderstrom.jpg)',
      },
      fontFamily: {
        'principal-font': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
