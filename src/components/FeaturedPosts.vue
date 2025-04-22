<template>
  <section class="py-16 px-6 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Featured Posts</h2>

    <!-- Featured Posts Cards -->
    <div class="grid md:grid-cols-3 gap-8">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="bg-white rounded-xl shadow-md hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
      >
        <!-- Card Content -->
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-[#4e3b31] mb-3">{{ post.title }}</h3>
          <p class="text-gray-600 mb-4">{{ post.summary }}</p>
        </div>
        
        <!-- Read more button -->
        <div class="p-4">
          <router-link
            to="/Post"
            class="text-[#4e3b31] font-semibold hover:text-[#fbd4b4] hover:underline"
          >
            Read more
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  { title: 'Vue + Pinia Auth Setup', summary: 'Learn how to implement user login using Vue, Pinia, and Axios.' },
  { title: 'TailwindCSS for Beginners', summary: 'A quick guide to start building stylish UIs with Tailwind CSS.' },
  { title: 'Building a Mini Blog App', summary: 'How we built FreeMedia with modular components and clean design.' },
]
</script>
