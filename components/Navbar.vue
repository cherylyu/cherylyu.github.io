<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="text-xl font-bold">
          <a href="#home" class="text-gray-800 hover:text-gray-600">Portfolio</a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-800 hover:text-gray-600 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Desktop menu -->
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#about" class="text-gray-800 hover:text-gray-600">About</a>
          <a href="#works" class="text-gray-800 hover:text-gray-600">Works</a>
          <a href="#playground" class="text-gray-800 hover:text-gray-600">Playground</a>
          <a href="#contact" class="text-gray-800 hover:text-gray-600">Contact</a>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <a href="#home" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-50">Home</a>
          <a href="#about" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-50">About</a>
          <a href="#works" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-50">Works</a>
          <a href="#playground" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-50">Playground</a>
          <a href="#contact" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-50">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
