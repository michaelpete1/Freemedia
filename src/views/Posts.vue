<template>
    <div class="p-8 bg-brown-50">
      <h2 class="text-2xl font-bold mb-6 text-center text-brown-800">All Posts</h2>
      <div v-if="isLoading" class="text-blue-500 text-center">Loading posts...</div>
      <div v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</div>
      <div v-if="posts.length > 0">
        <div v-for="post in posts" :key="post.id" class="mb-6 border-b pb-4">
          <router-link
            :to="`/post/${post.id}`"
            class="text-lg font-semibold text-brown-600 hover:text-brown-800"
          >
            {{ post.title }}
          </router-link>
          <p class="text-gray-600 mt-2">{{ post.body.substring(0, 100) }}...</p>
        </div>
      </div>
      <div v-if="posts.length === 0" class="text-gray-500 text-center">No posts available.</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const posts = ref<any[]>([])
  const isLoading = ref(true)
  const errorMessage = ref('')
  
  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts.value = response.data
    } catch (err: any) {
      errorMessage.value = err.message || 'An unexpected error occurred'
    } finally {
      isLoading.value = false
    }
  }
  
  onMounted(fetchPosts)
  </script>
  
  <style scoped>
  /* Styling for the posts list */
  h2 {
    text-align: center;
  }
  
  .router-link {
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    color: #6b4f32; /* Brown */
    margin-bottom: 4px;
  }
  
  .router-link:hover {
    color: #3e2c1c; /* Darker Brown */
  }
  
  .text-gray-600 {
    color: #4a5568;
  }
  
  .bg-brown-50 {
    background-color: #faf3e0; /* Light brown background */
  }
  
  .text-brown-800 {
    color: #4f3b2f; /* Dark brown */
  }
  
  .text-brown-600 {
    color: #6b4f32; /* Brown */
  }
  
  .text-red-500 {
    color: #ef4444;
  }
  
  .text-blue-500 {
    color: #3b82f6;
  }
  </style>
  