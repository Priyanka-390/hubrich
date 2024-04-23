/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'herobtn': 'linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)',
        'text': 'linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)',
      },
      fontFamily: {
        'inter': '"Inter", sans-serif',
        'poppins':'"Poppins", sans-serif'
      }
    },
  },
  plugins: [],
};
