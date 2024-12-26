/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#6a1c32',
        customRed2: '#956876',
        customYellow: '#bc965c',
        customGreen: '#009245',
        customBlue: '#2D8DF9',
        customGray: "#C7CBD4",
        customBlueSky: '#25C3E3',
        customPurple: '#8332EE'
      },
      width: {
        '155': '155%'
      },
    },
  },
  plugins: [],
}

import plugin from '@tailwindcss/forms';