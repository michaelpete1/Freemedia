<template>
  <section class="relative overflow-hidden bg-gradient-to-r from-[#4e3b31] to-[#6b4f3b] text-[#f4e9d8] py-24 animate-hero-fade-zoom">
    <!-- Decorative background blur elements -->
    <div class="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[#fbd4b4]/10 blur-3xl rounded-full -translate-x-1/2 -z-10"></div>
    <div class="absolute bottom-0 right-10 w-96 h-96 bg-[#fbd4b4]/20 blur-[120px] rounded-full -z-10"></div>

    <!-- Content -->
    <div class="max-w-6xl mx-auto px-6 text-center space-y-8">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
        Welcome to <span class="text-[#fbd4b4]">FreeMedia</span>
      </h1>
      <p class="text-lg md:text-xl text-[#f4e9d8]/80">
        A simple, clean, and beautiful place to share your thoughts freely.
      </p>

      <!-- Buttons -->
      <div class="flex justify-center gap-4 flex-wrap mt-6">
        <router-link to="/Posts">
          <button class="bg-[#fbd4b4] text-[#4e3b31] font-semibold py-3 px-7 rounded-full shadow-md hover:bg-[#f8c99e] transition duration-300">
            Explore Posts
          </button>
        </router-link>
        <router-link to="/ProfilePage">
          <button class="border border-[#fbd4b4] text-[#fbd4b4] py-3 px-7 rounded-full hover:bg-[#fbd4b4]/10 transition duration-300">
            My Profile
          </button>
        </router-link>
      </div>
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
