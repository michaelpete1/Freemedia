<template>
  <div class="flex justify-center items-center min-h-screen bg-brown-50 p-4">
    <div class="w-full max-w-xl p-6 md:p-10 border rounded-lg shadow-md bg-white relative">

      <transition name="fade">
        <div
          v-if="showSuccess"
          class="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded shadow text-sm"
        >
          ✅ Post created successfully!
        </div>
      </transition>

      <h2 class="text-3xl font-bold mb-6 text-center text-brown-800">Create a Post</h2>
      
      <form @submit.prevent="handleCreatePost" class="space-y-5">
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
          class="w-full p-3 bg-brown-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-brown-500 transition-colors"
        >
          {{ isLoading ? 'Creating...' : 'Create Post' }}
        </button>
      </form>

      <p v-if="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</p>
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
const showSuccess = ref(false)
const router = useRouter()

const handleCreatePost = async () => {
  isLoading.value = true
  errorMessage.value = ''
  showSuccess.value = false

  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: title.value,
      body: content.value,
      userId: 1,
    })

    if (response.status === 201) {
      showSuccess.value = true
      setTimeout(() => {
        router.push('/posts')
      }, 1000) // brief delay to show success message
    }
  } catch (err: any) {
    errorMessage.value = err.message || 'An unexpected error occurred'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

.bg-brown-50 {
  background-color: #faf3e0;
}

.text-brown-800 {
  color: #4f3b2f;
}

.text-brown-600 {
  color: #6b4f32;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
