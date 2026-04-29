<script setup lang="ts">
useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    { rel: "icon", href: "/favicon.ico" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

const { public: { siteUrl } } = useRuntimeConfig();
const title = "Stackhacker UI Starter Template";
const description = "A deployable starter template powered by Nuxt 4, shadcn-vue, and Tailwind CSS v4.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: `${siteUrl}/screenshots/starter-light.png`,
  ogUrl: siteUrl,
  twitterCard: "summary_large_image",
  twitterImage: `${siteUrl}/screenshots/starter-light.png`,
});
</script>

<template>
  <div class="bg-background text-foreground isolate min-h-dvh antialiased">
    <SiteHeader />

    <main class="border-grid border-y">
      <NuxtPage />
    </main>

    <SiteFooter />
  </div>
</template>
