<template>
  <section id="works" class="h-screen bg-choco-50 relative overflow-hidden">
    <div class="container mx-auto px-8 py-16 flex flex-col h-full">
      <h2 class="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold text-choco-300 text-center">Works</h2>

      <button
        class="absolute top-[50%] left-3 md:left-8 z-10 p-2 -translate-y-3"
        @click="prevSlide"
      >
        <img src="~/assets/img/arrow-right.svg" alt="Previous" class="w-6 h-6 rotate-180" />
      </button>

      <button
        class="absolute top-[50%] right-3 md:right-8 z-10 p-2 -translate-y-3"
        @click="nextSlide"
      >
        <img src="~/assets/img/arrow-right.svg" alt="Next" class="w-6 h-6" />
      </button>

      <div class="flex flex-col md:flex-row items-center justify-center flex-grow">
        <!-- Left Column -->
        <div class="w-full md:w-1/2 px-8 py-4 md:py-0 flex justify-center items-center">
          <div v-if="currentWork.images && currentWork.images.length" class="relative w-full max-w-lg">
            <div class="grid grid-cols-4">
              <div v-for="(image, index) in currentWork.images" :key="index"
                   :class="[
                     'image-card mb-6 relative transform transition-all duration-300',
                     'cursor-pointer hover:z-10 hover:scale-110',
                     getRotationClass(index)
                   ]">
                <img
                  :src="`/images/works/${image}`"
                  :alt="`${currentWork.title} - Image ${index+1}`"
                  class="w-full h-auto rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
          <div v-else class="text-center">
            <p>No images</p>
          </div>
        </div>

        <!-- Right Column -->
        <div class="w-full md:w-1/2 px-8 py-4 md:py-0 flex justify-center items-center">
          <div v-if="works.length > 0" class="work-slide w-full">
            <div class="text-center">
              <h3 class="text-2xl md:text-3xl font-semibold mb-4">{{ currentWork.title }}</h3>

              <div class="flex flex-wrap justify-center gap-2 mb-4 cursor-default" v-if="currentWork.skills && currentWork.skills.length">
                <span
                  v-for="skill in currentWork.skills"
                  :key="skill"
                  class="px-3 py-1 bg-choco-100 text-choco-300 rounded-full text-sm font-medium transition-transform hover:scale-105"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
          <div v-else class="text-center">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import works from '~/server/data/works.json';

const currentIndex = ref(0);

const currentWork = computed(() => {
  return works[currentIndex.value] || { title: '', images: [], skills: [] };
});

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % works.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + works.length) % works.length;
};

const getRotationClass = (index) => {
  if (index % 2 === 0) {
    return 'rotate-3 hover:rotate-12';
  } else {
    return '-rotate-3 hover:-rotate-12';
  }
}
</script>

<style scoped>
.image-card {
  transition: transform 0.5s ease, z-index 0.2s ease;
}
</style>
