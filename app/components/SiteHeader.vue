<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <header class="border-grid bg-background/85 sticky top-0 z-30 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70">
    <div class="container flex h-16 items-center justify-between gap-2 sm:gap-4">
      <div class="flex min-w-0 items-center gap-2 sm:gap-3">
        <AppLogo />
        <TemplateMenu />
      </div>

      <div class="flex shrink-0 items-center gap-1 sm:gap-2">
        <ModeSwitcher />
        <Button
          as="a"
          href="https://github.com/stackhacker-ui/starter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          variant="ghost"
          size="icon"
        >
          <Icon
            name="mdi:github"
            size="20"
            class="shrink-0"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  </header>
</template>
