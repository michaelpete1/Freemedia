<template>
  <nav class="bg-[#2f241c] text-[#fbd4b4] fixed top-0 left-0 right-0 z-50 shadow-md">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="text-xl font-bold text-[#fbd4b4] hover:text-[#f8c99e] transition">
          FreeMedia
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-6 items-center">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="text-[#f4e9d8] hover:text-[#f8c99e] font-medium transition flex items-center space-x-1"
          >
            <template v-if="link.name === 'HomePage'">
              <Home class="w-5 h-5" />
              <span>Home</span>
            </template>
            <template v-else>
              {{ link.name }}
            </template>
          </router-link>
        </div>

        <!-- Hamburger Icon for Mobile -->
        <button
          @click="toggleMenu"
          class="md:hidden focus:outline-none text-[#fbd4b4]"
        >
          <svg
            v-if="!isOpen"
            class="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <svg
            v-else
            class="w-6 h-6 transition-transform duration-300 transform rotate-45"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-[#3e2f26] px-4 pb-4 pt-2 shadow rounded-b-lg">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="block py-2 text-[#f4e9d8] hover:text-[#f8c99e] font-medium flex items-center space-x-2"
          @click="isOpen = false"
        >
          <template v-if="link.name === 'HomePage'">
            <Home class="w-5 h-5" />
            <span>Home</span>
          </template>
          <template v-else>
            {{ link.name }}
          </template>
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Home } from 'lucide-vue-next'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const navLinks = [
  { name: 'HomePage', path: '/' },
  { name: 'ProfilePage', path: '/ProfilePage' },
  { name: 'LoginPage', path: '/LoginPage' },
  { name: 'CreatePage', path: '/CreatePage' },
  { name: 'PostDetailPage', path: '/PostDetailPage' },
  { name: 'Posts', path: '/Posts' }
]
</script>

<style scoped>
/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Smooth transform for hamburger icon */
.transition-transform {
  transition: transform 0.3s ease;
}

.rotate-45 {
  transform: rotate(45deg);
}
</style>
