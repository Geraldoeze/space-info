/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarBg: 'rgba(255, 255, 255, 0.4)',
        navBg: 'rgba(255, 255, 255, 0.7)',
      
        textBlack: "rgba(0, 0, 0, 1)",
      },
      fontSize: {
        nom: 'font-normal',
        bold: 'font-bold',
      },
      fontFamily: {
        poppins: ["Barlow", "sans-serif"],
        condense: '"Barlow Condensed"',
        belle: 'Bellefair',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
}
