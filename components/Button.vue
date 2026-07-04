<script setup lang="ts">
interface Props {
  label: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: string
  download?: boolean
  extraClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  download: false,
  extraClass: ''
})

const buttonClass = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

  switch (props.variant) {
    case 'secondary':
      return `${base} border-white/15 bg-white/10 text-slate-100 hover:border-cyan-400/50 hover:bg-white/15`
    case 'ghost':
      return `${base} border-transparent bg-transparent text-slate-300 hover:text-white hover:bg-white/10`
    default:
      return `${base} border-cyan-400/20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.02] hover:shadow-cyan-500/30`
  }
})
</script>

<template>
  <NuxtLink
    v-if="props.href"
    :to="props.href"
    :download="props.download ? '' : undefined"
    :class="[buttonClass, props.extraClass]"
  >
    <span v-if="props.icon" class="text-base">
      <Icon :name="props.icon" />
    </span>
    {{ props.label }}
  </NuxtLink>

  <button v-else type="button" :class="[buttonClass, props.extraClass]">
    <span v-if="props.icon" class="text-base">
      <Icon :name="props.icon" />
    </span>
    {{ props.label }}
  </button>
</template>
