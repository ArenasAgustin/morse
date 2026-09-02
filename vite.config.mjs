import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  base: "/",
  // Los utils son JS puro, no tocan el DOM. Con el entorno node alcanza.
  test: {
    environment: "node",
    include: ["src/**/*.test.js"],
  },
});
