<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'A premium, responsive IT portfolio website showcasing modern frontend engineering and product design.' }
  ]
})
</script>

<template>
  <main class="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.18),_transparent_30%)]">
    <Navbar />

    <div class="mx-auto flex max-w-7xl flex-col px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>

    <Footer />
  </main>
</template>
