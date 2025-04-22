<template>
    <div class="p-8 bg-brown-50">
      <div v-if="isLoading" class="text-blue-500 text-center">Loading post...</div>
      <div v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</div>
      <div v-if="post">
        <h2 class="text-3xl font-bold text-center text-brown-800">{{ post.title }}</h2>
        <p class="text-gray-700 mt-6">{{ post.body }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  
  const post = ref<any>(null)
  const isLoading = ref(true)
  const errorMessage = ref('')
  const route = useRoute()
  
  const fetchPost = async () => {
    const { id } = route.params // Get post ID from route
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      post.value = response.data
    } catch (err: any) {
      errorMessage.value = err.message || 'An unexpected error occurred'
    } finally {
      isLoading.value = false
    }
  }
  
  onMounted(fetchPost)
  </script>
  
  <style scoped>
  /* Styling for the post detail page */
  h2 {
    text-align: center;
    font-weight: 700;
    color: #6b4f32; /* Brown */
  }
  
  .text-gray-700 {
    color: #4a5568;
  }
  
  .bg-brown-50 {
    background-color: #faf3e0; /* Light brown background */
  }
  </style>
  