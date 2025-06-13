<template>
  <section id="playground" class="min-h-screen bg-mint-50 relative flex flex-col items-center justify-center">
    <h2 class="text-4xl md:text-5xl lg:text-6xl text-center text-mint-200 font-bold mt-16 mb-8">Playground</h2>
    <div class="container flex flex-col md:flex-row items-center justify-center px-4 pb-16">

      <!-- Left Column -->
      <div class="w-full md:w-1/2 flex justify-center">
        <div class="w-4/5 mb-8 border-8 border-white shadow-xl rounded-md hover:rotate-3 duration-300 overflow-hidden">
          <img src="/images/qingpu.png" alt="Qingpu" class="w-full h-auto object-cover" />
        </div>
      </div>

      <!-- Right Column -->
      <div class="w-full md:w-1/2 text-center md:text-left px-8">
        <h3 class="text-3xl md:text-4xl font-semibold mb-4">Lohas in Qingpu</h3>

        <p class="text-lg md:text-xl mb-4">
          This is an interactive map planned and designed by me, developed as a side project through
          pair programming with <span class="text-mint-200 font-semibold">GitHub Copilot</span>, aimed at
          helping residents and visitors of Qingpu area explore their surroundings.
        </p>

        <p class="text-lg md:text-xl mb-6">
          It's currently in a minimum viable product (MVP) state, with data and features still being actively added.
        </p>

        <div class="flex flex-wrap justify-center gap-2 mb-6" v-if="skills && skills.length">
          <span
            v-for="skill in skills"
            :key="skill"
            class="px-3 py-1 bg-white text-mint-300 rounded-full text-md font-medium"
          >
            {{ skill }}
          </span>
        </div>

        <div class="flex justify-center">
          <a href="https://lohas-in-qingpu.vercel.app/" target="_blank" rel="noopener noreferrer"
            class="inline-block px-6 py-2 text-center bg-mint-100 text-mint-200 border-2 border-mint-200 rounded-full font-medium
            hover:text-mint-300 hover:border-mint-300 hover:scale-105 transition-all duration-300 transform">
            Visit the Website ➜
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Leaflet',
  'OpenStreetMap',
  'MongoDB',
  'Vercel'
];
</script>
