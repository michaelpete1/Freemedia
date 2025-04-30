<template>
  <div class="w-full px-4 py-10 bg-[#5c4033]">
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="rounded-xl shadow-lg overflow-hidden text-white w-[80vw] sm:w-[45%] md:w-[30%] lg:w-[22%]
               animate-fade-up transition-transform duration-500 hover:scale-105"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        <img
          :src="img.src"
          :alt="img.headline"
          class="w-full h-[300px] object-cover rounded-t-xl animate-zoom-in"
        />
        <div class="bg-[#4e3629] overflow-hidden">
          <div
            class="whitespace-nowrap animate-marquee text-center py-2 px-4 text-sm font-medium text-[#fbd4b4]"
          >
            {{ img.headline }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  { src: '/freemedia.jpg', headline: 'Breaking: Vue 3.4 Released With Major Improvements' },
  { src: '/freemedia2.jpg', headline: 'Tech Giants Move Towards Decentralized Media' },
  { src: '/freemedia3.jpg', headline: 'Pinia vs Vuex: Choosing Your State Tool' },
  { src: '/freemedia4.jpg', headline: 'Developers Build Blogs Faster With Tailwind' },
  { src: '/freemedia5.jpg', headline: 'Inside FreeMedia: The Clean Blog Revolution' }
]
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 8s linear infinite;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.8s ease-out both;
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-zoom-in {
  animation: zoomIn 0.9s ease-out both;
}
</style>
