/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontFamily : {
        'nextLigth': ["NEXT ART"],
        'nextsemi': ["NEXT ART semi"],
        'maven': ["Maven Pro"]
      },
      colors: {
        bgBlack:'#1A1A1A'
      },
    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "1150px",
      md: "1460px",
      lg: "1700px",
      xl: "1900px",
    },
  },
  plugins: [],
}