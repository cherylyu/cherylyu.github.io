<template>
  <div class="font-sans text-slate-700">
    <NuxtRouteAnnouncer />
    <Navbar />
    <main>
      <h1 class="hidden">Cheryl Yu's Portfolio</h1>
      <HomeSection />
      <AboutSection />
      <WorksSection />
      <PlaygroundSection />
      <ContactSection />
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
