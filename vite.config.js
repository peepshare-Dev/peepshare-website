import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        partner: resolve(__dirname, "partner/index.html"),
        partnerShop: resolve(__dirname, "partner/shop/index.html"),
        blog: resolve(__dirname, "blog-tailwind/blog-tailwind.html"),
      },
    },
  },
});
