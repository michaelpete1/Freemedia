<template>
  <div class="min-h-screen bg-[#3b2f2f] text-white px-4 py-8">
    <div class="space-y-16 animate-fade-in">
      <!-- Hero Section -->
      <HeroSection />

      <!-- Image Carousel Section -->
      <Carouselimg />

      <!-- Featured Posts -->
      <FeaturedPosts />

      <!-- Footer Section -->
      <FooterSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import Carouselimg from '../components/Carouselimg.vue'
import FeaturedPosts from '../components/FeaturedPosts.vue'

</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out both;
}
</style>
