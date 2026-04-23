import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@greedybear/gb-ui": fileURLToPath(new URL("../src/index.js", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: process.env.PLAYWRIGHT !== "true",
    fs: {
      allow: [".."],
    },
  },
});
