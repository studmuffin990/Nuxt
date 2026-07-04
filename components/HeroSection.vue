<script setup lang="ts">
import type { Metric, SocialLink } from '~/types/content'

const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com', icon: 'mdi:github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'mdi:linkedin' },
  { label: 'Email', href: 'mailto:hello@canillo.dev', icon: 'mdi:email-outline' }
]

const metrics: Metric[] = [
  { value: '7+', label: 'Years of experience' },
  { value: '40+', label: 'Launches shipped' },
  { value: '100%', label: 'Client-focused delivery' }
]
</script>

<template>
  <section id="home" class="grid items-center gap-16 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-12 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-20">
    <div class="space-y-8">
      <div class="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
        <span class="h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
        Available for select product partnerships
      </div>

      <div class="space-y-5">
        <p class="text-base font-medium uppercase tracking-[0.35em] text-slate-400">Hello, I’m</p>
        <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-7xl">
          Canillo, a <span class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">frontend architect</span>
          crafting premium digital experiences.
        </h1>
        <p class="max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
          I design and build high-performance web products with a strong focus on storytelling, usability, and beautiful execution.
        </p>
      </div>

      <div class="flex flex-wrap gap-4">
        <Button label="View Projects" href="#contact" icon="heroicons:arrow-right" />
        <Button label="Contact Me" href="#contact" variant="secondary" icon="heroicons:chat-bubble-left-right" />
      </div>

      <div class="flex flex-wrap items-center gap-4">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noreferrer"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          :aria-label="social.label"
        >
          <Icon :name="social.icon" class="text-xl" />
        </a>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
        <div v-for="metric in metrics" :key="metric.label" class="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
          <p class="text-2xl font-semibold text-slate-50">{{ metric.value }}</p>
          <p class="mt-1 text-sm text-slate-400">{{ metric.label }}</p>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl"></div>
      <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-[0_30px_80px_rgba(2,132,199,0.18)]">
        <NuxtImg
          src="/profile.svg"
          alt="Illustrated portrait of Canillo"
          width="720"
          height="820"
          class="w-full rounded-[1.5rem] object-cover"
          loading="eager"
        />
        <div class="absolute bottom-6 left-6 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur">
          Designing for speed, clarity, and delight
        </div>
      </div>
    </div>
  </section>
</template>
