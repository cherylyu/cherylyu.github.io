<template>
  <section id="works" class="h-screen bg-choco-50 relative overflow-hidden">
    <!-- Image Popup Window -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300"
         :class="{'opacity-0': !modalVisible, 'opacity-100': modalVisible}"
         @click="closeImageModal"
         @keydown="handleKeydown"
         tabindex="0"
         ref="modalRef">
      <div class="relative max-w-4xl max-h-[90vh] px-8 rounded-lg">
        <button
          class="absolute -top-4 right-4 md:-right-4 w-8 h-8 flex items-center justify-center bg-black text-white rounded-full transition-transform hover:scale-110 z-10"
          @click.stop="closeImageModal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <button
          class="absolute top-1/2 left-2 -translate-y-1/2 h-8 w-6 flex items-center justify-start bg-white rounded-l-full z-10"
          @click.stop="prevModalImage"
          v-if="currentWorkImages.length > 1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" class="ml-1">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button
          class="absolute top-1/2 right-2 -translate-y-1/2 h-8 w-6 flex items-center justify-end bg-white rounded-r-full z-10"
          @click.stop="nextModalImage"
          v-if="currentWorkImages.length > 1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" class="mr-1">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <img
          :src="currentModalImage ? `/images/works/${currentModalImage}` : ''"
          class="max-h-[85vh] mx-auto border-[6px] border-white rounded-md transition-opacity duration-300"
          @click.stop
          :alt="currentWork.title ? `${currentWork.title} - Image` : 'Image of work'"
        />
      </div>
    </div>

    <div class="container mx-auto px-8 my-8 md:py-16 flex flex-col h-full">
      <h2 class="mb-4 md:mb-8 text-4xl md:text-5xl lg:text-6xl font-bold text-choco-300 text-center">Works</h2>

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

      <div class="-mt-16 md:mt-0 flex flex-col md:flex-row items-center justify-center flex-grow">
        <!-- Left Column -->
        <div class="w-full md:w-1/2 px-8 py-4 md:py-0 flex justify-center items-center">
          <div v-if="currentWork.images && currentWork.images.length" class="relative w-full">
            <div class="grid grid-cols-3 gap-2 md:gap-4">
              <div v-for="(image, index) in currentWork.images" :key="index"
                   :class="[
                     'image-card mb-3 md:mb-6 relative transform transition-all duration-300',
                     'cursor-pointer hover:z-10 hover:scale-110',
                     getRotationClass(index)
                   ]"
                   @click="openImageModal(image)">
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
        <div class="w-full md:w-1/2 px-4 md:px-8 py-4 md:py-0 flex justify-center items-center">
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

              <p v-if="currentWork.description" v-html="renderDescription(currentWork.description)" class="text-base mb-6 max-w-md mx-auto"></p>

              <a v-if="currentWork.link" :href="currentWork.link" target="_blank" rel="noopener noreferrer"
                class="inline-block px-6 py-2 bg-white text-choco-200 border-2 border-choco-200 rounded-full font-medium
                  hover:text-choco-300 hover:border-choco-300 hover:scale-105 transition-all duration-300 transform">
                Visit the Website ➜
              </a>
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
import { ref, computed, onMounted, onUnmounted } from 'vue';
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
};

const renderDescription = (raw) => {
  if (!raw) return '';
  return raw.replace(/\n/g, '<br>');
};

const isModalOpen = ref(false);
const modalVisible = ref(false);
const currentImage = ref(null);
const currentImageIndex = ref(0);
const modalRef = ref(null);

const currentWorkImages = computed(() => {
  return currentWork.value.images || [];
});

const currentModalImage = computed(() => {
  return currentWorkImages.value[currentImageIndex.value];
});

const openImageModal = (image) => {
  currentImageIndex.value = currentWorkImages.value.findIndex(img => img === image);
  if (currentImageIndex.value === -1) currentImageIndex.value = 0;

  isModalOpen.value = true;

  // Ensure transition effects work properly
  setTimeout(() => {
    modalVisible.value = true;
    // Set focus on the modal window to receive keyboard events
    if (modalRef.value) modalRef.value.focus();
  }, 10);

  // Disable page scrolling when the popup window is opened
  document.body.style.overflow = 'hidden';
};

const closeImageModal = () => {
  modalVisible.value = false;

  // Ensure transition effects work properly
  setTimeout(() => {
    isModalOpen.value = false;
    // Restore page scrolling
    document.body.style.overflow = 'auto';
  }, 300);
};

const nextModalImage = () => {
  if (currentWorkImages.value.length <= 1) return;
  currentImageIndex.value = (currentImageIndex.value + 1) % currentWorkImages.value.length;
};

const prevModalImage = () => {
  if (currentWorkImages.value.length <= 1) return;
  currentImageIndex.value = (currentImageIndex.value - 1 + currentWorkImages.value.length) % currentWorkImages.value.length;
};

const handleKeydown = (event) => {
  if (event.key === 'ArrowRight') {
    nextModalImage();
  } else if (event.key === 'ArrowLeft') {
    prevModalImage();
  } else if (event.key === 'Escape') {
    closeImageModal();
  }
};
</script>

<style scoped>
.image-card {
  transition: transform 0.5s ease, z-index 0.2s ease;
}
</style>
