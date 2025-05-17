/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
     title:  ["Anton", "sans-serif"],
     montserrat:  ["Montserrat", "sans-serif"],
     unbounded:["Unbounded", "sans-serif"]},
      colors: {
        russian: {
          '50': '#F1EDF5', 
          '100': '#E1DAE8', 
          '200': '#B4A7C7', 
          '300': '#897BA6', 
          '400': '#403763', 
          '500': '#0d0c22', 
          '600': '#0B0A1F', 
          '700': '#08071A', 
          '800': '#050414', 
          '900': '#03020F', 
          '950': '#01010A',
        },
      },
    },
  },
  plugins: [],
}
