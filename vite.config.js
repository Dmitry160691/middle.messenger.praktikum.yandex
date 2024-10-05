/* eslint-disable no-undef */
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, './'),
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, 'dist'),
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
