/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      maxWidth: {
        'base': '83.875rem',
      },
      colors: {
        brand: {
          brown: {
            '400': '#9E211B',
            '600': '#84100B',
          },
          pink: {
            300: '#F2F4F7',
            500: '#7D8693'
          }
        }
      }
    },
  },
  plugins: [],
}

