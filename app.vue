<template>
  <div class="font-sans">
    <NuxtRouteAnnouncer />
    <Navbar />
    <main>
      <h1 class="hidden">Cheryl Yu's Portfolio</h1>
      <HomeSection />
      <section id="about" class="min-h-screen bg-gray-100 flex items-center justify-center">
        <h2 class="text-4xl md:text-6xl font-bold">About</h2>
      </section>
      <section id="works" class="min-h-screen bg-white flex items-center justify-center">
        <h2 class="text-4xl md:text-6xl font-bold">Works</h2>
      </section>
      <section id="playground" class="min-h-screen bg-gray-100 flex items-center justify-center">
        <h2 class="text-4xl md:text-6xl font-bold">Playground</h2>
      </section>
      <section id="contact" class="min-h-screen bg-white flex items-center justify-center">
        <h2 class="text-4xl md:text-6xl font-bold">Contact</h2>
      </section>
    </main>
  </div>
</template>

<script setup>
// Script setup
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
