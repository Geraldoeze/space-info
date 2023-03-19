/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarBg: 'rgba(255, 255, 255, 0.04)',
        navBg: 'rgba(255, 255, 255, 0.7)',
        
        


        primary: "#E5E5E5",
        secondary: "#F7F7F7",
        textWhite:'rgba(196, 196, 196, 1)',
       textYellow: "rgba(241, 182, 0, 1)",
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
