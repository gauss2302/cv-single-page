import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/cv-single-page/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    copyPublicDir: true,
  },
});
