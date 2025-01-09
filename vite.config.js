import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio2.0/", // Cambia 'portfolio2.0' al nombre exacto de tu repositorio
});
