import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['lucide-react'], // Externalize lucide-react if you don't want to bundle it
    },
  },
})
