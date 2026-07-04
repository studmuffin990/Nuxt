<script setup lang="ts">
import type { Metric, SkillGroup } from '~/types/content'

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Engineering',
    description: 'Nuxt, Vue, TypeScript, Tailwind, accessibility, and performance tuning.',
    items: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Product Design',
    description: 'Design systems, storytelling, responsive layouts, and polished experiences.',
    items: ['UI Systems', 'Wireframes', 'Brand Direction', 'Design QA']
  },
  {
    title: 'Optimisation',
    description: 'Fast load times, SEO foundations, analytics, and scalable delivery.',
    items: ['SEO', 'Core Web Vitals', 'Analytics', 'DevOps']
  }
]

const highlights: Metric[] = [
  { value: '12+', label: 'Global clients served' },
  { value: '4x', label: 'Faster launch cycles' },
  { value: '95%', label: 'Repeat collaboration rate' }
]
</script>

<template>
  <section id="about" class="mt-24 scroll-mt-24">
    <SectionTitle
      eyebrow="About me"
      title="Building elegant products with precision and calm focus."
      description="I blend engineering rigor with visual clarity to turn ambitious ideas into polished digital experiences that feel effortless."
      align="center"
    />

    <div class="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div class="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.25)]">
        <p class="text-lg leading-8 text-slate-300">
          I’ve spent the last several years helping teams launch fast, modern products for startups, agencies, and founders. My approach pairs strong architecture with thoughtful interface polish, so every release feels intentional and premium.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <Button label="Download CV" href="/cv.pdf" download variant="secondary" icon="heroicons:arrow-down-tray" />
          <Button label="Let’s Talk" href="#contact" variant="ghost" icon="heroicons:bolt" />
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
        <div v-for="metric in highlights" :key="metric.label" class="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center">
          <p class="text-2xl font-semibold text-slate-50">{{ metric.value }}</p>
          <p class="mt-2 text-sm text-slate-400">{{ metric.label }}</p>
        </div>
      </div>
    </div>

    <div class="mt-8 grid gap-6 lg:grid-cols-3">
      <div v-for="group in skillGroups" :key="group.title" class="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/70 p-7">
        <h3 class="text-xl font-semibold text-slate-50">{{ group.title }}</h3>
        <p class="mt-3 text-sm leading-7 text-slate-400">{{ group.description }}</p>
        <div class="mt-6 flex flex-wrap gap-2">
          <span v-for="item in group.items" :key="item" class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
