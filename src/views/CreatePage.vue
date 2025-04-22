<template>
    <div class="flex justify-center items-center h-screen bg-brown-50">
      <div class="w-full max-w-lg p-8 border rounded-lg shadow-md bg-white">
        <h2 class="text-2xl font-bold mb-4 text-center text-brown-800">Create a Post</h2>
        <form @submit.prevent="handleCreatePost" class="space-y-4">
          <input
            v-model="title"
            type="text"
            placeholder="Post Title"
            required
            class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
          <textarea
            v-model="content"
            placeholder="Post Content"
            required
            class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-brown-500 h-48"
          ></textarea>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full p-3 bg-brown-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-brown-500"
          >
            Create Post
          </button>
        </form>
        <p v-if="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</p>
        <p v-if="isLoading" class="text-blue-500 text-center mt-4">Creating post...</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  
  const title = ref('')
  const content = ref('')
  const isLoading = ref(false)
  const errorMessage = ref('')
  const router = useRouter()
  
  const handleCreatePost = async () => {
    isLoading.value = true
    errorMessage.value = ''
  
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title.value,
        body: content.value,
        userId: 1, // Set a dummy user ID (JSONPlaceholder requires this)
      })
  
      // Simulate post creation success (though the data will not persist)
      if (response.status === 201) {
        router.push('/posts') // Redirect to posts page after creation
      }
    } catch (err: any) {
      errorMessage.value = err.message || 'An unexpected error occurred'
    } finally {
      isLoading.value = false
    }
  }
  </script>
  
  <style scoped>
  /* Styling for Create Post form */
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  button:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
  
  .text-red-500 {
    color: #ef4444;
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
  </style>
  