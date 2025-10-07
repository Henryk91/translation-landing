/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0b0f14",     // dark background (adjust to match site)
          text: "#e6f1ff",
          accent: "#31c48d", // green accent similar to your heading color
          fg: "#9fb3c8"
        }
      }
    }
  },
  plugins: []
};
