<!-- src/layouts/DefaultLayout.vue -->
<template>
    <div class="min-h-screen flex flex-col">
      <main class="flex-grow">
        <router-view />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Footer from '../components/FooterSection.vue'
  </script>
  