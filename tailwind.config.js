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
      keyframes: {
        // Animate background-position horizontally
        gradientX: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        elasticus: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "50.1%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        blob: {
          "0%": {
            borderRadius: "42% 58% 68% 32% / 34% 42% 58% 66%",
          },
          "25%": {
            borderRadius: "58% 42% 35% 65% / 40% 30% 70% 60%",
          },
          "50%": {
            borderRadius: "68% 32% 45% 55% / 58% 68% 32% 42%",
          },
          "75%": {
            borderRadius: "32% 68% 60% 40% / 48% 38% 62% 52%",
          },
          "100%": {
            borderRadius: "42% 58% 68% 32% / 34% 42% 58% 66%",
          },
        },
      },
      animation: {
        "gradient-x": "gradientX 15s ease infinite",
        elasticus: "elasticus 10.2s cubic-bezier(1,1,1,1) infinite",
        blob: "blob 10s ease-in-out infinite",
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
