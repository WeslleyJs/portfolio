/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      rotate:{
        'rotate17':'17deg',
        'rotate17-2':'-17deg'
      }
    },
  },
  plugins: [],
}
