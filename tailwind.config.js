import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '2xl': '1650px',
      },
      colors: {
        primary: "#FA504D",
        dark: "#2E2F38",
        "gray-1": "#8E8E8E"
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        heading: ["Belgrano", ...defaultTheme.fontFamily.sans]
      },
        maxWidth: {
          "8xl": "104rem",
        },
      backgroundImage: {
        "pattern": "url('/images/background.svg')",
      },
  },
    plugins: [],
  }
}

