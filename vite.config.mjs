import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const pkg = JSON.parse(
  readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "package.json"), "utf8")
);

const externals = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];

const isExternal = (id) =>
  externals.some((dep) => id === dep || id.startsWith(`${dep}/`)) ||
  /^node:/.test(id) ||
  id === "react/jsx-runtime" ||
  id === "react/jsx-dev-runtime";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "cjs" ? "index.js" : "index.modern.js"),
    },
    rollupOptions: {
      external: isExternal,
      output: {
        preserveModules: false,
      },
    },
    sourcemap: true,
    minify: false,
    emptyOutDir: true,
  },
});
