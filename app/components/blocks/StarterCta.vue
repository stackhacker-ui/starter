<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
</script>

<template>
  <section class="border-grid border-t py-16 md:py-20">
    <div class="container">
      <div class="border-grid bg-card relative isolate overflow-hidden rounded-xl border p-6 md:p-10">
        <div class="absolute right-0 top-0 -z-10 size-48 rounded-full bg-foreground/5 blur-3xl" />
        <div class="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 class="max-w-[35ch] text-3xl font-semibold tracking-tight text-balance">
              Ready to build your next Nuxt app?
            </h2>
            <p class="text-muted-foreground mt-4 max-w-[58ch] text-base text-pretty sm:text-sm">
              Get a minimal Nuxt 4, shadcn-vue, and Tailwind CSS v4 foundation you can read, own, and reshape for your product.
            </p>
          </div>
          <div class="flex flex-col items-stretch gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Button
              as="a"
              href="https://ui.stackhacker.io/docs/getting-started"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              class="pl-4 pr-3"
            >
              Start building
              <ArrowRight
                class="size-4"
                aria-hidden="true"
              />
            </Button>
            <Button
              as="a"
              href="https://github.com/stackhacker-ui/starter"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              class="pl-3 pr-4"
            >
              <Icon
                name="mdi:github"
                size="22"
                class="shrink-0"
                aria-hidden="true"
              />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
