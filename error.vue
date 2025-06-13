<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-choco-50 p-4 relative overflow-hidden">
    <img src="~/assets/img/white-curve-top-left.svg" alt="" class="absolute top-0 left-0 w-1/2 md:w-1/4 z-0" />
    <img src="~/assets/img/white-curve-bottom-right.svg" alt="" class="absolute bottom-0 right-0 w-1/2 md:w-1/4 z-0" />

    <div class="text-center max-w-lg relative z-10">
      <h1 class="text-8xl md:text-9xl font-bold text-choco-300 mb-6">{{ errorInfo.statusCode }}</h1>

      <h2 class="text-3xl md:text-4xl font-semibold text-choco-300 mb-6">{{ errorInfo.title }}</h2>
      <p class="text-lg md:text-xl mb-10 text-slate-700 leading-relaxed">
        {{ errorInfo.message }}
      </p>

      <NuxtLink to="/"
        class="inline-block px-6 py-2 bg-white text-choco-200 border-2 border-choco-200 rounded-full font-medium
                  hover:text-choco-300 hover:border-choco-300 hover:scale-105 transition-all duration-300 transform">
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Page Not Found - 404',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
});

const props = defineProps({
  error: Object
});

const getErrorMessage = () => {
  if (props.error?.statusCode === 404) {
    return {
      statusCode: 404,
      title: 'Page Not Found',
      message: 'Sorry, the page you are looking for doesn\'t exist or has been moved.'
    }
  }
  return {
    statusCode: props.error?.statusCode || 500,
    title: 'Something went wrong',
    message: 'An unexpected error occurred. Please try again later.'
  }
};

const errorInfo = getErrorMessage();
</script>
