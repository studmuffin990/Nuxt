<script setup lang="ts">
import type { NavLink } from '~/types/content'

const links: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
]

const { isDark, toggleTheme } = useTheme()
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
      <NuxtLink to="#home" class="flex items-center gap-3" @click="closeMenu">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20">
          C
        </span>
        <span class="text-lg font-semibold tracking-tight text-slate-50">Canillo</span>
      </NuxtLink>

      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="text-sm font-medium text-slate-300 transition hover:text-white"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition hover:border-cyan-400/40 hover:bg-white/20"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <Icon :name="isDark ? 'heroicons:moon' : 'heroicons:sun'" class="text-lg" />
        </button>

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition hover:border-cyan-400/40 hover:bg-white/20 md:hidden"
          aria-label="Toggle menu"
          :aria-expanded="menuOpen"
          @click="toggleMenu"
        >
          <Icon :name="menuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="text-lg" />
        </button>
      </div>
    </nav>

    <div v-if="menuOpen" class="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
      <div class="flex flex-col gap-3">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="rounded-2xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
