/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
  extend: {
    colors: {
      emerald: {
        600: '#059669', // or your custom emerald shade
      },
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
  },
},
}
