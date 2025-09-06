/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,ts,json}"
  ],
  theme: {
    extend: {
      colors: {
        bordo: "#4B0202",
        vino: "#7A1124",
        blanco: "#FFFFFF",
        crema: "#F8F5F2",
        carbón: "#0D0D0D"
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Segoe UI", "Arial"],
        body: ["ui-sans-serif", "system-ui", "Segoe UI", "Arial"]
      },
      boxShadow: {
        suave: "0 8px 30px rgba(0,0,0,0.15)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
};
