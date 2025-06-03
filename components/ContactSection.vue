<template>
  <section id="contact" class="min-h-screen bg-gray-100 flex flex-col relative">
    <!-- Dark Brown Block -->
    <div class="relative bg-choco-300 h-[33vh] flex items-center">
      <img src="~/assets/img/choco-wave.svg" alt="" class="absolute top-0 left-0 w-full -translate-y-1/2" />

      <!-- Deco Shapes -->
      <div class="absolute w-20 h-20 bg-white opacity-30 rounded-lg left-[15%] bottom-[20%] animate-float-medium"></div>
      <div class="absolute w-24 h-24 bg-white opacity-20 rounded-full left-[25%] top-[15%] animate-float-fast"></div>
      <div class="absolute w-32 h-32 bg-white opacity-10 rounded-lg right-[25%] top-[20%] animate-float-slow"></div>
      <div class="absolute w-16 h-16 bg-white opacity-15 rounded-full right-[15%] bottom-[15%] animate-float-medium"></div>

      <div class="container mx-auto relative">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-choco-50 text-center">Contact</h2>
      </div>

      <img src="~/assets/img/choco-wave.svg" alt="" class="absolute bottom-0 left-0 w-full translate-y-1/2 rotate-180" />
    </div>

    <!-- Social Media Links -->
    <div class="container mx-auto px-4 py-20 flex flex-col flex-grow">
      <p class="my-4 text-xl md:text-2xl text-center text-choco-300">Learn more about me through other channels!</p>
      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 flex-grow">
        <a href="https://linkedin.com/in/cherylyu26" target="_blank" rel="noopener noreferrer" class="w-1/4 lg:max-w-[160px] flex items-center justify-center group rounded-lg transition-all rotate-12 animate-sway-1">
          <img src="~/assets/img/hexagon-linkedin.svg" alt="LinkedIn" class="group-hover:scale-110 transition-transform" />
        </a>

        <a href="https://github.com/cherylyu" target="_blank" rel="noopener noreferrer" class="w-1/4 lg:max-w-[160px] flex items-center justify-center group rounded-lg transition-all -rotate-3 animate-sway-2">
          <img src="~/assets/img/hexagon-github.svg" alt="GitHub" class="group-hover:scale-110 transition-transform" />
        </a>

        <a href="mailto:cherylworkshop@gmail.com" class="w-1/4 lg:max-w-[160px] flex items-center justify-center group rounded-lg transition-all rotate-6 animate-sway-3">
          <img src="~/assets/img/hexagon-email.svg" alt="Email" class="group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-slate-700 text-white py-6 mt-auto">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left">
          <p>&copy; {{ new Date().getFullYear() }} Cheryl Yu. All rights reserved.</p>
          <p class="text-gray-400 mt-2 md:mt-0">
            Some illustrations are sourced from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" class="underline">Freepik</a>
          </p>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup>
// Script setup
</script>

<style scoped>
@keyframes sway-1 {
  0%, 100% { transform: rotate(-15deg); }
  50% { transform: rotate(15deg); }
}

@keyframes sway-2 {
  0%, 100% { transform: translateY(25%) rotate(10deg); }
  50% { transform: translateY(25%) rotate(-10deg); }
}

@keyframes sway-3 {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(20deg); }
}

@keyframes float-animation {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-sway-1 {
  animation: sway-1 4s ease-in-out infinite;
}

.animate-sway-2 {
  animation: sway-2 6s ease-in-out infinite;
}

.animate-sway-3 {
  animation: sway-3 5s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-animation 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-animation 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-animation 4s ease-in-out infinite;
}
</style>
