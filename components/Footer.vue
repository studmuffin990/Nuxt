<script setup lang="ts">
const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'mdi:github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'mdi:linkedin' },
  { label: 'Email', href: 'mailto:hello@canillo.dev', icon: 'mdi:email-outline' }
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="border-t border-white/10 bg-slate-950/80">
    <div class="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <p class="text-sm text-slate-400">© 2026 Canillo. Crafted with care and precision.</p>

      <div class="flex flex-wrap items-center gap-3">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noreferrer"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
          :aria-label="social.label"
        >
          <Icon :name="social.icon" class="text-lg" />
        </a>
        <button
          type="button"
          class="flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-white"
          @click="scrollToTop"
        >
          <Icon name="heroicons:arrow-up" />
          Top
        </button>
      </div>
    </div>
  </footer>
</template>
