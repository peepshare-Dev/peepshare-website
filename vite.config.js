import { defineConfig } from "vite";
import { resolve } from "node:path";

const cleanUrlRedirects = {
  "/join": "/join/",
  "/partner": "/partner/",
  "/event": "/event/",
  "/privacy-policy": "/privacy-policy/",
};

function cleanUrlPlugin() {
  const redirect = (server) => {
    server.middlewares.use((request, response, next) => {
      const pathname = new URL(request.url, "http://localhost").pathname;
      const destination = cleanUrlRedirects[pathname];
      if (!destination) return next();

      response.statusCode = 302;
      response.setHeader("Location", destination);
      response.end();
    });
  };

  return {
    name: "clean-url-redirects",
    configureServer: redirect,
    configurePreviewServer: redirect,
  };
}

export default defineConfig({
  appType: "mpa",
  plugins: [cleanUrlPlugin()],
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
