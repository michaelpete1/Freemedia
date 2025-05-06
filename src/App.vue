<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
</script>
