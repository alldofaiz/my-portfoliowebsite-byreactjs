/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#FFB400",
        fontColor: "#FFFFFF",
        secondfontColor: "#19B1CB",
        primaryColor: '#04011C',
        secondColor: '#231946',
        thirdColor: '#E114DA',
        fourthColor: '#E314D6',
      }
    },
  },
  plugins: [],
}

