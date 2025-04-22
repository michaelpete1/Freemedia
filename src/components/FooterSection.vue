<template>
  <footer class="bg-[#4e3b31] py-6 text-center text-[#f4e9d8] animate-fade-in-up shadow-inner">
    <p>&copy; 2025 <span class="font-semibold text-[#fbd4b4]">FreeMedia</span>. Built with ❤️ using Vue & Tailwind.</p>
  </footer>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}
</style>
