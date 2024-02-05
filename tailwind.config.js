/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
       serif: ['Playfair Display', 'serif'],
       Poppins: ['sans-serif'],
      },
    },
  },
  plugins: [],
}

