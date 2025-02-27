const withMT = require("@material-tailwind/react/utils/withMT");


/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        primary: '#23BE0A',
        secondary: '#59C6D2',
      }
    },
    fontFamily: {
      serif : ["Playfair Display", "serif"],
    },
  },
  plugins: [],
});
