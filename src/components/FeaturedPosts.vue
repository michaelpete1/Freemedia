<template>
    <section class="py-16 px-6 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10">Featured Posts</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(post, index) in posts" :key="index" class="bg-white rounded-xl shadow hover:shadow-lg p-5 transition">
          <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
          <p class="text-gray-600 mb-4">{{ post.summary }}</p>
          <router-link to="/Post" class="text-indigo-600 font-medium hover:underline">Read more</router-link>
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
  