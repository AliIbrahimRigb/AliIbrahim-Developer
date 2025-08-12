/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:'540px',
        md:'720px',
        lr:'960px',
        xl:'1140px',
        xxl:'1320px'
      }
    },
    keyframes:{
      moveRigth:{
        "from" : {opacity:'0'},
        'to' :{opcity:'1'}
      },
    },
    animation:{
      moveRigth:"moveRigth 1s ease-in-out 1"
    },
    
  },
  plugins: [],
}