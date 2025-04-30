<template>
  <section class="py-16 px-6 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Featured Posts</h2>

    <!-- Featured Posts Cards -->
    <div class="grid md:grid-cols-3 gap-8">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="bg-white rounded-xl shadow-md hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
      >
        <!-- Post Image -->
        <img
          :src="post.image"
          alt="Post cover"
          class="w-full h-48 object-cover"
        />

        <!-- Card Content -->
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-[#4e3b31] mb-3">{{ post.title }}</h3>
          <p class="text-gray-600 mb-4">{{ post.summary }}</p>
        </div>

        <!-- Read more button -->
        <div class="p-4">
          <router-link
            to="/Post"
            class="text-[#4e3b31] font-semibold hover:text-[#fbd4b4] hover:underline"
          >
            Read more
          </router-link>
        </div>
      </div>
    </div>

    <!-- Animated News Ticker -->
    <div class="mt-12 overflow-hidden bg-amber-100 rounded-lg shadow-md">
      <div
        class="animate-marquee whitespace-nowrap py-4 px-6 text-[#4e3b31] font-medium text-lg"
      >
        <span v-for="(headline, i) in newsHeadlines" :key="i" class="inline-block mx-8">
          📰 {{ headline }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    title: 'Community Event Highlights',
    summary: 'Get a recap of the weekend’s tech meetup and what’s coming next.',
    image: '/freemedia.jpg',
  },
  {
    title: 'Latest Frameworks in 2025',
    summary: 'Check out our review of the most promising frontend frameworks.',
    image: '/freemedia2.jpg',
  },
  {
    title: 'Next.js vs Nuxt 3',
    summary: 'A deep comparison of two popular meta-frameworks for full-stack development.',
    image: '/freemedia3.jpg',
  },
]

const newsHeadlines = [
  'Nigerian tech startup raises $2M in seed funding!',
  'Vue 4 roadmap revealed — exciting features ahead!',
  'Tailwind Labs announces Tailwind UI 2.0.',
  'Supabase releases native image optimization features.',
]
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  display: inline-block;
  animation: marquee 25s linear infinite;
}
</style>
