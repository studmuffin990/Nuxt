<script setup lang="ts">
interface Props {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  align: 'left'
})

const alignmentClass = computed(() => props.align === 'center' ? 'mx-auto text-center' : 'text-left')
</script>

<template>
  <div :class="['max-w-2xl space-y-3', alignmentClass]">
    <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
      {{ props.eyebrow }}
    </p>
    <h2 class="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
      {{ props.title }}
    </h2>
    <p v-if="props.description" class="text-base leading-8 text-slate-400">
      {{ props.description }}
    </p>
  </div>
</template>
