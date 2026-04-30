/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#1e40af",
      },
      boxShadow: {
        premium: "0 10px 30px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};