<template>
  <section class="bg-gradient-to-r from-[#4e3b31] to-[#6b4f3b] text-[#f4e9d8] py-20 animate-hero-fade-zoom">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to <span class="text-[#fbd4b4]">FreeMedia</span></h1>
      <p class="text-lg md:text-xl mb-8">
        A simple, clean, and beautiful place to share your thoughts freely.
      </p>
      <router-link to="/Posts">
        <button class="bg-[#fbd4b4] text-[#4e3b31] font-semibold py-2 px-6 rounded-full hover:bg-[#f8c99e] transition">
          Explore Posts
        </button>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
@keyframes heroFadeZoom {
  0% {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-hero-fade-zoom {
  animation: heroFadeZoom 1.2s ease-out;
}
</style>
