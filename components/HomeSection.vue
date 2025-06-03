<template>
  <section id="home" class="min-h-screen bg-choco-50 relative overflow-hidden flex items-center justify-center">
    <img src="~/assets/img/white-curve-top-left.svg" alt="" class="absolute top-0 left-0 w-1/2 md:w-1/4 z-0" />
    <img src="~/assets/img/white-curve-bottom-right.svg" alt="" class="absolute bottom-0 right-0 w-1/2 md:w-1/4 z-0" />

    <div class="container mx-auto px-4 flex items-center relative z-10">
      <div class="w-full flex flex-col md:flex-row justify-center items-center py-16 md:py-0">
        <div class="flex justify-center items-center w-full md:w-2/3 md:ml-8 mb-8 md:mb-0">
          <img src="~/assets/img/desk.svg" alt="Workspace desk" class="relative z-10" />
        </div>

        <div class="flex flex-col justify-center items-center w-full md:w-1/3 md:items-start">
          <h2 class="text-4xl md:text-5xl/[1.25] lg:text-6xl/[1.25] text-center md:text-left font-bold leading-tight md:mt-[60%]">
            <span class="text-choco-300">Hello!</span><br />
            I'm Cheryl.
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Script setup
</script>
