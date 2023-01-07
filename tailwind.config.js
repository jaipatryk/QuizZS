/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a092d",
        quizLetGray: "#282e3e",
        zs1green: "#00bfa6",
        cardbg: "#2e3856",
      },
    },
  },
  plugins: [],
};
