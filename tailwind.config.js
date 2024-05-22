/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-smoke": "#f5f5f5",
      },
      keyframes: {
        pingOnce: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        pingOnce: "pingOnce 1s cubic-bezier(0, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};