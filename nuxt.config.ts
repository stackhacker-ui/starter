import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode", "shadcn-nuxt"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  colorMode: {
    classSuffix: "",
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://starter-template.stackhacker.io",
    },
  },
  routeRules: {
    "/": { prerender: true },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2025-07-15",
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
      },
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
});
