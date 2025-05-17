/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'my-bg-color' : '#fdfbf7',
          'my-text-color' : '#0f3e45',
          'my-text-color-2' : '#1b252b'
        }
      },
    },
    plugins: [],
  }