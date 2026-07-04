<script setup lang="ts">
interface FormState {
  name: string
  email: string
  message: string
}

const form = reactive<FormState>({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

const isValidEmail = (value: string) => /.+@.+\..+/.test(value)

const submitForm = () => {
  if (!form.name || !form.email || !form.message || !isValidEmail(form.email)) {
    return
  }

  submitted.value = true
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <section id="contact" class="mt-24 scroll-mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.3)] sm:p-8 lg:p-12">
    <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="space-y-6">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s create something exceptional together."
          description="Ready to launch a polished product or refine an existing experience? I’d love to hear about it."
        />

        <div class="space-y-3 text-sm text-slate-400">
          <p><span class="font-semibold text-slate-200">Email:</span> hello@canillo.dev</p>
          <p><span class="font-semibold text-slate-200">Phone:</span> +1 (555) 012-3478</p>
          <p><span class="font-semibold text-slate-200">GitHub:</span> github.com/canillo</p>
        </div>
      </div>

      <form class="space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6" @submit.prevent="submitForm">
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="space-y-2 text-sm text-slate-300">
            <span>Name</span>
            <input v-model="form.name" class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-0 transition focus:border-cyan-400/50" placeholder="Your name" required />
          </label>
          <label class="space-y-2 text-sm text-slate-300">
            <span>Email</span>
            <input v-model="form.email" type="email" class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-0 transition focus:border-cyan-400/50" placeholder="you@example.com" required />
          </label>
        </div>

        <label class="block space-y-2 text-sm text-slate-300">
          <span>Message</span>
          <textarea v-model="form.message" rows="5" class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-0 transition focus:border-cyan-400/50" placeholder="Tell me about your project..." required />
        </label>

        <div class="flex flex-wrap items-center justify-between gap-4">
          <Button label="Send Message" icon="heroicons:paper-airplane" />
          <p v-if="submitted" class="text-sm font-medium text-cyan-300">Thanks! Your message is on the way.</p>
        </div>
      </form>
    </div>
  </section>
</template>
