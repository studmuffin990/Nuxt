<script setup lang="ts">
const { isDark } = useTheme()

useHead({
  titleTemplate: '%s | Canillo Portfolio',
  meta: [
    { name: 'description', content: 'Modern, premium IT portfolio website built with Nuxt 3, Vue 3, TypeScript, and Tailwind CSS.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: 'Canillo Portfolio' },
    { property: 'og:description', content: 'A polished frontend portfolio for a modern software engineer and digital product creator.' }
  ]
})
</script>

<template>
  <div :class="isDark ? 'min-h-screen bg-slate-950 text-slate-100 antialiased' : 'min-h-screen bg-slate-50 text-slate-900 antialiased'">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
