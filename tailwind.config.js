/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
    },
    extend: {
      colors: {
        detailColor: "#d6dfe5",
        highlightColor: "#9698F3",
      },
      spacing: {
        mid_pad: "40px 120px",
      },
    },
  },
  plugins: [],
};
