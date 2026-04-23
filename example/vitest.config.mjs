import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react({ include: /\.(jsx?|tsx?)$/ })],
  resolve: {
    alias: {
      "@greedybear/gb-ui": path.resolve(__dirname, "../src/index.js"),
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [path.resolve(__dirname, "vitest.setup.mjs")],
    include: ["src/**/*.{test,spec}.{js,jsx}"],
  },
});
