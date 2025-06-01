/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#65E1FF',
          DEFAULT: '#00C6FF',
          dark: '#0094CC',
        },
        accent: {
          light: '#B875FF',
          DEFAULT: '#8400FF',
          dark: '#5E00CC',
        },
      },
      boxShadow: {
        'lg-soft': '0 10px 25px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
