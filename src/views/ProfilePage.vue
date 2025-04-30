<template>
  <div class="min-h-screen bg-[#3b2f2f] flex items-center justify-center px-4 py-12">
    <div class="bg-[#6e4f3a] text-white w-full max-w-md rounded-xl shadow-2xl p-6 animate-fade-in">
      <h2 class="text-2xl font-bold mb-6 text-center border-b border-white pb-2">User Profile</h2>

      <div v-if="userStore.user" class="space-y-4">

        <div class="flex justify-between border-b border-brown pb-2">
          <span class="font-semibold">Email:</span>
          <span>{{ userStore.user.email }}</span>
        </div>

        <div class="flex justify-between border-b border-brown pb-2">
          <span class="font-semibold">Name:</span>
          <span>{{ userStore.user.name }}</span>
        </div>

        <div class="flex justify-between">
          <span class="font-semibold">Token:</span>
          <span class="break-all max-w-xs text-sm text-amber-200">{{ userStore.token }}</span>
        </div>
      </div>

      <div v-else class="text-center text-red-200 mt-4">
        User not logged in.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/userStore'
const userStore = useUserStore()
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}
</style>
