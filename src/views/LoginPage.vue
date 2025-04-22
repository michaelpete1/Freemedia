<template>
  <div class="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#4e3b31] to-[#6b4f3b] text-[#f4e9d8]">
    <div class="w-full max-w-sm p-8 rounded-xl shadow-lg backdrop-blur-md bg-[#2f241c]/80 animate-fade-in">
      <h2 class="text-2xl font-bold mb-6 text-center text-[#fbd4b4]">Welcome Back</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="w-full p-3 rounded bg-[#f4e9d8] text-[#4e3b31] placeholder:text-[#8d7a6d]"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="w-full p-3 rounded bg-[#f4e9d8] text-[#4e3b31] placeholder:text-[#8d7a6d]"
        />
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full py-2 bg-[#fbd4b4] text-[#4e3b31] font-semibold rounded hover:bg-[#f8c99e] transition disabled:bg-opacity-50"
        >
          Login
        </button>
      </form>
      <p v-if="errorMessage" class="text-red-400 mt-4">{{ errorMessage }}</p>
      <p v-if="isLoading" class="text-yellow-300 mt-2">Logging in...</p>
      <p class="text-center mt-6 text-sm">
        Don't have an account?
        <router-link to="/SignUpPage" class="text-[#fbd4b4] hover:underline">Sign Up here</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import { supabase } from './lib/supabase'

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const router = useRouter()
const userStore = useUserStore()

const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) {
      errorMessage.value = error.message
    } else if (data?.user) {
      const user = {
        id: data.user.id,
        email: data.user.email || '',
        name: data.user.user_metadata?.name || 'Default Name',
      }

      userStore.login(user, data.session?.access_token || '')
      localStorage.setItem('user', JSON.stringify(userStore.user))
      localStorage.setItem('token', userStore.token)

      router.push('/') // Redirect to Home after login
    }
  } catch (err: any) {
    errorMessage.value = err.message || 'An unexpected error occurred'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
