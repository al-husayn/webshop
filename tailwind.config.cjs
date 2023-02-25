/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: "#FFFFFF",
      secondary: '#F5F5F5',
      accent: "#FDB813",
      transparent: "transparent",
      current: "currentColor",
      tomato: "#FF6347",
      teal: "#008080"
    },
  },
  plugins: [],
}
