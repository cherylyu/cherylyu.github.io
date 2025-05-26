<template>
  <section id="about" class="min-h-screen bg-gray-100 relative overflow-hidden flex items-center justify-center">
    <img src="~/assets/img/choco-curve-top-right.svg" alt="" class="absolute top-0 right-0 w-1/3 md:w-1/4 z-0" />

    <div class="container mx-auto h-full px-4 relative z-10 flex items-center">
      <div class="flex flex-col md:flex-row items-center justify-center w-full pt-16 pb-8 md:py-0">

        <!-- Left Column -->
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mb-8 md:mb-0 lg:pl-8">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left mb-8">
            About <span class="text-choco-200">Me</span>
          </h2>
          <div class="text-xl lg:text-2xl text-center md:text-left max-w-[95%]">
            <p class="mb-4">
              I'm a software engineer based in Taiwan.
            </p>
            <p class="mb-4">
              With a background in visual design and a passion for UI/UX, I specialize in frontend development.
            </p>
            <p class="mb-4">
              Additionally, I have experience working as a backend (payment) QA engineer.
            </p>
          </div>
        </div>

        <!-- Right Column -->
        <div class="w-full md:w-1/2 flex justify-center items-center relative">
          <div class="relative w-full aspect-square mx-4">
            <img src="~/assets/img/mint-curve-middle.svg" alt="" class="w-full h-full" />
            <img src="~/assets/img/girl.png" alt="Cheryl" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3" />
            <img src="~/assets/img/piano.png" alt="Piano" class="absolute top-[5%] right-[20%] w-1/5" />
            <img src="~/assets/img/jogging.png" alt="Jogging" class="absolute top-[40%] right-[-2%] w-1/5" />
            <img src="~/assets/img/hotpot.png" alt="Hotpot" class="absolute bottom-[5%] right-[15%] w-1/5" />
            <img src="~/assets/img/movie.png" alt="Movie" class="absolute bottom-[10%] left-[20%] w-1/5" />
            <img src="~/assets/img/bird.png" alt="Bird" class="absolute top-[40%] left-[-2%] w-1/5" />
            <img src="~/assets/img/palette.png" alt="Palette" class="absolute top-[10%] left-[10%] w-1/5" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Script setup
</script>
