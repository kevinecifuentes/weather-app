/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        clearSkyDay: '',
        clearSkyNight: 'url()',
        scatteredCloudDay: 'url(/images/scatteredCloudsDay.jpg)',
        scatteredCloudNight: 'url()',
        cloudyDay: 'url()',
        cloudyNight: 'url()',
        fogDay: 'url()',
        fogNight: 'url()',
        hailDay: 'url()',
      },
      fontFamily: {
        'principal-font': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
