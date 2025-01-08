/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Para el archivo HTML en la raíz
    "./src/**/*.{js,jsx}", // Para todos los archivos dentro de `src`
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        titleColor: "#37b24d",
      },
      width: {
        custom: "1360px",
      },
    },
  },
  plugins: [],
};
