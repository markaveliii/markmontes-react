/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Verdana' , 'sans-serif']
      },
      backgroundImage:{
        'space' : "url('assets/nasa-unsplash.jpg')",
        'goldLight' : "url('assets/rene-bohmer.jpg')",
        'bwBox' : "url('assets/shubham-dhage.jpg')",
        'goldRain' : "url('assets/joshua-sortino.jpg')",
        'blueRain' : "url('assets/christopher-burns.jpg')",
        'blackRain' : "url('assets/blackCubeRain.jpg')",
        'goldForest' : "url('assets/goldForest.jpg')",
        'meteorShower' : "url('assets/meteorShower.jpg')",

      },
      gridTemplateColumns: {
        '70/30' : '70% 28%',
      }
    },
  },
  plugins: [],
}