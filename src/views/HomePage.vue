<template>
  <div class="min-h-screen bg-[#3b2f2f] text-white">
    <div class="animate-fade-in">
      <HeroSection />
      <FeaturedPosts />
      <FooterSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import FeaturedPosts from '../components/FeaturedPosts.vue'
import FooterSection from '../components/FooterSection.vue'
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
