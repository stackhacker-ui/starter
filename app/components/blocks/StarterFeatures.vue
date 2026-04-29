<script setup lang="ts">
import {
  CodeXml,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-vue-next";

const features = [
  {
    icon: Rocket,
    title: "Ready to customize",
    description: "Pre-configured with TypeScript, ESLint, Tailwind CSS, and Nuxt 4 defaults so you can start from a clean, deployable baseline.",
  },
  {
    icon: Sparkles,
    title: "Beautiful by default",
    description: "Leveraging shadcn-vue's design system with automatic dark mode, consistent spacing, and polished components that look great out of the box.",
  },
  {
    icon: Zap,
    title: "Nuxt-powered performance",
    description: "Uses Nuxt's rendering, routing, and build pipeline as the foundation for fast static or server-rendered experiences.",
  },
  {
    icon: CodeXml,
    title: "Own the components",
    description: "shadcn-vue components live in your project as source code. Read them, customize them, and adapt them to your design — no vendor lock-in.",
  },
  {
    icon: Terminal,
    title: "Developer experience first",
    description: "Auto-imports, hot module replacement, and TypeScript support. Write less boilerplate and ship more features.",
  },
  {
    icon: ShieldCheck,
    title: "Publish-ready basics",
    description: "Includes SEO metadata, accessible UI primitives, quality scripts, and a small surface area you can extend intentionally.",
  },
];
</script>

<template>
  <section class="border-grid border-t">
    <div class="container py-16 md:py-20">
      <div class="mb-12 max-w-2xl">
        <p class="text-muted-foreground flex items-center gap-2 text-base sm:text-sm">
          <Layers3
            class="size-5 sm:size-4"
            aria-hidden="true"
          />
          Template foundation
        </p>
        <h2 class="mt-3 max-w-[35ch] text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          Everything you need to build modern Nuxt apps
        </h2>
        <p class="text-muted-foreground mt-4 max-w-[60ch] text-base text-pretty sm:text-sm">
          Start with a solid foundation. This template includes the essentials for building a Nuxt app with shadcn-vue's source-owned component model.
        </p>
      </div>

      <dl class="grid gap-px overflow-hidden rounded-xl border bg-border/60 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-card p-5 md:p-6"
        >
          <dt class="text-card-foreground flex items-start gap-3 text-base font-medium">
            <span class="border-border/70 bg-background flex size-9 shrink-0 items-center justify-center rounded-lg border">
              <component
                :is="feature.icon"
                class="text-muted-foreground size-5 shrink-0"
                aria-hidden="true"
              />
            </span>
            <span>{{ feature.title }}</span>
          </dt>
          <dd class="text-muted-foreground mt-3 max-w-[56ch] text-base text-pretty sm:text-sm">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
