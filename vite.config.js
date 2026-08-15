import { resolve } from "node:path";
import { sites } from "@openai/sites-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sites()],
  build: {
    outDir: "dist/client",
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), "index.html"),
        films: resolve(process.cwd(), "films/index.html"),
        wrld: resolve(process.cwd(), "wrld/index.html"),
      },
    },
  },
});
