/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg':"url ('./img/bg.jpg')"
      }
    },
  },
  plugins: [],
}

