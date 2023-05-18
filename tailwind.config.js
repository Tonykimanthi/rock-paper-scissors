/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*html"],
  theme: {
    extend: {
      keyframes: {
        moveLeft: {
          '0%':{transform: 'translateX(10em)'},
          '100%':{transform: 'translateX(0)'},
        },
        moveRight:{
          '0%':{transform: 'translateX(-10em)'},
          '100%':{transform: 'translateX(0)'},
        }
      },
      animation:{
        'moveLeft':"moveLeft 1s ease-in-out",
        'moveRight':"moveRight 1s ease-in-out"
      }
    },
  },
  plugins: [],
}

