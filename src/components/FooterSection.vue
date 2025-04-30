<template>
  <footer class="bg-[#4e3b31] py-6 text-center text-[#f4e9d8] animate-fade-in-up shadow-inner">
    <p class="mb-4">
      &copy; 2025 <span class="font-semibold text-[#fbd4b4]">FreeMedia</span>.
      Built with ❤️ using Vue & Tailwind.
    </p>
    <div class="flex justify-center gap-4">
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <svg class="w-6 h-6 fill-[#f4e9d8] hover:fill-[#1DA1F2]" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <svg class="w-6 h-6 fill-[#f4e9d8] hover:fill-[#0077B5]" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zm7.5-11c0-1.38.56-2.63 1.47-3.54A5 5 0 0112.5 8c2.49 0 4 1.68 4 4.2V24h-5v-9.6c0-1.18-.84-1.4-1.14-1.4-.58 0-1.36.42-1.36 1.5V24h-5V13z" />
        </svg>
      </a>
      <a
        href="https://www.youtube.com/channel/yourchannel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <svg class="w-6 h-6 fill-[#f4e9d8] hover:fill-[#FF0000]" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.99 2.99 0 00-2.105-2.12C19.66 3.5 12 3.5 12 3.5s-7.66 0-9.393.566A2.99 2.99 0 00.502 6.186C0 8 0 12 0 12s0 4 .502 5.814a2.99 2.99 0 002.105 2.12C4.34 20.5 12 20.5 12 20.5s7.66 0 9.393-.566a2.99 2.99 0 002.105-2.12C24 16 24 12 24 12s0-4-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
        </svg>
      </a>
    </div>
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
