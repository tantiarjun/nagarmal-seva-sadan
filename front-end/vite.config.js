// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteImages from "vite-plugin-vue-images";

export default defineConfig({
  plugins: [
    react(),
    ViteImages({
      dirs: ["src/assets/doctors_info"], // Specify the directory where your images are stored
      extensions: ["**/*.JPG", "jpg", "jpeg", "png"], // Specify the file extensions to handle
    }),
  ],
});
