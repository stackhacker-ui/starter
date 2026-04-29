<script setup lang="ts">
import { ArrowRight, Sparkles } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
</script>

<template>
  <section class="relative isolate overflow-hidden py-20 md:py-28">
    <div class="bg-muted/45 absolute inset-x-0 top-0 -z-10 h-64 border-b [mask-image:linear-gradient(to_bottom,black,transparent)]" />
    <div class="container">
      <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p class="border-border/70 bg-background/80 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm shadow-xs backdrop-blur-sm">
          <Sparkles
            class="size-4 sm:size-3.5"
            aria-hidden="true"
          />
          Nuxt 4 + shadcn-vue + Tailwind CSS v4
        </p>
        <h1 class="mt-6 max-w-[20ch] text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          Stackhacker UI Starter Template
        </h1>
        <p class="text-muted-foreground mt-6 max-w-[56ch] text-base text-pretty md:text-lg">
          A deployable starter template powered by shadcn-vue. Start with owned components, dark mode, TypeScript, and a clean Nuxt foundation.
        </p>
        <div class="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button
            as="a"
            href="https://ui.stackhacker.io/docs/getting-started"
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
            size="lg"
            class="pl-4 pr-3"
          >
            Get started
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
            size="lg"
            class="pl-3 pr-4"
          >
            <Icon
              name="mdi:github"
              size="22"
              class="shrink-0"
              aria-hidden="true"
            />
            Use this template
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
