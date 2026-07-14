import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        grc: resolve(__dirname, "GRC/index.html"),
        emiratisationWebinar: resolve(__dirname, "Emiratisation 2026/index.html")
      }
    }
  }
});
