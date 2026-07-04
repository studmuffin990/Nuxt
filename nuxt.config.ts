import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/icon', '@nuxt/image', '@vueuse/nuxt'],
  app: {
    head: {
      titleTemplate: '%s | Canillo Portfolio',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'Premium Nuxt 3 portfolio website for a modern frontend engineer and UI architect.' },
        { name: 'theme-color', content: '#0f172a' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800&display=swap' }
      ]
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
