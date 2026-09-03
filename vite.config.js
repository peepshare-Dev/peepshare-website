import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        homeAlias: resolve(__dirname, "home/index.html"),
        homeCleanUrl: resolve(__dirname, "home.html"),
        partner: resolve(__dirname, "partner/index.html"),
        partnerShop: resolve(__dirname, "partner/shop/index.html"),
        blog: resolve(__dirname, "blog-tailwind/blog-tailwind.html"),
        join: resolve(__dirname, "join/index.html"),
      },
    },
  },
});
