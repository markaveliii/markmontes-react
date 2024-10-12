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
        'space' : "url('src/assets/nasa-unsplash.jpg')",
        'goldLight' : "url('src/assets/rene-bohmer.jpg')",
        'bwBox' : "url('src/assets/shubham-dhage.jpg')",
        'goldRain' : "url('src/assets/joshua-sortino.jpg')",
        'blueRain' : "url('src/assets/christopher-burns.jpg')",
        'blackRain' : "url('src/assets/blackCubeRain.jpg')",
        'goldForest' : "url('src/assets/goldForest.jpg')",
        'meteorShower' : "url('src/assets/meteorShower.jpg')",

      },
      gridTemplateColumns: {
        '70/30' : '70% 28%',
      }
    },
  },
  plugins: [],
}