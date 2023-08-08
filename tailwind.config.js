/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{"color-primary":"rgb(13 13 43)",
      "color-secondary":"rgb(37 37 64)",
      "color-white":"#fff",
      "color-section" :"rgb(249 250 251)",
    },
    fontFamily:{
      "custom":['Oxanium', 'cursive'],
    }
    },
    screens:{
      sm: "640px",
      md: "768px",
      xmd:"950px",
      lg: "1024px",
      xl: "1280px"
    },
  },
  plugins: [],
}
