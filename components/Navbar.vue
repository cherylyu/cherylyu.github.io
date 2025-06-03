<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="#" class="flex items-center gap-2">
            <img src="~/assets/img/logo.svg" alt="Logo" class="h-8 w-8" />
            <span class="text-lg font-medium text-choco-300 hover:text-slate-700 duration-300">Cheryl Yu</span>
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-slate-800 hover:text-slate-600 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Desktop menu -->
        <div class="hidden md:flex space-x-8">
          <a href="#home" :class="['px-3 py-1 rounded-md transform transition-all duration-300', activeSection === 'home' ? 'bg-gray-200 text-slate-900' : 'text-slate-700 hover:bg-gray-100']">Home</a>
          <a href="#about" :class="['px-3 py-1 rounded-md transform transition-all duration-300', activeSection === 'about' ? 'bg-gray-200 text-slate-900' : 'text-slate-700 hover:bg-gray-100']">About</a>
          <a href="#works" :class="['px-3 py-1 rounded-md transform transition-all duration-300', activeSection === 'works' ? 'bg-gray-200 text-slate-900' : 'text-slate-700 hover:bg-gray-100']">Works</a>
          <a href="#playground" :class="['px-3 py-1 rounded-md transform transition-all duration-300 hidden', activeSection === 'playground' ? 'bg-gray-200 text-slate-900' : 'text-slate-700 hover:bg-gray-100']">Playground</a>
          <a href="#contact" :class="['px-3 py-1 rounded-md transform transition-all duration-300', activeSection === 'contact' ? 'bg-gray-200 text-slate-900' : 'text-slate-700 hover:bg-gray-100']">Contact</a>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <a href="#home" @click="isMobileMenuOpen = false" :class="['block px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300', activeSection === 'home' ? 'bg-gray-200 text-slate-900' : 'text-slate-700 hover:bg-gray-100']">Home</a>
          <a href="#about" @click="isMobileMenuOpen = false" :class="['block px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300', activeSection === 'about' ? 'bg-gray-200 text-slate-900' : 'text-slate-700 hover:bg-gray-100']">About</a>
          <a href="#works" @click="isMobileMenuOpen = false" :class="['block px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300', activeSection === 'works' ? 'bg-gray-200 text-slate-900' : 'text-slate-700 hover:bg-gray-100']">Works</a>
          <a href="#playground" @click="isMobileMenuOpen = false" :class="['block px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300 hidden', activeSection === 'playground' ? 'bg-gray-200 text-slate-900' : 'text-slate-700 hover:bg-gray-100']">Playground</a>
          <a href="#contact" @click="isMobileMenuOpen = false" :class="['block px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300', activeSection === 'contact' ? 'bg-gray-200 text-slate-900' : 'text-slate-700 hover:bg-gray-100']">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileMenuOpen = ref(false);
const activeSection = ref('home');

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const detectActiveSection = () => {
  const sections = ['home', 'about', 'works', 'playground', 'contact'];

  const sectionPositions = sections.map(id => {
    const element = document.getElementById(id);
    if (!element) return { id, top: 0, bottom: 0, visible: false };

    const rect = element.getBoundingClientRect();
    // Add some buffering to make the transition smoother
    const buffer = window.innerHeight * 0.25;

    return {
      id,
      top: rect.top - buffer,
      bottom: rect.bottom - buffer,
      visible: rect.top < window.innerHeight / 2 && rect.bottom > 0
    };
  });

  // Identify the section that is visible and closest to the top of the viewport
  const visibleSections = sectionPositions.filter(section => section.visible);

  if (visibleSections.length > 0) {
    const sortedSections = [...visibleSections].sort((a, b) => {
      if (a.top >= 0 && b.top < 0) return -1;
      if (a.top < 0 && b.top >= 0) return 1;
      return Math.abs(a.top) - Math.abs(b.top);
    });

    activeSection.value = sortedSections[0].id;
  }
};

onMounted(() => {
  window.addEventListener('scroll', detectActiveSection);
  detectActiveSection();
});

onUnmounted(() => {
  window.removeEventListener('scroll', detectActiveSection);
});
</script>
