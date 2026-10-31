const apiBaseUrl = (
  process.env.NUXT_PUBLIC_API_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export default defineNuxtConfig({
  compatibilityDate: "2026-10-27",
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiBaseUrl,
    },
  },
  css: [
    "~/assets/css/base.css",
    "~/assets/css/pages/home.css",
    "~/assets/css/pages/event.css",
    "~/assets/css/pages/event-detail.css",
    "~/assets/css/pages/join.css",
    "~/assets/css/pages/partner-shop.css",
    "~/assets/css/pages/terms-and-conditions.css",
    "~/assets/css/shared/header.css",
    "~/assets/css/shared/footer.css",
    "~/assets/css/shared/buttons.css",
  ],
  app: {
    head: {
      htmlAttrs: { lang: "th" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap",
        },
      ],
      script: [
        {
          src: "https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js",
          defer: true,
        },
      ],
    },
  },
  nitro: {
    routeRules: {
      "/api/**": { proxy: `${apiBaseUrl}/api/**` },
      "/images/**": { proxy: `${apiBaseUrl}/images/**` },
    },
    prerender: {
      routes: [
        "/",
        "/home/",
        "/event/",
        "/event/detail/",
        "/join/",
        "/partner/shop/",
        "/terms-and-conditions/",
      ],
    },
  },
});
