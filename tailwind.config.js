/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        color1: "#eee",
        color2: "#bbb",
        color3: "#888",
        lightColor1: "#333",
        lightColor2: "#666",
        lightColor3: "#999",
      },
    },
  },
  plugins: [],
};
