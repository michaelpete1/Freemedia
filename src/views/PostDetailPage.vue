<template>
  <div class="p-8 bg-brown-50 min-h-screen">
    <div v-if="isLoading" class="text-blue-500 text-center">Loading post...</div>
    <div v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</div>

    <div v-if="post" class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 class="text-3xl font-bold text-center text-brown-800 mb-4">{{ post.title }}</h2>
      <p class="text-gray-700 leading-relaxed">{{ post.body }}</p>

      <!-- Buttons to switch posts -->
      <div class="flex justify-center gap-4 mt-6">
        <button
          @click="$router.push(`/PostDetailPage/${Number(route.params.id) - 1}`)"
          v-if="Number(route.params.id) > 1"
          class="bg-brown-800 text-white px-4 py-2 rounded hover:bg-brown-700"
        >
          Previous Post
        </button>
        <button
          @click="$router.push(`/PostDetailPage/${Number(route.params.id) + 1}`)"
          class="bg-brown-800 text-white px-4 py-2 rounded hover:bg-brown-700"
        >
          Next Post
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
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

const fetchPost = async (id: string | string[]) => {
  isLoading.value = true
  errorMessage.value = ''
  post.value = null

  // Debugging: Log the route parameter to see the current ID
  console.log("Fetching post for ID:", id)

  if (!id) {
    errorMessage.value = 'Post ID is missing in the route.'
    isLoading.value = false
    return
  }

  try {
    const response = await axios.get(`https://dummyjson.com/posts/${id}`)
    
    // Debugging: Log the API response to check data
    console.log("Post fetched:", response.data)

    post.value = response.data
  } catch (err: any) {
    errorMessage.value = err.message || 'An unexpected error occurred'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchPost(route.params.id)
})

// Watch route changes to refetch the post when the ID changes
watch(
  () => route.params.id,
  (newId) => {
    fetchPost(newId)
  }
)
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
