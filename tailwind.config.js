import src from 'tailwindcss-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slide: {
          'from': {transform: 'translateX(0)'},
          'to': {transform: 'translateX(-100%)'}
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slide: 'slide 30s linear infinite',
      },
      fontWeight: {
        normal: 400, 
        bold: 800,   
      },
    },
  },
  plugins: [
    require('tailwindcss-motion'),
    require('tailwindcss-intersect') 
  ]
  
}