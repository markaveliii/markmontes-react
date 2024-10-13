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
        'space' : "url('public/assets/nasa-unsplash.jpg')",
        'goldLight' : "url('public/assets/rene-bohmer.jpg')",
        'bwBox' : "url('public/assets/shubham-dhage.jpg')",
        'goldRain' : "url('public/assets/joshua-sortino.jpg')",
        'blueRain' : "url('public/assets/christopher-burns.jpg')",
        'blackRain' : "url('public/assets/blackCubeRain.jpg')",
        'goldForest' : "url('public/assets/goldForest.jpg')",
        'meteorShower' : "url('public/assets/meteorShower.jpg')",

      },
      gridTemplateColumns: {
        '70/30' : '70% 28%',
      }
    },
  },
  plugins: [],
}