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
            <img src="~/assets/img/mint-curve-middle.svg" alt="" class="w-full h-full animate-float" />
            <img src="~/assets/img/girl.png" alt="Cheryl" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3" />

            <div class="absolute top-[5%] right-[20%] w-1/5 group">
              <div class="icon-wrapper group-hover:glow">
                <img src="~/assets/img/piano.png" alt="Piano" class="w-full transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div class="tooltip">I enjoy playing the piano</div>
            </div>

            <div class="absolute top-[40%] right-[-2%] w-1/5 group">
              <div class="icon-wrapper group-hover:glow">
                <img src="~/assets/img/jogging.png" alt="Jogging" class="w-full transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div class="tooltip">I often jog or brisk walk</div>
            </div>

            <div class="absolute bottom-[5%] right-[15%] w-1/5 group">
              <div class="icon-wrapper group-hover:glow">
                <img src="~/assets/img/hotpot.png" alt="Hotpot" class="w-full transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div class="tooltip">I'm a fan of Asian cuisine</div>
            </div>

            <div class="absolute bottom-[10%] left-[20%] w-1/5 group">
              <div class="icon-wrapper group-hover:glow">
                <img src="~/assets/img/movie.png" alt="Movie" class="w-full transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div class="tooltip">I enjoy watching good movies</div>
            </div>

            <div class="absolute top-[40%] left-[-2%] w-1/5 group">
              <div class="icon-wrapper group-hover:glow">
                <img src="~/assets/img/bird.png" alt="Bird" class="w-full transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div class="tooltip">I'm a slave to my bird</div>
            </div>

            <div class="absolute top-[10%] left-[10%] w-1/5 group">
              <div class="icon-wrapper group-hover:glow">
                <img src="~/assets/img/palette.png" alt="Palette" class="w-full transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div class="tooltip">I'm passionate about art and design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Script setup
</script>

<style scoped>
.icon-wrapper {
  position: relative;
  transition: all 0.3s ease;
  border-radius: 50%;
}

.tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  background-color: var(--color-choco-300);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 20;
}

.tooltip::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -5px;
  transform: translateX(-50%);
  border-width: 5px 5px 0;
  border-style: solid;
  border-color: var(--color-choco-300) transparent transparent;
}

.group:hover .tooltip {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}

.group:hover .group-hover\:glow {
  filter: drop-shadow(0 0 12px var(--color-mint-100));
}
</style>
