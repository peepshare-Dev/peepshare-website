import { defineConfig } from "vite";
import { resolve } from "node:path";

const cleanUrlRedirects = {
  "/home": "/home/",
  "/join": "/join/",
  "/partner": "/partner/",
  "/event": "/event/",
  "/privacy-policy": "/privacy-policy/",
  "/terms-and-conditions": "/terms-and-conditions/",
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
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      "/images": "http://localhost:3000",
    },
  },
  build: {
    rollupOptions: {
      input: {
        rootRedirect: resolve(__dirname, "index.html"),
        home: resolve(__dirname, "home/index.html"),
        partnerShop: resolve(__dirname, "partner/shop/index.html"),
        join: resolve(__dirname, "join/index.html"),
        event: resolve(__dirname, "event/index.html"),
        eventDetail: resolve(__dirname, "event/detail/index.html"),
        termsAndConditions: resolve(__dirname, "terms-and-conditions/index.html"),
      },
    },
  },
});
