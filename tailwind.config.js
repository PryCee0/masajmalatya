/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1C1917',
          gold: '#D4A373',
          accent: '#D4A373',
          primary: '#C58F5E',
          secondary: '#A26E40',
          light: '#FAEDCD',
          cream: '#FEFAE0',
          muted: '#E9D8A6'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
