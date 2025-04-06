// vite.config.js
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "src",
  publicDir: path.resolve(__dirname, "public"),
  server: {
    port: 5173,
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: false,
    },
    open: true,
  },
});
