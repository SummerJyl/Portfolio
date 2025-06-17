/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
  extend: {
  colors: {
    sage: {
      light: '#EAE7DC',
      DEFAULT: '#A8B5A2',
      dark: '#6F7963',
    },
  },
}
}
}