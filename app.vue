<template>
  <div class="font-sans text-slate-700">
    <!-- Overlay for Loading -->
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-gray-100 z-[100] flex items-center justify-center transition-opacity duration-500"
      :class="{ 'opacity-0': fadeOut }"
    >
      <div class="animate-pulse-scale">
        <img src="~/assets/img/logo.svg" alt="Loading..." class="w-12 h-12" />
      </div>
    </div>

    <NuxtRouteAnnouncer />
    <Navbar />
    <NuxtPage />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;
const isLoading = ref(true);
const fadeOut = ref(false);

onMounted(() => {
  window.addEventListener('load', handlePageLoad);

  // When onMounted is called after the page has already loaded
  if (document.readyState === 'complete') {
    handlePageLoad();
  }
});

onUnmounted(() => {
  window.removeEventListener('load', handlePageLoad);
});

function handlePageLoad() {
  // Start the fade out animation
  fadeOut.value = true;

  // Animation ends and removes the overlay
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
}

useHead({
  title: 'Meet Cheryl Yu',
  meta: [
    // Open Graph meta tags
    { property: 'og:title', content: 'Meet Cheryl Yu' },
    { property: 'og:description', content: 'Welcome to Cheryl Yu\'s portfolio website!' },
    { property: 'og:image', content: `${siteUrl}/images/og-image.png` },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: siteUrl },

    // Twitter Card meta tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Meet Cheryl Yu' },
    { name: 'twitter:description', content: 'Welcome to Cheryl Yu\'s portfolio website!' },
    { name: 'twitter:image', content: `${siteUrl}/images/og-image.png` },

    // Basic meta tags
    { name: 'author', content: 'Cheryl Yu' },
    { name: 'keywords', content: 'Cheryl Yu, portfolio, web developer, front-end developer' },
    { name: 'description', content: 'Welcome to Cheryl Yu\'s portfolio website!' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    // Robots meta tag
    { name: 'robots', content: 'noindex, nofollow' },
  ],
  link: [
    // Apple touch icon
    { rel: 'apple-touch-icon', sizes: '180x180', href: `${siteUrl}/apple-touch-icon.png` },

    // Favicon links
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${siteUrl}/favicon-32x32.png` },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${siteUrl}/favicon-16x16.png` },
    { rel: 'manifest', href: `${siteUrl}/site.webmanifest` }
  ]
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

@keyframes pulse-scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.animate-pulse-scale {
  animation: pulse-scale 1.5s ease-in-out infinite;
}
</style>
