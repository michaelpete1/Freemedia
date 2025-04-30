<template>
  <div class="p-8 bg-brown-50 min-h-screen">
    <div v-if="isLoading" class="text-blue-500 text-center">Loading post...</div>
    <div v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</div>

    <div v-if="post" class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 class="text-3xl font-bold text-center text-brown-800 mb-4">{{ post.title }}</h2>
      <p class="text-gray-700 leading-relaxed">{{ post.body }}</p>

      <!-- Button to go to Post 1 -->
      <button
        @click="$router.push('/PostDetailPage/1')"
        class="mt-6 bg-brown-800 text-white px-4 py-2 rounded hover:bg-brown-700 block mx-auto"
      >
        Go to Post 1
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

interface Post {
  title: string
  body: string
}

const post = ref<Post | null>(null)
const isLoading = ref(true)
const errorMessage = ref<string>('')

const route = useRoute()

const fetchPost = async () => {
  const { id } = route.params
  if (!id) {
    errorMessage.value = 'Post ID is missing in the route.'
    isLoading.value = false
    return
  }

  try {
    const response = await axios.get(`https://dummyjson.com/posts/${id}`)
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
.bg-brown-50 {
  background-color: #faf3e0;
}

.text-brown-800 {
  color: #4f3b2f;
}

.text-red-500 {
  color: #ef4444;
}

.text-blue-500 {
  color: #3b82f6;
}
</style>
